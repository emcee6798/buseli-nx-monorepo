export default {
  html: {
    template: './src/index.html',
  },
  plugins: [],
  source: {
    entry: {
      index: './src/main.ts',
    },
    tsconfigPath: './tsconfig.app.json',
  },
  server: {
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
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
  output: {
    minify: {
      jsOptions: {
        minimizerOptions: {
          compress: {
            passes: 2,
          },
        },
      },
    },
  },
}
