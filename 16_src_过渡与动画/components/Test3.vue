<template>
  <div>
    <button @click="isShow = !isShow">显式/隐藏</button>
    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    appear>
      <h1 v-show="!isShow" key="1">Hello!</h1>
      <h1 v-show="isShow" key="2">World!</h1>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'
  export default {
    name: 'Test3C',
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
  h1 {
    background-color: skyblue;
  }

</style>