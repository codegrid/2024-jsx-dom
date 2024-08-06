export const commonConfig = {
  logLevel: 'info',
  entryPoints: {
    dom: './src/apps/domApp/index.ts',
    jsx: './src/apps/jsxApp/index.tsx',
    jsxComponent: './src/apps/jsxComponentApp/index.tsx',
  },
  bundle: true,
  platform: 'browser',
};
