import esbuild from 'esbuild';

try {
  const ctx = await esbuild.context({
    logLevel: 'info',
    entryPoints: {
      bundle: './src/index.ts',
    },
    bundle: true,
    platform: 'browser',
    outdir: 'dev/dist',
    sourcemap: true,
  });
  await ctx.watch();
  await ctx.serve({ servedir: './dev' });
} catch (e) {
  console.error(e);
  process.exit(1);
}
