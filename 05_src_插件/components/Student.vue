<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gender}}</h2>
    <input type="text" v-fbind:value="name" />
  </div>
</template>

<script>
  // 组件交互相关的代码（数据，方法等）
  export default {
    name: 'StudentC',
    data() {
      return {
        name: 'Jack',
        gender: 'male'
      }
    },
  }
</script>

<style>
  /* 组件的样式 */
</style>