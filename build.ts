import { cp, rm } from 'node:fs/promises'
import publicFiles from './public-files'

const outdir = 'dist'

await rm(outdir, { recursive: true, force: true })

const result = await Bun.build({
  entrypoints: ['./index.html'],
  outdir,
  minify: true,
  publicPath: '/',
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [publicFiles],
  // Fingerprinted output goes under assets/ so CI can cache it immutably.
  naming: {
    entry: '[name].[ext]',
    chunk: 'assets/[name]-[hash].[ext]',
    asset: 'assets/[name]-[hash].[ext]',
  },
})

if (!result.success) {
  for (const log of result.logs) console.error(log)
  process.exit(1)
}

// Copy public/ verbatim (favicon, manifest, logos, images, robots.txt).
await cp('public', outdir, {
  recursive: true,
  filter: (src) => !src.endsWith('.DS_Store'),
})

for (const output of result.outputs) console.log(output.path)
