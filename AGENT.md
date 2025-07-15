# AGENT.md - Natalya Accounting Website

## Commands
- **Dev**: `npm run dev` or `./start.sh` (Windows: `start.bat`)
- **Build**: `npm run build` (TypeScript check + Vite build)
- **Lint**: `npm run lint` (ESLint)
- **Preview**: `npm run preview` (production build preview)
- **Install**: `npm install` or `./install.sh` (Windows: `install.bat`)

## Architecture
- React 18 SPA with TypeScript and Vite
- React Router for navigation, Framer Motion for animations
- Tailwind CSS + custom theme, HeadlessUI components
- Internationalization with custom context (Czech/Russian)
- Structure: `src/` contains components/, pages/, context/, i18n/, content/
- No backend - static site deployed to Vercel

## Code Style
- TypeScript strict mode, ES2020 target
- React functional components with hooks
- Tailwind CSS classes, custom color palette (primary blues, green accent #4c7c42)
- Import order: React/3rd party → local components → utils/contexts
- Component naming: PascalCase files, default exports
- Props: TypeScript interfaces, destructured in function params
- No test framework configured yet (noted in README roadmap)
