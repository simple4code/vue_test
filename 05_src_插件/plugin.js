export default {
  install(Vue) {
    // 全局定义过滤器
    Vue.filter('myslice', function(value) {
      return value.slice(0, 4)
    })

    // 全局自定义指令
    Vue.directive('fbind', {
      // 指令与元素成功绑定时调用
      bind(element, binding) {
        element.value = binding.value
      },
      // 指令所在元素被插入页面时调用（被绑定元素插入父节点时调用）
      inserted(element) {
        element.focus()
      },
      // 指令所在的模板被重新解析时
      update(element, binding) {
        element.value = binding.value
      }
    })

    // 定义混入
    Vue.mixin({
      data() {
        return {
          a: 100,
          b: 200
        }
      }
    })

    // 给Vue原型添加hello方法 (vm和组件实例都可以使用该方法)
    Vue.prototype.hello = () => {alert('Hello!')}
  }
}