# Modern Blog - Next.js 15+ Application

## About

Frontend assessment submission for Novel Technology Services. Built with React, Next.js, TypeScript, ShadCn and Tailwind CSS. Demonstrates UI design, responsiveness, API integration, and clean, maintainable code.

## 🚀 Tech Stack

* **Framework** : Next.js 15+ (App Router)
* **Styling** : Tailwind CSS with custom design system
* **UI Components** : shadcn/ui
* **Icons** : Lucide React
* **TypeScript** : Full type safety
* **Fonts** : Google Fonts (Inter)

## 📁 Project Structure

```
 modern-blog/
├── .next/                      # Next.js build output
├── .git/                       # Git repository
├── public/                     # Static assets
│   ├── favicon.ico
│   └── next.svg
├── src/                        # Source code
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── loading.tsx         # Global loading UI
│   │   ├── not-found.tsx       # 404 page
│   │   ├── page.tsx            # Home page
│   │   └── posts/              # Posts routes
│   │       └── [id]/           # Dynamic post routes
│   │           ├── loading.tsx # Post loading UI
│   │           └── page.tsx    # Post detail page
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Shadcn/UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── badge.tsx
│   │   │   └── avatar.tsx
│   │   │   └── hover-card.tsx
│   │   │   └── tooltip.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── blog/               # Blog-specific components
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostGrid.tsx
│   │   │   ├── PostContent.tsx
│   │   │   └── CommentSection.tsx
│   │   └── common/             # Common components
│   │       └── pagination/     # Pagination components
│   │           ├── Pagination.tsx
│   │           └── usePagination.ts
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts            # Common utilities
│   │   ├── api.ts              # API functions
│   ├── types/                  # TypeScript type definitions
│   │   ├── blog.ts             # Blog-related types
│   │   └── api.ts              # API response types
├── .env.local                  # Environment variables
├── .gitignore                  # Git ignore file
├── components.json             # Shadcn/UI configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 📄 Detailed File & Folder Breakdown

### 💻 Source Code Directory

#### `src/app/` - Next.js App Router

Modern Next.js 15+ routing system with file-based routing and server components.

* **`globals.css`** : Global CSS styles, Tailwind CSS imports, and custom CSS variables
* **`layout.tsx`** : Root layout component wrapping all pages with common UI elements (header, footer)
* **`loading.tsx`** : Global loading component with animated spinner shown during page transitions
* **`not-found.tsx`** : Custom 404 error page with navigation back to home
* **`page.tsx`** : Home page component displaying blog post grid and main content

#### `src/app/posts/[id]/` - Dynamic Post Routes

Dynamic routing for individual blog posts with optimized loading states.

* **`loading.tsx`** : Post-specific loading skeleton maintaining layout during data fetching
* **`page.tsx`** : Individual post page with SSG, ISR, dynamic metadata, and error handling

### 🧩 Components Architecture

#### `src/components/ui/` - shadcn/ui Base Components

Reusable, accessible UI primitives following Radix design principles.

* **`button.tsx`** : Customizable button component with variants (primary, secondary, outline)
* **`card.tsx`** : Flexible card container with header, content, and footer sections
* **`skeleton.tsx`** : Loading placeholder component maintaining content dimensions
* **`badge.tsx`** : Small status indicator component with color variants

#### `src/components/layout/` - Layout Components

Structural components for consistent page layout and navigation.

* **`Header.tsx`** : Main navigation header with logo, menu items, and responsive design
* **`Footer.tsx`** : Site footer with links, copyright, and social media icons

#### `src/components/blog/` - Blog-Specific Components

Domain-specific components for blog functionality and content display.

* **`PostCard.tsx`** : Individual post preview card with title, excerpt, and metadata
* **`PostGrid.tsx`** : Responsive grid layout container for displaying multiple posts
* **`PostContent.tsx`** : Main post content renderer with typography and formatting
* **`CommentSection.tsx`** : Comment display and interaction component

#### `src/components/common/` - Shared Utilities

Commonly used components across different sections of the application.

* **`LoadingSpinner.tsx`** : Animated loading indicator with customizable size and color
* **`ErrorBoundary.tsx`** : React error boundary for graceful error handling and recovery

#### `src/components/common/pagination/` - Pagination System

Complete pagination solution with hooks and components.

* **`Pagination.tsx`** : Pagination UI component with previous/next navigation and page numbers
* **`usePagination.ts`** : Custom hook for pagination logic and state management

### 🔧 Utilities & Configuration

#### `src/lib/` - Utility Functions

Helper functions and business logic separated from components.

* **`utils.ts`** : Common utility functions, formatters, and helper methods
* **`api.ts`** : API client configuration, request/response interceptors, and data fetching functions
* **`constants.ts`** : Application-wide constants, configuration values, and environment variables

#### `src/types/` - TypeScript Definitions

Type safety and interface definitions for the entire application.

* **`blog.ts`** : Blog-related interfaces (Post, Comment, Author, Category)
* **`api.ts`** : API response types and request payload interfaces

#### `src/hooks/` - Custom React Hooks

Reusable stateful logic encapsulated in custom hooks.

* **`useApi.ts`** : Generic API data fetching hook with loading states and error handling
* **`useLocalStorage.ts`** : Hook for persistent local storage with JSON serialization

## 🚦 Getting Started

### Prerequisites

* Node.js 18+
* npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/amol1629/novel_technologies_assessment

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

### Build

```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build

# Start production server
npm start
# or
yarn start
# or
pnpm start
```
