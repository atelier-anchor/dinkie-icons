import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'dinkie-icons-vue',
      formats: ['es', 'cjs'],
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
    },
  },
  plugins: [dts({ staticImport: true })],
})
