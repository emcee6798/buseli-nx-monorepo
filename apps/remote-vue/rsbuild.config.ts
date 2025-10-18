import { defineConfig } from '@rsbuild/core'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue } from '@rsbuild/plugin-vue'

export default defineConfig({
  html: {
    template: './index.html',
  },
  plugins: [pluginVue(), pluginSass()],

  source: {
    entry: {
      index: './src/main.ts',
    },
    tsconfigPath: './tsconfig.app.json',
  },
  server: {
    port: 3001,
  },
  output: {
    target: 'web',
    distPath: {
      root: 'dist',
    },
  },
})
