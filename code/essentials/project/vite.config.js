import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    ui: true,
    globals: true,
    coverage: {
      provider: "c8",
      reporter: ["html"],
      reportsDirectory: "./coverage",
    },
  },
});
// to view coverage report run `npx serve coverage` in the terminal
