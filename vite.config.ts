import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  base: "/", // relative path for assets to deploy website in shared hoisting 
              // "/" is absolute path used in local development for deploying in vercel apps..
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
