import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import TrialRequestForm from "./TrialRequestForm";
import LandingPage from "./LandingPage";

const EMAIL = "enquiry@sbrostech.com.sg";

const jsonResponse = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: () => Promise.resolve(body),
});

const renderForm = (onClose = vi.fn()) => {
  render(
    <MemoryRouter>
      <TrialRequestForm onClose={onClose} contactEmail={EMAIL} />
    </MemoryRouter>
  );
  return { onClose };
};

const fillRequired = async (user) => {
  await user.type(screen.getByLabelText(/Company name/), "Acme Pte Ltd");
  await user.type(screen.getByLabelText(/Your name/), "Alex Tan");
  await user.type(screen.getByLabelText(/Work email/), "alex@acme.com.sg");
  await user.click(screen.getByRole("checkbox", { name: /I agree to be contacted/ }));
};

const submit = () => screen.getByRole("button", { name: /Start 15-Day Free Trial|Sending/ });

let fetchMock;

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
  delete window.gtag;
});

describe("15-day free trial form", () => {
  it("sends the trial lead to the ERP and shows the honest success message", async () => {
    const user = userEvent.setup();
    window.gtag = vi.fn();
    fetchMock.mockResolvedValue(jsonResponse(201, { ok: true, id: 12, message: "Thanks" }));

    renderForm();
    await fillRequired(user);
    await user.type(screen.getByLabelText(/Phone/), "+65 9123 4567");
    await user.selectOptions(screen.getByLabelText(/Company size/), "11-50");
    await user.click(screen.getByRole("checkbox", { name: "HRM" }));
    await user.click(screen.getByRole("checkbox", { name: "Payroll" }));
    await user.type(screen.getByLabelText(/Message/), "Need payroll by January.");
    await user.click(submit());

    const done = await screen.findByRole("status");
    expect(done).toHaveTextContent("Thank you!");
    expect(done).toHaveTextContent(
      "Our team will set up your 15-day trial and email your login details within 1 business day."
    );
    // never claims the trial has started, no login link
    expect(screen.queryByRole("link", { name: /log ?in/i })).not.toBeInTheDocument();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://erp.test/api/v1/public/leads");
    expect(options.method).toBe("POST");
    expect(options.headers["Content-Type"]).toBe("application/json");

    const body = JSON.parse(options.body);
    expect(body).toEqual({
      company: "Acme Pte Ltd",
      contactName: "Alex Tan",
      email: "alex@acme.com.sg",
      phone: "+65 9123 4567",
      country: "Singapore",
      companySize: "11-50",
      planInterest: "FREE_TRIAL_15D",
      requirements:
        "Modules: HRM, Payroll\n\nNeed payroll by January.\n\nConsent: agreed to be contacted about the trial and to the Privacy Policy.",
    });

    expect(window.gtag).toHaveBeenCalledWith("event", "trial_request", { plan_interest: "FREE_TRIAL_15D" });
  });

  it("requires company, name, email and consent before calling the API", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(submit());

    expect(screen.getByText("Company name is required.")).toBeInTheDocument();
    expect(screen.getByText("Work email is required.")).toBeInTheDocument();
    expect(screen.getByText(/Please agree so we can contact you/)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("shows field messages on 422", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue(
      jsonResponse(422, { detail: [{ loc: ["body", "email"], msg: "value is not a valid email address" }] })
    );

    renderForm();
    await fillRequired(user);
    await user.click(submit());

    expect(await screen.findByRole("alert")).toHaveTextContent(/check the highlighted fields/);
    expect(screen.getByText("value is not a valid email address")).toBeInTheDocument();
    expect(submit()).toBeEnabled();
  });

  it("shows the rate-limit message on 429", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue(jsonResponse(429, {}));

    renderForm();
    await fillRequired(user);
    await user.click(submit());

    expect(await screen.findByRole("alert")).toHaveTextContent("Too many attempts, please try again in a few minutes.");
  });

  it("shows the email fallback on network errors and other statuses", async () => {
    const user = userEvent.setup();
    fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));

    renderForm();
    await fillRequired(user);
    await user.click(submit());

    expect(await screen.findByRole("alert")).toHaveTextContent(
      `Something went wrong, please email us at ${EMAIL}.`
    );
  });

  it("does not call the API when the honeypot is filled", async () => {
    const user = userEvent.setup();
    renderForm();

    await fillRequired(user);
    fireEvent.change(screen.getByLabelText("Leave this field empty"), { target: { value: "spam" } });
    await user.click(submit());

    expect(await screen.findByRole("status")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("disables the button and sends only once while submitting", async () => {
    const user = userEvent.setup();
    let resolveFetch;
    fetchMock.mockReturnValue(new Promise((resolve) => { resolveFetch = resolve; }));

    renderForm();
    await fillRequired(user);
    const button = submit();
    await user.click(button);

    expect(button).toBeDisabled();
    fireEvent.submit(button.closest("form"));
    expect(fetchMock).toHaveBeenCalledTimes(1);

    resolveFetch(jsonResponse(201, { ok: true, id: 1 }));
    await screen.findByRole("status");
  });
});

describe("landing page buttons", () => {
  it("open the trial form and keep a Book a Demo link", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const trialButtons = screen.getAllByRole("button", { name: "Start 15-Day Free Trial" });
    expect(trialButtons).toHaveLength(3); // nav, hero, ERP section
    expect(screen.getByRole("link", { name: "Book a Demo" })).toHaveAttribute("href", "#contact");
    expect(screen.getAllByText("15 days free · No credit card · Full access to your chosen modules").length).toBeGreaterThanOrEqual(2);

    await user.click(trialButtons[1]);
    expect(screen.getByRole("dialog")).toHaveAccessibleName("Start your 15-day free trial");
  });
});
