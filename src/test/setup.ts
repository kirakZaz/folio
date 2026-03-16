import '@testing-library/jest-dom';

// Polyfill IntersectionObserver — not available in jsdom but used by framer-motion
const mockIntersectionObserver = vi.fn(() => ({
  observe:    vi.fn(),
  unobserve:  vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

// Polyfill ResizeObserver — also used by some MUI components in tests
const mockResizeObserver = vi.fn(() => ({
  observe:    vi.fn(),
  unobserve:  vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', mockResizeObserver);
