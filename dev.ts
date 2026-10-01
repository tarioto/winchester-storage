import { resolve, sep } from 'node:path'
import index from './index.html'

const publicDir = resolve(import.meta.dir, 'public')

const server = Bun.serve({
  routes: {
    '/': index,
  },
  development: {
    hmr: true,
    console: true,
  },
  // Serve static files from public/ (Vite did this automatically).
  async fetch(req) {
    const pathname = decodeURIComponent(new URL(req.url).pathname)
    const filePath = resolve(publicDir, '.' + pathname)
    if (!filePath.startsWith(publicDir + sep)) {
      return new Response('Not found', { status: 404 })
    }
    const file = Bun.file(filePath)
    return (await file.exists())
      ? new Response(file)
      : new Response('Not found', { status: 404 })
  },
})

console.log(`Dev server running at ${server.url}`)
