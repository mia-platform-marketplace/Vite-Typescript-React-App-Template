/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { configDefaults } from 'vitest/config'
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
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        'build', 'mock-server', 'src/__mocks__', '.eslintrc.cjs'] 
    }
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'build'
  }
})
