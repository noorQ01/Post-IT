import { describe, it, expect } from "vitest"; // Import necessary testing functions from Vitest
import { render, screen } from "@testing-library/react"; // Import the render function from React Testing Library to render React components in a test environment
import About from "../src/Components/About"; // Import the About component to be tested
import React from "react"; // Import React to support JSX syntax

describe("About", () => {
  it("should render the About component", () => {
    render(<About />);
    const aboutElement = screen.getByRole("heading", { level: 1 });
    expect(aboutElement).toBeInTheDocument();
  });
  it("should have the text about", () => {
    render(<About />);
    const text = screen.queryByText(/about/i);
    expect(text).toBeInTheDocument();
  });
  it("should have the image", () => {
    render(<About />);
    const image = screen.getByAltText("devImage");
    expect(image).toHaveClass("userImage");
  });
});
