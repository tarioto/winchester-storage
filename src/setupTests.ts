import { afterEach, expect } from 'bun:test'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

// jest-dom adds custom matchers for asserting on DOM nodes.
// e.g. expect(element).toHaveTextContent(/react/i)
expect.extend(matchers)

declare module 'bun:test' {
  // Omit toBeEmpty: bun:test has its own with a different signature, and
  // TypeScript 7 rejects the conflicting declarations.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Matchers<T>
    extends Omit<
      TestingLibraryMatchers<typeof expect.stringContaining, T>,
      'toBeEmpty'
    > {}
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
