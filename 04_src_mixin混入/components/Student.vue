<template>
  <!-- 组件的结构 -->
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{gender}}</h2>
  </div>
</template>

<script>
  // import {mixin, mixin2} from '../mixin.js'
  // 组件交互相关的代码（数据，方法等）
  export default {
    name: 'StudentC',
    data() {
      console.log(this)
      return {
        name: 'Jack',
        gender: 'male'
      }
    },
    // mixins: [mixin, mixin2]
  }
</script>

<style>
  /* 组件的样式 */
</style>