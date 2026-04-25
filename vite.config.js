import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: set base to your repo name
  // e.g. if repo is github.com/arijal1/job-hunter → base: "/job-hunter/"
  base: "/",
});
