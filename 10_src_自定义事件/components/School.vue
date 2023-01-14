<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
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
    props:['getSchoolName'],
    methods: {
      sendSchoolName() {
        this.getSchoolName(this.name)
      }
    }
  }
</script>

<style scoped lang="css">
  /* 组件的样式 */
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>