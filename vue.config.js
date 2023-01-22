const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      title: 'Todo App',
      entry: 'src/main.js'
    },
  },
  css: {
    extract: process.env.NODE_ENV === 'production'
  },
  transpileDependencies: true,
})
