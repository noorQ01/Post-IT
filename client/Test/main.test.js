import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react"; // Import the render function from React Testing Library to render React components in a test environment

describe("main", () => {
  it("should result to pass", () => {
    expect(1).toBeTruthy();
  });
});
