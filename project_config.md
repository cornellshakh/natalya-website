# project_config.md
_Last updated: 2025-07-15_

## Goal  
Professional multilingual (Czech/Russian) accounting website for Natalya Shakh. Static responsive SPA with smooth animations and clear service presentation.

## Tech Stack  
- Language: TypeScript 5  
- Framework: React 18 + Vite
- Routing: React Router v7
- Styling: Tailwind CSS + @tailwindcss/typography
- Animation: Framer Motion
- Icons: Lucide React
- Fonts: Inter, Albert Sans (@fontsource)
- UI Components: @headlessui/react
- Deployment: Vercel (static site)

## Patterns  
- Functional React components with hooks
- PascalCase component files with default exports
- TypeScript strict mode with proper interfaces
- Custom contexts for state management (LanguageContext)
- Tailwind utility classes, custom color palette
- Import order: React/3rd party → local components → utils/contexts
- No backend - static site with content in markdown/context

## Constraints  
- Responsive design (mobile-first)
- Internationalization (Czech/Russian only)
- Performance optimized (Vite bundling)
- SEO friendly structure
- Accessibility considerations

## Tokenization  
- 3.5 ch/token, 8 K cap.  
- Summarize when `workflow_state.md` > 12 K.

## Changelog
- 2025-07-15: Completed Phase 3 item - Added comprehensive blog system with search, filtering, and content management
- 2025-07-15: Completed Phase 2 enhancement - Added professional portfolio and enhanced About section with certifications and values
- 2025-07-15: Completed Phase 1 enhancement - Added functional contact form, FAQ section, legal pages, and client testimonials
- 2025-07-15: Updated for Natalya accounting website project
- 2025-07-13: Cleansed out.
