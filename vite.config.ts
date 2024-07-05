/// <reference types="vitest" />
import {defineConfig, configDefaults} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import packageJson from './package.json'
import microLc from './plugins/vite-plugin-micro-lc'
import {qiankunWindow} from 'vite-plugin-qiankun/dist/helper'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    base: './', //TODO: mettere path di microlc
    plugins: [
      react(),
      ...(qiankunWindow.__POWERED_BY_QIANKUN__ ? [microLc(packageJson.name)] : []),
      checker({
        typescript: true
      }),
      svgr({
        svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
        include: "**/*.svg",
      })
    ],
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
