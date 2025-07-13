import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/blott_logo.png";

interface NewsArticle {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const API_URL = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`;

function App() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();
      setArticles(data);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleArticleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Blott Logo" className="logo-image" />
          </div>
        </header>
        <main className="main">
          <h1 className="title">NEWS</h1>
          <div className="loading">Loading...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Blott Logo" className="logo-image" />
          </div>
        </header>
        <main className="main">
          <h1 className="title">NEWS</h1>
          <div className="error">{error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">BLOTT</span>
        </div>
      </header>
      <main className="main">
        <h1 className="title">NEWS</h1>
        <div className="news-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              className="news-card"
              onClick={() => handleArticleClick(article.url)}
            >
              <div className="news-image">
                <img src={article.image} alt={article.headline} />
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-source">{article.source}</span>
                  <span className="news-date">
                    {formatDate(article.datetime)}
                  </span>
                </div>
                <h2 className="news-headline">{article.headline}</h2>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
