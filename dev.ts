import { resolve, sep } from 'node:path'
import index from './index.html'

const root = import.meta.dir
const publicDir = resolve(root, 'public')

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
    let pathname = decodeURIComponent(new URL(req.url).pathname)
    // Bun 1.3's dev server ignores the path public-files.ts returns for
    // externals and links the absolute project path (/Users/.../favicon.ico)
    // instead. Map those back to their public/ URL.
    if (pathname.startsWith(root + sep)) pathname = pathname.slice(root.length)
    const filePath = resolve(publicDir, `.${pathname}`)
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
