import baseConfig from 'shared/rsbuild.config'
import { defineConfig } from '@rsbuild/core'
import merge from 'lodash-es/merge'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue } from '@rsbuild/plugin-vue'

const config = merge(baseConfig, {
  plugins: [
    pluginVue(), pluginSass(), pluginModuleFederation({
      name: 'remoteVueApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteVue': './src/app/App.vue',
      },
      dts: false,
    }),
  ],
  html: {
    template: './index.html',
  },
  server: {
    port: 3001,
  },
})

export default defineConfig(config)