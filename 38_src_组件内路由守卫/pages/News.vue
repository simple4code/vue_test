<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001<input type="text"></li>
    <li>news002<input type="text"></li>
    <li>news003<input type="text"></li>
  </ul>
</template>

<script>
  export default {
    name: 'NewsC',
    data(){
      return {
        opacity: 1
      }
    },
    /* mounted() {
      this.timer = setInterval(() => {
        console.log('定时器在工作')
        this.opacity -= 0.01
        if(this.opacity <= 0) this.opacity = 1
      }, 10)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    } */
    // 组件激活时
    activated() {
      console.log('News组件激活')
      this.timer = setInterval(() => {
        console.log('定时器在工作')
        this.opacity -= 0.01
        if(this.opacity <= 0) this.opacity = 1
      }, 10)
    },
    // 组件销毁时
    deactivated() {
      console.log('News组件失活')
      clearInterval(this.timer)
    }
  }
</script>

<style>

</style>