import { GlobalRegistrator } from '@happy-dom/global-registrator'

// Don't fetch external pages (e.g. the Google Maps embed) during tests.
GlobalRegistrator.register({
  settings: { disableIframePageLoading: true },
})

// happy-dom logs an error for every iframe it skips; silence just that one.
const consoleError = console.error
console.error = (...args: unknown[]) => {
  if (
    args[0] instanceof Error &&
    args[0].message.includes('Iframe page loading is disabled')
  ) {
    return
  }
  consoleError(...args)
}
