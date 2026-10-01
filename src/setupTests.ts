import { afterEach, expect } from 'bun:test'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

// jest-dom adds custom matchers for asserting on DOM nodes.
// e.g. expect(element).toHaveTextContent(/react/i)
expect.extend(matchers)

declare module 'bun:test' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Matchers<T>
    extends TestingLibraryMatchers<typeof expect.stringContaining, T> {}
}

// Unmount rendered trees between tests; RTL only auto-registers this when a
// global afterEach exists.
afterEach(() => {
  cleanup()
})

// The DOM test environment does not implement matchMedia, which Chakra UI's
// color-mode reads.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
