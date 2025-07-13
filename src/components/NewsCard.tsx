import type { NewsArticle } from "../types/NewsArticle";
import { formatDate } from "../utils/dateUtils";
import { handleArticleClick } from "../utils/newsUtils";
import ImageWithSkeleton from "./ImageWithSkeleton";
import "./NewsCard.css";

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <article
      className="news-card"
      onClick={() => handleArticleClick(article.url)}
    >
      <div className="news-image">
        <ImageWithSkeleton src={article.image} alt={article.headline} />
      </div>
      <div className="news-content">
        <div className="news-meta">
          <span className="news-source">{article.source}</span>
          <span className="news-date">{formatDate(article.datetime)}</span>
        </div>
        <h2 className="news-headline">{article.headline}</h2>
      </div>
    </article>
  );
};

export default NewsCard;
