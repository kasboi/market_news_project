import { describe, it, expect } from 'vitest'
import type { NewsArticle } from '../NewsArticle'

describe('NewsArticle', () => {
  it('should have correct structure', () => {
    const article: NewsArticle = {
      category: 'general',
      datetime: 1623715200,
      headline: 'Test Headline',
      id: 1,
      image: 'https://example.com/image.jpg',
      related: 'related-article',
      source: 'Test Source',
      summary: 'Test summary',
      url: 'https://example.com/article',
    }

    expect(article).toBeDefined()
    expect(typeof article.id).toBe('number')
    expect(typeof article.headline).toBe('string')
  })
})


it('should validate required properties', () => {
  const article: NewsArticle = {
    category: 'technology',
    datetime: 1623715200,
    headline: 'Tech News',
    id: 123,
    image: 'https://example.com/tech.jpg',
    related: 'tech-related',
    source: 'TechSource',
    summary: 'Technology summary',
    url: 'https://example.com/tech-article',
  }

  // Verify all required properties exist
  expect(article).toHaveProperty('category')
  expect(article).toHaveProperty('datetime')
  expect(article).toHaveProperty('headline')
  expect(article).toHaveProperty('id')
  expect(article).toHaveProperty('image')
  expect(article).toHaveProperty('related')
  expect(article).toHaveProperty('source')
  expect(article).toHaveProperty('summary')
  expect(article).toHaveProperty('url')
})

it('should handle different data types correctly', () => {
  const article: NewsArticle = {
    category: 'sports',
    datetime: 1623715200,
    headline: 'Sports Update',
    id: 456,
    image: 'https://example.com/sports.jpg',
    related: 'sports-related',
    source: 'SportsNews',
    summary: 'Sports summary',
    url: 'https://example.com/sports-article',
  }

  expect(typeof article.category).toBe('string')
  expect(typeof article.datetime).toBe('number')
  expect(typeof article.headline).toBe('string')
  expect(typeof article.id).toBe('number')
  expect(typeof article.image).toBe('string')
  expect(typeof article.related).toBe('string')
  expect(typeof article.source).toBe('string')
  expect(typeof article.summary).toBe('string')
  expect(typeof article.url).toBe('string')
})
