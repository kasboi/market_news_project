import type { NewsArticle } from '../types/NewsArticle'

const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY
const API_URL = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`

export const fetchNews = async (): Promise<NewsArticle[]> => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch news')
  }

  const data = await response.json()
  return data
}

export const handleArticleClick = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
