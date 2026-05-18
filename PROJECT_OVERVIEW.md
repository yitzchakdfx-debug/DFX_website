# Project Overview

This is a modern, fully static company website built with:
- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX content system

The project is SEO-focused, Vercel-ready, and does not include a backend in this phase.

---

# Main Goals

- Clean, modern UI
- Fast loading and static generation
- Excellent SEO foundation
- Easy maintenance and scalability
- Junior-friendly, readable codebase

---

# Current Implementation (As Built)

- App Router structure with shared site layout
- Global `LTR` and English-first UI
- Responsive Navbar with desktop dropdowns and mobile accordion menu
- `Solutions` dropdown section in top navigation
- MDX-driven dynamic content pages with static params
- Reusable reveal animations (page entry + scroll reveal)
- 404 page, loading state, sitemap, robots, and Open Graph metadata

---

# Architecture Rules

- Keep components small and reusable
- Avoid huge files
- Separate layout, navigation, content, and config
- Use TypeScript types consistently
- Avoid unnecessary complexity and abstractions

Project structure (main areas):
- `src/app` for routes, layouts, metadata routes
- `src/components` for reusable UI/layout/navigation components
- `src/config` for site and navigation source-of-truth
- `src/content` for MDX content files
- `src/lib` for content loading, SEO helpers, utility functions

---

# Content Rules

All content pages live under:

`src/content/<category>/<slug>.mdx`

Each MDX file should include frontmatter:
- `title`
- `description`
- `slug`
- `category`
- `published` (recommended)
- `ogImage` (recommended)
- `order` (recommended)

Dynamic route is generated from content metadata via:
- `src/app/(site)/[category]/[slug]/page.tsx`

---

# SEO Rules

Every page must:
- Have metadata (`title`, `description`)
- Have a single H1
- Use semantic heading structure (H1 > H2 > H3)
- Use readable URLs
- Support Open Graph / Twitter cards

Implemented SEO files:
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- global metadata in `src/app/layout.tsx`

---

# UI Rules

- Modern, clean design
- Fully responsive (mobile/tablet/desktop)
- Accessible focus states and semantic structure
- Consistent spacing and visual rhythm
- Tailwind-first styling approach
- Keep interaction subtle and purposeful

Animation behavior:
- Page content enters with a subtle upward motion
- Sections reveal from bottom to top on scroll
- Respect reduced-motion preferences

---

# Navbar Rules

Navbar contains dropdown menus.

Desktop:
- Hover/focus dropdown behavior
- Dropdown gap issue handled to prevent accidental close

Mobile:
- Collapsible accordion-style menu
- Submenus toggle per section

Navigation source-of-truth:

`src/config/navigation.ts`

Current top-level menu includes:
- Solutions
- Services
- Products
- About
- Contact

Solutions submenu includes:
- Burn IN Rack
- Back Plan Tester
- Boundary Scan
- MDA+BS+Functional
- Turn Key
- Micro Controller

---

# Do Not

- Do not add backend in this phase
- Do not overengineer
- Do not add unnecessary abstractions
- Do not introduce complex patterns without clear benefit/explanation

---

# Commands

Run development server:

`npm.cmd run dev`

Production build:

`npm.cmd run build`
