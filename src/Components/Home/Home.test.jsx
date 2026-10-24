import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomeHero from "./HomeHero";
import HomePricingTeaser from "./HomePricingTeaser";
import HomeCta from "./HomeCta";
import ScrollToTop from "../Common/ScrollToTop";

const inRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("home page sections", () => {
  it("hero has one h1, the main actions and links to every module", () => {
    inRouter(<HomeHero />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("link", { name: /Explore our ERP/ })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: "See pricing" })).toHaveAttribute("href", "/Pricing");
    expect(screen.getByRole("link", { name: "Recruitment" })).toHaveAttribute("href", "/module-pricing/recruitment");
    expect(screen.getByText("15-day free trial on ERP plans")).toBeInTheDocument();
  });

  it("pricing teaser shows prices from the pricing data and links to each option", () => {
    inRouter(<HomePricingTeaser />);

    expect(screen.getByText("SGD 150")).toBeInTheDocument();
    expect(screen.getByText("SGD 4")).toBeInTheDocument();
    expect(screen.getByText(/then SGD 4 per extra employee/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /See ERP plans/ })).toHaveAttribute("href", "/Pricing#erp-plans");
    expect(screen.getByRole("link", { name: /See module plans/ })).toHaveAttribute("href", "/Pricing#modules");
  });

  it("closing banner links to pricing, contact and phone", () => {
    inRouter(<HomeCta />);

    expect(screen.getByRole("link", { name: /Request a free trial/ })).toHaveAttribute("href", "/Pricing");
    expect(screen.getByRole("link", { name: "Contact us" })).toHaveAttribute("href", "/contact-us");
    expect(screen.getByRole("link", { name: /\+65 9021 4545/ })).toHaveAttribute("href", "tel:+6590214545");
  });
});

describe("ScrollToTop", () => {
  it("scrolls to the #hash target instead of the top", () => {
    const scrollIntoView = vi.fn();
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/Pricing#modules"]}>
        <ScrollToTop />
        <Routes>
          <Route path="/Pricing" element={<div id="modules" ref={(el) => el && (el.scrollIntoView = scrollIntoView)} />} />
        </Routes>
      </MemoryRouter>
    );

    expect(scrollIntoView).toHaveBeenCalled();
    expect(scrollTo).not.toHaveBeenCalled();
    scrollTo.mockRestore();
  });

  it("scrolls to the top when there is no hash", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/Pricing"]}>
        <ScrollToTop />
      </MemoryRouter>
    );

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "instant" });
    scrollTo.mockRestore();
  });
});
