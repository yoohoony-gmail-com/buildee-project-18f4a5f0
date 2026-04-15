import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global APIs like `describe`, `it`, `expect`
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/setupTests.ts', // Setup file for React Testing Library
    css: false, // Disable CSS processing for tests if not needed
  },
});