import esbuild from 'esbuild';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

try {
  await esbuild.build({
    logLevel: 'info',
    entryPoints: {
      bundle: './src/index.ts',
    },
    bundle: true,
    platform: 'browser',
    outdir: 'public/dist',
    minify: true,
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
