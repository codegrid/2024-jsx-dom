import esbuild from 'esbuild';
import cssModulesPlugin from 'esbuild-css-modules-plugin';
import { commonConfig } from './commonConfig.mjs';

const main = async () => {
  try {
    const ctx = await esbuild.context({
      ...commonConfig,
      outdir: 'dev/dist',
      sourcemap: true,
      plugins: [
        cssModulesPlugin({
          localsConvention: 'camelCase',
        }),
      ],
    });
    await ctx.watch();
    await ctx.serve({ servedir: './dev' });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
main();
