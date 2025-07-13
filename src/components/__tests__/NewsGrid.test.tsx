import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NewsGrid from "../NewsGrid";
import type { NewsArticle } from "../../types/NewsArticle";

// Mock NewsCard component
vi.mock("../NewsCard", () => ({
  default: ({ article }: { article: NewsArticle }) => (
    <div data-testid={`news-card-${article.id}`}>
      <h2>{article.headline}</h2>
      <p>{article.source}</p>
    </div>
  ),
}));

describe("NewsGrid", () => {
  const mockArticles: NewsArticle[] = [
    {
      category: "general",
      datetime: 1623715200,
      headline: "First News Headline",
      id: 1,
      image: "https://example.com/image1.jpg",
      related: "related-article-1",
      source: "Source One",
      summary: "First summary",
      url: "https://example.com/article1",
    },
    {
      category: "general",
      datetime: 1623801600,
      headline: "Second News Headline",
      id: 2,
      image: "https://example.com/image2.jpg",
      related: "related-article-2",
      source: "Source Two",
      summary: "Second summary",
      url: "https://example.com/article2",
    },
  ];

  it("should render all news articles", () => {
    render(<NewsGrid articles={mockArticles} />);

    expect(screen.getByTestId("news-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("news-card-2")).toBeInTheDocument();
    expect(screen.getByText("First News Headline")).toBeInTheDocument();
    expect(screen.getByText("Second News Headline")).toBeInTheDocument();
  });

  it("should render empty grid when no articles", () => {
    render(<NewsGrid articles={[]} />);

    const grid = screen.getByTestId("news-grid");
    expect(grid).toBeEmptyDOMElement();
  });

  it("should have correct CSS class", () => {
    render(<NewsGrid articles={mockArticles} />);

    const grid = screen.getByTestId("news-grid");
    expect(grid).toHaveClass("news-grid");
  });

  it("should render single article", () => {
    const singleArticle = [mockArticles[0]];
    render(<NewsGrid articles={singleArticle} />);

    expect(screen.getByTestId("news-card-1")).toBeInTheDocument();
    expect(screen.queryByTestId("news-card-2")).not.toBeInTheDocument();
  });

  it("should handle large number of articles", () => {
    const manyArticles = Array.from({ length: 10 }, (_, i) => ({
      ...mockArticles[0],
      id: i + 1,
      headline: `Article ${i + 1}`,
    }));

    render(<NewsGrid articles={manyArticles} />);

    manyArticles.forEach((_, index) => {
      expect(screen.getByTestId(`news-card-${index + 1}`)).toBeInTheDocument();
    });
  });
});
