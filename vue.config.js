const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 默认配置选项参考网址：https://cli.vuejs.org/zh/config/
  // 关闭语法检查
  lintOnSave: false,
  pages: {
    index: {
      // 修改默认入口
      entry: 'src/main.js',
    }
  },
  // 开启代理服务器配置代理，方式一
  /* devServer: {
    // http://localhost:8080 url的请求会转发到 http://localhost:5000 服务器
    // 如果 8080 服务器本身就有请求资源，则不会转发
    proxy: 'http://localhost:5000'
  } */
  // 开启代理服务器配置代理，方式二
  // 完整配置选项可参考：https://github.com/chimurai/http-proxy-middleware#options
  devServer: {
    proxy: {
      // 匹配所有以 '/api1' 开头的请求路径
      '/api1': {
        // 代理目标的基础路径
        target: 'http://localhost:5000',
        // 重写路径 http://localhost:8080/api1/students ==> http://localhost:8080/students
        pathRewrite: {'^/api1' : ''},
        // changes the origin of the host header to the target URL
        // 修改请求头中的 host 值，为 true 服务器收到的请求头中的host为：localhost:5000
        changeOrigin: true
      },
      '/api2': {
        target: 'http://localhost:5001',
        // 重写路径
        pathRewrite: {'^/api2' : ''},
        // changes the origin of the host header to the target URL
        // 修改请求头中的 host 值，为 true 服务器收到的请求头中的host为：localhost:5001
        changeOrigin: true
      }
    }
  }
})
