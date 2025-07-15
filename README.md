# Natalya Shakh - Professional Accounting Services

A modern, multilingual website for professional accounting and tax consulting services in Prague, Czech Republic.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript 5
- **Build Tool**: Vite 5 for fast development and optimized production builds
- **Styling**: Tailwind CSS 3 with custom design system
- **UI Components**: Radix UI primitives + Headless UI
- **Animation**: Framer Motion for smooth interactions
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM 7
- **PWA**: Service Worker + Web App Manifest for offline functionality
- **Deployment**: Vercel with optimized headers and caching

## 🌟 Features

- **Multilingual Support**: Czech and Russian language support
- **Progressive Web App**: Offline functionality with service worker
- **SEO Optimized**: Structured data, sitemap, and meta tags
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Core Web Vitals optimized with code splitting
- **Responsive Design**: Mobile-first approach with modern CSS
- **Type Safe**: Strict TypeScript configuration

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Code Quality

The project uses:
- **ESLint** with TypeScript, React, and accessibility rules
- **Prettier** for consistent code formatting
- **TypeScript** with strict configuration
- **Husky + lint-staged** for pre-commit hooks (optional)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   ├── booking/        # Booking system components
│   └── SEO/            # SEO and metadata components
├── pages/              # Route components
├── context/            # React context providers
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
├── i18n/               # Internationalization
└── styles/             # Global styles and design system
```

## 🌐 Deployment

The site is configured for deployment on Vercel with:
- Automatic builds on git push
- Optimized caching headers
- Security headers
- PWA service worker support

## 📱 PWA Features

- Offline functionality
- Install prompt for mobile and desktop
- Background sync for form submissions
- Push notifications (prepared for future use)

## 🔧 Configuration

Key configuration files:
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `vercel.json` - Deployment configuration

## 📄 License

Private project for Natalya Shakh accounting services.

## 🤝 Contributing

This is a private project. For development guidelines, see the coding standards in the project configuration.
