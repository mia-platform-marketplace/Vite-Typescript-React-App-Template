/// <reference types="vitest" />
import {defineConfig, configDefaults} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import packageJson from './package.json'
import microLc from './plugins/vite-plugin-micro-lc'
import { BASE } from './src/utils'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    base: BASE,
    plugins: [
      react(),
      // microLc(packageJson.name), //TODO: import this only if you use it on microlc env 
      checker({
        typescript: true
      }),
      svgr({
        svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
        include: "**/*.svg",
      })
    ],
    resolve: {
      alias: {
        src: "/src",
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      mockReset: true,
      logHeapUsage: true,
      reporters: [
        'default'
      ],
      setupFiles: [
        resolve(__dirname, 'src/setupTests.jsx')
      ],
      coverage: {
        exclude: [
          ...configDefaults.exclude,
          'build', 'mock-server', 'src/__mocks__', '.eslintrc.cjs', 'src/strings']
      }
    },
    server: {
      port: 3000
    },
    build: {
      outDir: 'build'
    }
  }
})
