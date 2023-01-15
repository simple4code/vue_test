// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件Vue-resource
import VueResource from 'vue-resource'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)

// 创建vm
new Vue({
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')