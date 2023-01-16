// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入ElementUI
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入ElementUI
import { Button, Row, DatePicker } from 'element-ui';

// 关闭Vue生产提示
Vue.config.productionTip = false

// 应用 ElementUI组件库
// Vue.use(ElementUI)

// 按需引入使用 ElementUI组件库
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 创建vm
new Vue({
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')