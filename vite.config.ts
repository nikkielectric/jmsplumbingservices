import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeSitemap } from "./scripts/generate-sitemap";

// Vite plugin: regenerate public/sitemap.xml on build start and on dev startup
function sitemapPlugin() {
  return {
    name: "jms-sitemap-generator",
    buildStart() {
      try {
        const { count } = writeSitemap();
        console.log(`[sitemap] regenerated with ${count} URLs`);
      } catch (e) {
        console.warn("[sitemap] generation failed:", e);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    sitemapPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
