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
  }
})
