import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NewsCard from "../NewsCard";
import type { NewsArticle } from "../../types/NewsArticle";

vi.mock("../../utils/newsUtils", () => ({
  handleArticleClick: vi.fn(),
}));

vi.mock("../../utils/dateUtils", () => ({
  formatDate: vi.fn(() => "June 15, 2021"),
}));

describe("NewsCard", () => {
  const mockArticle: NewsArticle = {
    category: "general",
    datetime: 1623715200,
    headline: "Test News Headline",
    id: 1,
    image: "https://example.com/image.jpg",
    related: "related-article",
    source: "Test Source",
    summary: "Test summary",
    url: "https://example.com/article",
  };

  it("should render article information", () => {
    render(<NewsCard article={mockArticle} />);

    expect(screen.getByText("Test News Headline")).toBeInTheDocument();
    expect(screen.getByText("Test Source")).toBeInTheDocument();
  });
});
