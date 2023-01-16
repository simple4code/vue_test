<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name: 'AboutC',
    mounted() {
      console.log('About组件已被挂载')
    },
    beforeDestroy() {
      console.log('About组件即将被销毁')
    },

    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
      console.log(to, from, next)
      console.log('组件内路由守卫', to, from, next)
      // 根据路由元信息判断是否需要鉴权
      if(to.meta.isAuth) {
        if(localStorage.getItem('school') === 'EM') {
          next()
        }else{
          alert('学校名不对，无权查看')
        }
      }else {
        next()
      }
    },

    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
      console.log(to, from, next)
      next()
    }
  }
</script>

<style>

</style>