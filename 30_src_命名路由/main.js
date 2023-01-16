// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由插件
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭Vue生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter)

// 创建vm
new Vue({
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router
}).$mount('#app')