const { defineConfig } = require('@vue/cli-service')

// Development proxy to forward /api calls to the Laravel backend and avoid CORS
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '/api' }
      }
    }
  }
})
