# Finance Digest

A finance news application built with React, TypeScript, and Vite. The app fetches and displays financial news from the Finnhub API with a clean, responsive design.

## Features

- Latest financial news from Finnhub API
- Fully responsive design
- Image loading with skeleton placeholders
- Fast performance with Vite
- Unit tests with Vitest

## Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd maon_project
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Finnhub API key:
   ```
   VITE_FINNHUB_API_KEY=your_api_key_here
   ```

## Development

Start the development server:

```bash
pnpm dev
```

## Testing

Run tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

## Build

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Vitest** - Testing framework
- **Finnhub API** - Financial news data

## Project Structure

```
src/
├── components/          # React components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── __tests__/          # Test files
└── App.tsx            # Main application component
```
