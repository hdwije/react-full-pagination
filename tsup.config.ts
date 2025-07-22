import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom'],
  clean: true,
  loader: {
    '.css': 'copy',
  },
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
