// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件
import plugin from './plugin'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(plugin)

// 创建vm
new Vue({
  render: h => h(App)
}).$mount('#app')