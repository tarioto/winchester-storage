import type { BunPlugin } from 'bun'

const root = import.meta.dir

// Leave root-absolute URLs in index.html that point into public/ (favicon,
// manifest, logos) untouched instead of bundling them. dev.ts serves public/
// directly (see its workaround for Bun 1.3's dev server) and build.ts copies
// it into dist/ verbatim.
const publicFiles: BunPlugin = {
  name: 'public-files',
  setup(build) {
    // Bun hands us these already resolved against the project root. Keep the
    // filter narrow: a catch-all filter makes Bun's dev server fail to load
    // src/index.tsx ("Failed to load bundled module").
    build.onResolve(
      { filter: /\.(ico|png|jpe?g|svg|webp|json|webmanifest|txt)$/i },
      async ({ path, importer }) => {
        if (!importer.endsWith('.html') || !path.startsWith(root)) return
        const url = path.slice(root.length)
        if (await Bun.file(`${root}/public${url}`).exists()) {
          return { path: url, external: true }
        }
      },
    )
  },
}

export default publicFiles
