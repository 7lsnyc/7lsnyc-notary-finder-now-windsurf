# Notary Finder Now

A directory connecting users with top-rated notaries. Built with Next.js, TypeScript, and Supabase.

## Core Features
- Homepage with search and featured notaries
- Search Results Page with pagination
- Notary Profile Page
- Basic styling with Tailwind CSS

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

3. Run development server:
```bash
npm run dev
```

## Deployment
This project is configured for deployment on Vercel. Environment variables need to be set in the Vercel project settings.
