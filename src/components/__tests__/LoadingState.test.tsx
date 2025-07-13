import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoadingState from "../LoadingState";

describe("LoadingState", () => {
  it("should render loading message", () => {
    render(<LoadingState />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
