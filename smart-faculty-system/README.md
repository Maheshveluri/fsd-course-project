# Smart Faculty Availability and Monitoring System

A simple MERN MVP for viewing faculty availability and updating faculty status.

## Requirements

- Node.js 18+
- MongoDB running locally

## Run the server

```bash
cd server
copy .env.example .env
npm install
npm run dev
```

Update `server/.env` if MongoDB uses a different connection string.

## Run the client

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173.

The frontend uses Vite's development proxy to send `/api` requests to the Express server on port 5000.
