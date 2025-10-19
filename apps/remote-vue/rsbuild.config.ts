import { defineConfig } from '@rsbuild/core'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue } from '@rsbuild/plugin-vue'

export default defineConfig({
  html: {
    template: './index.html',
  },
  plugins: [
    pluginVue(), pluginSass(), pluginModuleFederation({
      name: 'remoteVueApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteVue': './src/app/App.vue',
      },
      dts: false,
      // shared: {
      //   vue: {
      //     singleton: true,
      //     requiredVersion: '^3.0.0',
      //   },
      // },
      // not adding shared modules as there's no plan to add more vue apps currently
    }),
  ],
  source: {
    entry: {
      index: './src/main.ts',
    },
    tsconfigPath: './tsconfig.app.json',
  },
  server: {
    port: 3001,
    cors: {
      origin: '*'
    },
  },
  output: {
    target: 'web',
    distPath: {
      root: 'dist',
    },
  },
})
