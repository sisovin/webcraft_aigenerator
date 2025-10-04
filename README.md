# Full Stack AI Website Generator SaaS

## Overview

**AI Website Generator SaaS** is a full-stack platform that empowers users to generate complete, customizable websites instantly using AI. Users simply describe their desired website, and the platform builds a tailored solution with modern technologies, previewing results in real time and saving projects for future editing.

---

## Features

- **AI-Powered Website Generation:**  
  Generate fully functional, responsive websites from user prompts using advanced prompt engineering and a flexible template system.

- **Intuitive Dashboard:**  
  User-friendly dashboard featuring:
  - AI website generation form
  - Live preview functionality (sandboxed iframe)
  - Saved projects management

- **Authentication & User Management:**  
  Seamless sign-in/sign-out and user profile management powered by [Clerk](https://clerk.com/).

- **Database-Driven Projects:**  
  Store user projects and generated sites securely using [Drizzle ORM](https://orm.drizzle.team/) and [Neon](https://neon.tech/) Postgres.

- **Image Optimization & Storage:**  
  Upload and manage images with fast, optimized delivery through [ImageKit](https://imagekit.io/) integration.

---

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, TailwindCSS
- **Authentication:** Clerk
- **Database:** Neon (Postgres) + Drizzle ORM
- **AI Backend:** Node.js + API routes (prompt engineering, template processing)
- **Image Storage:** ImageKit
- **Other:** SWR/React Query (recommended for data fetching)

---

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- Yarn or npm
- Neon/Postgres database
- Clerk API keys
- ImageKit account & API keys

### Installation

```bash
git clone https://github.com/sisovin/webcraft_aigenerator.git
cd webcraft_aigenerator
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file and set:

```
CLERK_API_KEY=your_clerk_api_key
DATABASE_URL=your_neon_database_url
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the dashboard.

---

## Usage

1. **Sign In:**  
   Sign in with Clerk for personalized project management.

2. **Generate Website:**  
   Enter a description of your desired website in the prompt field and click "Generate."  
   Preview the AI-generated site instantly.

3. **Save Projects:**  
   Save generated websites to your dashboard for future editing or export.

4. **Upload Images:**  
   Optimize and store images via ImageKit.

5. **Manage Projects:**  
   Browse, preview, and manage previous projects directly from your dashboard.

---

## Project Structure

```
src/
  app/         # Next.js pages and routes
  components/  # React components (dashboard, forms, previews, etc.)
  db/          # Drizzle ORM schema and utilities
  lib/         # Utility functions
  styles/      # TailwindCSS styles
  api/         # API route handlers (AI generation, project save/load, image upload)
```

---

## Key Integrations

- **Clerk:** Authentication and user management
- **Drizzle ORM + Neon:** Database schema, user/project storage
- **ImageKit:** Image uploads, optimization, and CDN delivery
- **AI Backend:** Custom API for prompt-to-website generation using template system

---

## Contributing

Contributions are welcome! Please open issues, submit pull requests, or suggest improvements.

---

## License

[MIT](LICENSE)

---

## Contact

- [GitHub Issues](https://github.com/sisovin/webcraft_aigenerator/issues)
- Email: support@aiwebsitegen.com
