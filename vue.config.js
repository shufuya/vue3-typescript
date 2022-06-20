const { defineConfig } = require("@vue/cli-service")
const path = require("path")

module.exports = defineConfig({
  outputDir: "./build",
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src"),
      views: "@/views",
      components: "@/components"
    }
  }
})
