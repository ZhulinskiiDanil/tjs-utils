import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      fileName: (format) => `index.js`
    }
  },
  resolve: { alias: { src: path.resolve('src/') } },
  plugins: [
    dts({
      insertTypesEntry: true
    })
  ]
});
