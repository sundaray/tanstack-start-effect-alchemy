import alchemy from "alchemy/cloudflare/tanstack-start";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    alchemy(),
    tanstackStart(),
    // react's vite plugin must come after sart's vite plugin
    viteReact(),
  ],
});
