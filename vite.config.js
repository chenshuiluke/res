import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
const { getBabelOutputPlugin } = require("@rollup/plugin-babel");
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        /**
         * Running Babel on the generated code:
         *  https://github.com/rollup/plugins/blob/master/packages/babel/README.md#running-babel-on-the-generated-code
         *
         * Transforming ES6+ syntax to ES5 is not supported yet, there are two ways to do:
         *  https://github.com/evanw/esbuild/issues/1010#issuecomment-803865232
         * We choose to run Babel on the output files after esbuild.
         *
         * @vitejs/plugin-legacy does not support library mode:
         *  https://github.com/vitejs/vite/issues/1639
         */
        getBabelOutputPlugin({
          allowAllFormats: true,
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: false, // Default：false
                // Exclude transforms that make all code slower
                exclude: ["transform-typeof-symbol"],
                // https://babeljs.io/docs/en/babel-preset-env#modules
                modules: false,
              },
            ],
          ],
          plugins: [
            /**
             * Extract the helper function.
             */
            [
              "@babel/plugin-transform-runtime",
              {
                corejs: false,
                // version: require('@babel/runtime').version,
              },
            ],
          ],
        }),
      ],
    },
    lib: {
      entry: path.resolve(__dirname, "resources.jsx"),
      name: "ResourcesLib",
      fileName: "ResourcesLib",
    },
    target: "es2015",
  },
});
