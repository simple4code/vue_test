// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false


// 创建vm
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')