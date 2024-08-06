const esbuild = require('esbuild');
const config = require('./config.cjs');

const main = async () => {
  try {
    await esbuild.build({
      ...config,
      minify: true,
      sourcemap: 'linked',
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
main();
