<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据，方法等）
  export default {
    name: 'SchoolC',
    data() {
      return {
        schoolName: 'SSS',
        address: 'BeiJing'
      }
    }
  }
</script>

<style>
  /* 组件的样式 */
  .school {
    background-color: skyblue;
  }
</style>