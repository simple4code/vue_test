<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gender}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  // 组件交互相关的代码（数据，方法等）
  export default {
    name: 'StudentC',
    data() {
      return {
        name: 'Jack',
        gender: 'male'
      }
    },
    methods: {
      sendStudentName() {
        pubsub.publish('hello', 1000)
      }
    }
  }
</script>

<style scoped>
  /* 组件的样式 */
  .student {
    background-color: blanchedalmond;
    padding: 5px;
    margin-top: 30px;
  }
</style>