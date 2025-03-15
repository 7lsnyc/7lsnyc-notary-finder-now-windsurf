# Notary Finder Now

A directory connecting users with top-rated notaries. Features a clean, minimal interface for searching and viewing notary profiles.

## Core Features

- Homepage with search and top-rated notaries
- Search results page with pagination
- Individual notary profile pages
- Basic styling with Tailwind CSS

## Tech Stack

- Next.js 14.1.0 with TypeScript
- Supabase for backend
- Tailwind CSS for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials

## Deployment on Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add the following environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!
