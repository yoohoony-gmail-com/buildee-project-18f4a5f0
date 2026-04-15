// This file is run before each test file.
import '@testing-library/jest-dom/vitest';

// Optional: If you need to mock specific browser APIs or global objects
// For example, if you use a Canvas API library that needs mocking:
// import 'vitest-canvas-mock';
// Or if you need to mock window.matchMedia for responsive components:
// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: (query: string) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: () => {}, // Deprecated
//     removeListener: () => {}, // Deprecated
//     addEventListener: () => {},
//     removeEventListener: () => {},
//     dispatchEvent: () => false,
//   }),
// });