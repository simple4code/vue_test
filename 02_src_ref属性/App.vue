<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'

export default {
  name: 'App',
  components: { School },
  data() {
    return {
      msg: 'Welcome!'
    }
  },
  methods: {
    showDOM() {
      // 真实DOM元素
      console.log(this.$refs.title)
      // 真实DOM元素
      console.log(this.$refs.btn)
      // School组件的实例对象
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style>

</style>
