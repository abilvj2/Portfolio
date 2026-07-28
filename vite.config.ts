import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// The site is published at https://abilvj2.github.io/Portfolio/, so assets must
// resolve against that sub-path. Override with BASE_PATH=/ for a custom domain.
const base = process.env.BASE_PATH ?? "/Portfolio/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
