import { defineConfig } from '@rsbuild/core'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'

export default defineConfig({
  html: {
    template: './src/index.html',
  },
  plugins: [
    pluginReact(), pluginSass(), pluginModuleFederation({
      name: 'remoteReactApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteReact': './src/app/app.tsx',
      },
      dts: false,
      // shared: {
      //   react: {
      //     singleton: true,
      //     requiredVersion: '^19.0.0',
      //   },
      //   'react-dom': {
      //     singleton: true,
      //     requiredVersion: '^19.0.0',
      //   },
      //   'react-router-dom': {
      //     singleton: true,
      //     requiredVersion: '^6.29.0',
      //   },
      // },
      // not adding shared modules as there's no plan to add more react apps currently
    }),
  ],
  source: {
    entry: {
      index: './src/main.tsx',
    },
    tsconfigPath: './tsconfig.app.json',
  },
  server: {
    port: 3000,
    cors: {
      origin: '*'
    },
  },
  output: {
    copy: [{ from: './src/favicon.ico' }, { from: './src/assets' }],

    target: 'web',
    distPath: {
      root: 'dist',
    },
  },
})
