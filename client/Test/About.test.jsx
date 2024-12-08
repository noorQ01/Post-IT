import { describe, it, expect } from "vitest"; // Import necessary testing functions from Vitest
import { render, screen } from "@testing-library/react"; // Import the render function from React Testing Library to render React components in a test environment
import About from "../src/Components/About"; // Import the About component to be tested
import React from "react"; // Import React to support JSX syntax
import "@testing-library/jest-dom";

describe("About", () => {
  //Test Case 1
  it("should render the About component", () => {
    render(<About />);
    const aboutElement = screen.getByRole("heading", { level: 1 });
    expect(aboutElement).toBeInTheDocument();
  });
  // Test Case 2
  it("should have the text about", () => {
    render(<About />);
    const text = screen.queryByText(/about/i);
    expect(text).toBeInTheDocument();
  });
  //Test Case 3
  it("should have the image", () => {
    render(<About />);
    const image = screen.getByAltText("devImage");
    expect(image).toHaveClass("userImage");
  });
  //Test Case 4
  it("should have an email", () => {
    render(<About />);
    const email = screen.queryByText(/@/);
    expect(email).toBeInTheDocument();
  });
});
