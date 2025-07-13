import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorState from "../ErrorState";

describe("ErrorState", () => {
  it("should render error message", () => {
    render(<ErrorState error="Something went wrong" />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
