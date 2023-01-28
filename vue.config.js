const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      title: process.env.VUE_APP_TITLE,
      entry: 'src/main.js'
    },
  },
  css: {
    extract: process.env.NODE_ENV === 'production'
  },
  transpileDependencies: true,
  publicPath: process.env.BASE_URL
})
