import type { NewsArticle } from "../types/NewsArticle";
import NewsCard from "./NewsCard";
import "./NewsGrid.css";

interface NewsGridProps {
  articles: NewsArticle[];
}

const NewsGrid = ({ articles }: NewsGridProps) => {
  return (
    <div className="news-grid" data-testid="news-grid">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsGrid;
