# project_config.md
_Last updated: 2025-01-27_

## Goal  
Professional multilingual website for Natalya Shakh's accounting services in Prague. Provides Czech and Russian language support for comprehensive accounting, tax consulting, and financial advisory services targeting both local and expatriate clients.

## Tech Stack  
- Language: TypeScript 5  
- Framework: React 18 with Vite 5
- Styling: Tailwind CSS 3 with custom design system
- UI Components: Radix UI primitives + Headless UI
- Animation: Framer Motion  
- Forms: React Hook Form + Zod validation
- Routing: React Router DOM 7
- PWA: Service Worker + Web App Manifest
- Deployment: Vercel
- Build Tools: Vite, PostCSS, Terser

## Patterns  
- Functional components with hooks pattern
- kebab-case files; camelCase variables  
- Strict TypeScript with no `any` types
- Custom CSS design system with CSS variables
- Lazy-loaded pages for code splitting
- Responsive-first design approach
- Multilingual i18n architecture

## Constraints  
- Bundle ≤ 300 KB per chunk (Vite optimized)
- Core Web Vitals compliance
- WCAG 2.1 AA accessibility standards
- SEO optimized with structured data
- PWA compliant for offline functionality

## Tokenization  
- 3.5 ch/token, 8 K cap  
- Summarize when `workflow_state.md` > 12 K

## Changelog
- 2025-01-27: Updated to reflect actual React/Vite tech stack and project details
- 2025-07-13: Initial template creation
