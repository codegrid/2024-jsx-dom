import esbuild from 'esbuild';

const main = async () => {
  try {
    await esbuild.build({
      logLevel: 'info',
      entryPoints: {
        app: './src/App.tsx',
      },
      bundle: true,
      platform: 'browser',
      outdir: 'dist',
      minify: true,
      metafile: true,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
main();
