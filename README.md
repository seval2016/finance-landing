# Finance Landing Page

This project is a responsive finance landing page prototype built based on the provided design and assets.

## Project Scope

The goal of this task is to implement a pixel-accurate, responsive landing page while following modern frontend best practices, clean architecture principles, and performance optimizations.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** SCSS (no CSS framework)
- **State Management:** React Hooks
- **Version Control:** Git
- **Deployment:** Vercel

---

## Design & UI

- Design reference was provided via Adobe XD.
- Assets were taken from the shared design resources.
- Mobile-first approach was applied.
- Fully responsive layout (mobile, tablet, desktop).
- Semantic HTML structure was used throughout the project.

---

## Fonts

The original design specifies **Proxima Nova**.

Initially, **Inter** was used as a fallback due to font licensing restrictions.  
Later, the original **Proxima Nova** font was added manually and integrated into the project using local font files.

- Fonts are loaded locally from `/public/fonts`
- Implemented via `@font-face`
- Font weights and sizes strictly follow the design specifications
- `font-display: swap` is used for performance optimization

---

## Exchange Rate API

- Live currency exchange rates are fetched from a public API
- API calls are triggered only when the user clicks **Convert**
- Environment variables are used for configuration

```env
NEXT_PUBLIC_FREECURRENCY_BASE_URL=
NEXT_PUBLIC_FREECURRENCY_API_KEY=
