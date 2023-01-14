<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学校名称：{{name | myslice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据，方法等）
  export default {
    name: 'SchoolC',
    data() {
      return {
        name: 'Princeton University',
        address: 'America'
      }
    },
    methods: {
      test() {
        this.hello()
      }
    }
  }
</script>

<style>
  /* 组件的样式 */
</style>