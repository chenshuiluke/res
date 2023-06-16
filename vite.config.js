import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
import { babel } from "@rollup/plugin-babel";
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: "runtime",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", "ts"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "resources.jsx"),
      name: "ResourcesLib",
      fileName: "ResourcesLib",
    },
    target: "es2015",
  },
});
