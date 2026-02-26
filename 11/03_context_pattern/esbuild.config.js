import esbuild from 'esbuild';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

try {
  await esbuild.build({
    logLevel: 'info',
    entryPoints: {
      index: './src/index.tsx',
    },
    bundle: true,
    platform: 'browser',
    outdir: 'public/dist',
    metafile: true,
    plugins: [
      cssModulesPlugin({
        localsConvention: 'camelCase',
        inject: true,
        pattern: '[name]__[hash]__[local]',
      }),
    ],
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}
