import baseConfig from 'shared/rsbuild.config'
import { defineConfig } from '@rsbuild/core'
import merge from 'lodash-es/merge'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'

const config = merge(baseConfig, {
  plugins: [
    pluginReact(), pluginSass(), pluginModuleFederation({
      name: 'remoteReactApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteReact': './src/app/app.tsx',
      },
      dts: false,
    }),
  ],
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  server: {
    port: 3000,
  },
})

export default defineConfig(config)