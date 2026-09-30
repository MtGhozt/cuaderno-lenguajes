import { viteSingleFile } from 'vite-plugin-singlefile';

export default {
  base: './',
  plugins: [viteSingleFile()],
  build: {
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 2000,
  },
};
