import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

vi.mock("../utils/newsUtils", () => ({
  fetchNews: vi.fn().mockRejectedValue(new Error("Failed to fetch")),
}));

describe("App", () => {
  it("should render loading state initially", () => {
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
