import { useState, useEffect } from "react";
import type { NewsArticle } from "./types/NewsArticle";
import { fetchNews } from "./utils/newsUtils";
import Header from "./components/Header";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import NewsGrid from "./components/NewsGrid";
import "./App.css";

function App() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchNews();
      setArticles(data);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="title">NEWS</h1>
        <NewsGrid articles={articles} />
      </main>
    </div>
  );
}

export default App;
