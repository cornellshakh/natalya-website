# Natalya Website
Wwebsite for an accounting and consulting business. Built with React, TypeScript, and Tailwind CSS.

## Setup
### Prerequisites
- Node.js (v16+ recommended)
- pnpm (recommended for package management)

### Installation (once)
```sh
./install.sh    # or install.bat on Windows
```

### Start (every time)
```sh
./start.sh      # or start.bat on Windows
```

### Package Management
Add packages via pnpm manually, or use:
```sh
./add.sh <pnpm add package-name>      # or add.bat on Windows
```

### Start development server
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```sh
npm run build
```

### Preview production build
```sh
npm run preview
```

## Roadmap / TODO
- Add automated tests (unit, integration, E2E)
- Improve accessibility and keyboard navigation
- Add admin/content editing interface
- Expand language support (e.g., English)
- Add analytics and SEO improvements
- Refactor for better code splitting and performance

## Known Issues
- No automated tests yet
- Some UI components may have limited accessibility
- Only Czech and Russian languages are supported
- No backend/API integration (static site only)