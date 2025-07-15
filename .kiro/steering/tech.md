# Technology Stack & Build System

## Core Technologies
- **Language**: TypeScript 5.5+ (strict mode enabled)
- **Framework**: React 18.3+ with functional components and hooks
- **Build Tool**: Vite 5.4+ for fast development and optimized builds
- **Routing**: React Router DOM v7 with BrowserRouter
- **Styling**: Tailwind CSS 3.4+ with custom design system

## Key Dependencies
- **Animation**: Framer Motion for smooth page transitions and micro-interactions
- **Icons**: Lucide React for consistent iconography
- **UI Components**: 
  - Radix UI primitives (@radix-ui/react-*)
  - Headless UI for accessible components
- **Forms**: React Hook Form with Zod validation
- **Email**: EmailJS for contact form submissions
- **SEO**: React Helmet Async for meta tag management
- **Notifications**: Sonner for toast notifications

## Development Tools
- **TypeScript**: Strict configuration with path mapping (@/* aliases)
- **PostCSS**: Autoprefixer for CSS vendor prefixes
- **ESLint**: Code linting and formatting
- **Fonts**: @fontsource packages (Inter, Albert Sans)

## Build & Development Commands

### Setup (one-time)
```bash
# Windows
./install.bat

# Unix/Linux/Mac
./install.sh
```

### Development
```bash
# Windows
./start.bat

# Unix/Linux/Mac  
./start.sh

# Or directly
npm run dev
```

### Production Build
```bash
npm run build
npm run preview  # Preview production build locally
```

### Package Management
```bash
# Windows
./add.bat <package-name>

# Unix/Linux/Mac
./add.sh <package-name>

# Or directly with pnpm
pnpm add <package-name>
```

### Linting
```bash
npm run lint
```

## Deployment
- **Platform**: Vercel (static site deployment)
- **Configuration**: vercel.json with SPA routing setup
- **Build Output**: Static files in `dist/` directory
- **Base URL**: Configured for root deployment

## Performance Considerations
- Vite for fast HMR and optimized bundling
- Code splitting with React.lazy and Suspense
- Image optimization through proper sizing and formats
- Tailwind CSS purging for minimal bundle size
- Font preloading with @fontsource packages