# UGC Platform

A modern full-stack web application built with React, Vite, Express, and Prisma. The platform includes secure user authentication with Clerk, media uploading with Cloudinary, and AI integration via Google GenAI.

## Tech Stack

### Frontend (Client)
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 + Framer Motion
- **Routing:** React Router v7
- **Authentication:** Clerk React
- **Icons & UI:** Lucide React, Lenis (smooth scrolling)
- **Data Fetching:** Axios

### Backend (Server)
- **Framework:** Express 5 + Node.js (TypeScript)
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** Clerk Express
- **Media Management:** Multer + Cloudinary
- **AI Integration:** Google GenAI
- **Monitoring:** Sentry

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Environment keys for Clerk, PostgreSQL, Cloudinary, and Google GenAI.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kb7781/ugc.git
   cd ugc
   ```

2. **Install Client Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Server Dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Environment Variables

You need to set up environment variables for both the client and the server. 

Create a `.env` file in the `client` directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

Create a `.env` file in the `server` directory:
```env
DATABASE_URL=your_postgresql_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_google_genai_key
```

### Running the App

1. **Start the Backend Server**
   ```bash
   cd server
   npm run start
   # or for development: npm run server
   ```

2. **Start the Frontend Client**
   ```bash
   cd client
   npm run dev
   ```

The client should now be running at `http://localhost:5173` (or the port specified by Vite) and interacting with your server.
