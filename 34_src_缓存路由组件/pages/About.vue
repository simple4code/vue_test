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
    }
  }
</script>

<style>

</style>