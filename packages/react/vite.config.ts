import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      fileName: 'dinkie-icons-react',
      formats: ['es', 'cjs'],
    },
    minify: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  plugins: [react(), dts({ staticImport: true })],
})
