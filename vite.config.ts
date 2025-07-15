import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  build: {
    // Target modern browsers for better optimization
    target: 'es2020',
    // Optimize CSS code splitting
    cssCodeSplit: true,
    // Improve tree shaking
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching and performance
        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          'ui-vendor': [
            '@headlessui/react',
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toggle-group'
          ],
          // Animation and motion
          'animation-vendor': ['framer-motion'],
          // Form handling
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Date and calendar
          'date-vendor': ['date-fns', 'react-calendar'],
          // Utilities
          'utils-vendor': [
            'clsx',
            'class-variance-authority', 
            'tailwind-merge',
            'lucide-react'
          ],
          // Email and external services
          'services-vendor': ['@emailjs/browser', 'react-helmet-async']
        },
        // Ensure consistent naming for chunks
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 300,
    // Enable source maps for better debugging
    sourcemap: false, // Disable for production builds
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true
      }
    }
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react'
    ]
  }
});
