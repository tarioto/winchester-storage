import type { BunPlugin } from 'bun'

const root = import.meta.dir

// Leave root-absolute URLs in index.html that point into public/ (favicon,
// manifest, logos) untouched instead of bundling them. dev.ts serves public/
// directly and build.ts copies it into dist/ verbatim.
const publicFiles: BunPlugin = {
  name: 'public-files',
  setup(build) {
    // Bun hands us these already resolved against the project root.
    build.onResolve({ filter: /.*/ }, async ({ path, importer }) => {
      if (!importer.endsWith('.html') || !path.startsWith(root)) return
      const url = path.slice(root.length)
      if (await Bun.file(`${root}/public${url}`).exists()) {
        return { path: url, external: true }
      }
    })
  },
}

export default publicFiles
