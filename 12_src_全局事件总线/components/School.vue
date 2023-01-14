<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
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
    mounted() {
      // 组件挂载完成后在事件总线绑定事件
      this.$bus.$on('hello', (data) => {
        console.log('我是School组件,我收到了数据,', data)
      })
    },
    beforeDestroy() {
      // 组件销毁之前解绑事件
      this.$bus.$off('hello')
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