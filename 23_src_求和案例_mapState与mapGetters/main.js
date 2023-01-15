// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入store
import store from './store/index'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // vuex配置store
  store
}).$mount('#app')