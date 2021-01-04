import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const isDev = process.env.NODE_ENV !== "production";

import pkg from "./package.json";

let dPackage = isDev
  ? {
      main: "doc/asset/inori.cjs.js",
      module: "doc/asset/inori.esm.js",
    }
  : pkg;
export default {
  input: "src/index.js",

  output: [
    { file: dPackage.main, format: "cjs" },
    { file: dPackage.module, format: "es" },
  ],
  plugins: [
    resolve(), // 这样 Rollup 能找到 `ms`
    commonjs(),
    babel(),
    !isDev && terser(),
  ],
};
