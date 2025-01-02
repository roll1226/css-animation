import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
