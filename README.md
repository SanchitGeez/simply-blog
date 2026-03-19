# SimplyBlog

<p align="center">
  <strong>A minimal full-stack blogging platform built for straightforward writing and publishing.</strong><br />
  Register, log in, write rich-text posts, upload cover images, and browse a clean blog feed without unnecessary complexity.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/Frontend-React%2018-20232a?style=for-the-badge&logo=react" />
  <img alt="Express" src="https://img.shields.io/badge/Backend-Express-111111?style=for-the-badge&logo=express" />
  <img alt="MongoDB" src="https://img.shields.io/badge/Database-MongoDB-0f5d3f?style=for-the-badge&logo=mongodb" />
  <img alt="JWT" src="https://img.shields.io/badge/Auth-JWT-222222?style=for-the-badge" />
</p>

## Overview

SimplyBlog is a lightweight blogging app focused on the core publishing flow:

- create an account
- sign in with cookie-based auth
- write posts with a rich-text editor
- upload a cover image
- browse published posts in a feed
- open full post pages with author and timestamp details

The project keeps the UI and product surface intentionally small, which makes it a good example of a clean MERN-style CRUD application with authentication and media uploads.

## Demo

![Demo GIF](https://github.com/SanchitGeez/simply-blog/blob/main/client/public/demo.gif)

## Features

### 1. Authentication

- user registration with hashed passwords using `bcrypt`
- login with JWT-based authentication
- cookie-based session persistence
- logout flow for clearing the session

### 2. Publishing flow

- create a blog post with title, summary, content, and cover image
- rich-text editing using `react-quill`
- image upload handling with `multer`
- MongoDB-backed post storage

### 3. Reading experience

- post feed ordered by newest first
- single-post detail page
- author attribution and created date metadata

## Tech Stack

### Frontend

- React 18
- React Router
- React Quill
- date-fns

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT
- bcrypt
- multer
- cookie-parser
- cors

## Project Structure

```text
simply-blog/
├── client/   # React frontend
├── api/      # Express + MongoDB backend
└── README.md
```

## Running Locally

### Prerequisites

- Node.js and npm
- MongoDB connection available

### 1. Start the backend

```bash
cd api
npm install
node server.js
```

The backend listens on `http://localhost:4000`.

### 2. Start the frontend

In a second terminal:

```bash
cd client
npm install
npm start
```

The frontend runs on `http://localhost:3000`.

## Current Implementation Notes

- the frontend currently calls the deployed backend at `https://simply-blog-backend.vercel.app` for most auth and post-fetching flows
- some image URLs in the UI still point to `http://localhost:4000/uploads/...`, so local and deployed asset behavior is mixed
- the backend currently stores sensitive configuration inline and should be moved to environment variables before any serious deployment
- the project already includes cover uploads and a working publish flow, but editing/deleting posts is not implemented in the current UI

## Why This Project Works Well

SimplyBlog succeeds because it does not overreach. It focuses on the most important parts of a blogging app, writing, publishing, authentication, and reading, and implements them in a compact full-stack setup that is easy to understand and extend.

## Status

Working full-stack blog prototype with authentication, publishing, and post browsing.
