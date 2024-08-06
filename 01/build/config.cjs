const cssModulesPlugin = require('esbuild-css-modules-plugin');

module.exports = {
  logLevel: 'info',
  entryPoints: {
    dom: './src/apps/domApp/index.tsx',
    // hello: './src/apps/helloApp/index.tsx',
    // dialog: './src/apps/dialogApp/index.tsx',
    // counter: './src/apps/counterApp/index.tsx',
  },
  bundle: true,
  outdir: 'public/scripts',
  platform: 'browser',
  metafile: true,
  plugins: [
    cssModulesPlugin({
      localsConvention: 'camelCase',
      inject: true,
    }),
  ],
};
