import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header1 from "./Header1";

describe("header scene", () => {
  it("is decorative: hidden from screen readers and not focusable", () => {
    const { container } = render(
      <MemoryRouter>
        <Header1 />
      </MemoryRouter>
    );

    const scene = container.querySelector(".hdr-scene");
    expect(scene).toHaveAttribute("aria-hidden", "true");
    expect(scene.querySelector(".hdr-skyline")).toBeInTheDocument();
    expect(scene.querySelector(".hdr-walker-figure")).toBeInTheDocument();
    // Merlion with its water spout and splash
    expect(scene.querySelector(".hdr-merlion .hdr-merlion-body")).toBeInTheDocument();
    expect(scene.querySelector(".hdr-merlion .hdr-spout")).toBeInTheDocument();
    expect(scene.querySelector(".hdr-merlion .hdr-splash")).toBeInTheDocument();
    expect(scene.querySelectorAll("a, button, [tabindex]")).toHaveLength(0);

    // it sits inside the header card, before the menu container
    expect(scene.parentElement).toHaveClass("cs_main_header");
    expect(scene.nextElementSibling).toHaveClass("container");
  });
});
