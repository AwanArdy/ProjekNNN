import { defineConfig } from "vite";

export default defineConfig({
  server: {
    hmr: true,
    watch: {
      usePolling: true
    }
  }
})