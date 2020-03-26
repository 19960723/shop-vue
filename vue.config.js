module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: true,
  devServer: {
    open: true,
    host: '192.168.1.101',
    port: 8004,
    https: false,
    hotOnly: false,
    proxy: {
      '/': {
        target: 'http://localhost:8002',
        ws: true,
        changeOrgin: true,
        pathRewrite: {}
      }
    }
  }
}