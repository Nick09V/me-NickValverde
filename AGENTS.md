# AGENTS.md

This is a React + TypeScript portfolio website built with Vite, implementing the "Syntactic Logic" design system from Google Stitch.

## Project Structure
```
├── src/
│   ├── components/     # Shared UI components (Button, Card, Badge, Input, Header, Footer, etc.)
│   ├── sections/       # Page sections (Home, About, Technologies, Projects, Trajectory, Contact)
│   ├── hooks/          # Custom hooks (useAnalytics for Google Analytics)
│   ├── styles/         # Design system & global styles
│   │   ├── design-system.css   # CSS custom properties from Stitch design tokens
│   │   └── global.css          # Base styles, utilities, component styles
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── vite-env.d.ts   # TypeScript declarations
├── public/             # Static assets (favicon.svg)
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite config
└── .env.example        # Environment variables template
```

## Commands
| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (http://localhost:5173) |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Design System (from Stitch - "Syntactic Logic")
- **Colors**: Deep forest green primary (`#064e3b`), emerald accent (`#10b981`), mint background (`#f0fdf4`)
- **Typography**: JetBrains Mono (headlines/labels) + Inter (body)
- **Spacing**: 8px base unit scale
- **Radius**: 4px base, 8px cards, 9999px pills
- **Shadows**: Subtle, tonal layers; CTA shadow only

## Key Features
- **6 Sections**: Home, About, Technologies, Projects, Trajectory, Contact
- **Responsive**: Mobile-first, breakpoint at 768px (lg:)
- **Accessibility**: Skip links, ARIA labels, semantic HTML, focus-visible
- **Google Analytics**: GA4 via `react-ga4`, track page views (hashchange) + custom events
- **Form Handling**: Controlled inputs with validation, success/error states

## Environment Variables
Copy `.env.example` to `.env` and set:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Stitch MCP
Configured in `opencode.json` for UI design assistance. Project ID: `projects/7652374567681123576`

## Content Source
All content sourced from 6 Stitch screens:
1. `Inicio - Nick Valverde` (Home)
2. `Tecnologías - Nick Valverde` (Technologies)
3. `Proyectos - Nick Valverde` (Projects)
4. `Trayectoria - Nick Valverde` (Trajectory)
5. `Sobre mí - Nick Valverde` (About)
6. `Contacto - Nick Valverde` (Contact)