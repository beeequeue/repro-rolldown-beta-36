import { defineConfig } from "rolldown"

export default defineConfig({
  input: "index.js",
  platform: "node",
  define: {
    "process.env.NODE_ENV": "\"production\"",
  },
  resolve: {
    conditionNames: ["import"],
  },
  output: {
    minify: true,
  },
  optimization: {
    // inlineConst: { mode: "smart", pass: 5 },
  },
})
