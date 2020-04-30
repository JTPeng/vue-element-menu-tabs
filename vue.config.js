const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath: process.env.VUE_APP_WEB_PREFIX,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    // 端口号
    port: 8888,
    // host: '0.0.0.0',
    // https:{type:Boolean}
    https: false,
    // 配置自动启动浏览器
    open: true,

    // 忽略eslint编译检查
    overlay: {
      warnings: false,
      errors: false
    }
    // proxy: 'http://192.168.34.236:20790/rlc-cts/'// test
    // 配置跨域处理,只有一个代理
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  configureWebpack: config => {
    return {
      // mode,
      resolve: {
        alias: {
          vue$: 'vue/dist/vue.esm.js',
          '@': resolve('src')
        }
      }
    }
  }
}