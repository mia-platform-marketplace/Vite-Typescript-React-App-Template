import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    mockReset: true,
    logHeapUsage: true,
    reporters: [
      'default',
    ],
    setupFiles: [
      resolve(__dirname, 'src/setupTests.jsx')
    ],
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'build'
  }
})
