import esbuild from 'esbuild';
import cssModulesPlugin from 'esbuild-css-modules-plugin';
import { commonConfig } from './commonConfig.mjs';

const main = async () => {
  try {
    await esbuild.build({
      ...commonConfig,
      outdir: 'public/scripts',
      minify: true,
      metafile: true,
      plugins: [
        cssModulesPlugin({
          localsConvention: 'camelCase',
          inject: true,
        }),
      ],
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
main();
