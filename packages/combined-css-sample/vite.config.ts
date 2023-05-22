import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { CssCombinedPlugin } from './src/CssCombinedPlugin'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/main.ts')
      ],
      name: 'MyLib',
      formats: ['umd'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      }
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    vue({
      customElement: true,
    }),
    CssCombinedPlugin()
  ],
})

