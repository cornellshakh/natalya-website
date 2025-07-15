# Project Structure & Organization

## Root Directory
```
├── src/                    # Source code
├── public/                 # Static assets (robots.txt, sitemap.xml)
├── favicon/               # Favicon files and web app manifest
├── dist/                  # Build output (generated)
├── node_modules/          # Dependencies (generated)
├── .kiro/                 # Kiro AI assistant configuration
├── .git/                  # Git repository
└── Configuration files
```

## Source Code Structure (`src/`)
```
src/
├── components/            # Reusable UI components
│   ├── layout/           # Layout-specific components (Header, etc.)
│   ├── ui/               # Generic UI components (buttons, forms, etc.)
│   └── SEO/              # SEO-related components
├── pages/                # Route components (Home, About, Services, etc.)
├── context/              # React contexts (LanguageContext)
├── i18n/                 # Internationalization (translations.ts)
├── lib/                  # Utility functions and helpers
├── types/                # TypeScript type definitions
├── content/              # Static content (markdown files)
├── styles/               # Global styles and design system
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global CSS imports
```

## Component Organization
- **PascalCase** for component files and directories
- **Default exports** for all components
- **Co-location** of related components in subdirectories
- **Separation** of layout, UI, and page components

## File Naming Conventions
- Components: `ComponentName.tsx`
- Pages: `PageName.tsx` 
- Utilities: `camelCase.ts`
- Types: `index.ts` (barrel exports)
- Styles: `kebab-case.css`

## Import Structure
Follow this order in all files:
1. React and third-party imports
2. Local component imports
3. Utility and context imports
4. Type imports (with `type` keyword)
5. CSS imports (last)

## Key Architectural Patterns

### Internationalization
- Centralized translations in `src/i18n/translations.ts`
- Language context provider wraps entire app
- Translation function `t()` available via `useLanguage()` hook
- Supports Czech (`cs`) and Russian (`ru`) languages

### Routing
- React Router v7 with BrowserRouter
- Route definitions in `App.tsx`
- Page components in `src/pages/`
- Animated route transitions with Framer Motion

### State Management
- React Context for global state (language, theme)
- Local component state with hooks
- No external state management library

### Styling Approach
- Tailwind CSS utility-first approach
- Custom design system in `tailwind.config.js`
- Component-specific styles via Tailwind classes
- Global styles in `src/index.css` and `src/styles/`

### Type Safety
- Strict TypeScript configuration
- Centralized type definitions in `src/types/`
- Interface definitions for all data structures
- Path mapping with `@/*` aliases

## Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build tool configuration
- `tailwind.config.js` - Styling framework setup
- `postcss.config.js` - CSS processing
- `vercel.json` - Deployment configuration

## Content Management
- Static content in markdown files (`src/content/`)
- Translations stored in TypeScript objects
- No CMS - content managed through code
- Blog posts defined in translation files