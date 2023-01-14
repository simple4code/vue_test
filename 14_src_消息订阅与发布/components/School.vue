<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
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
      demo(msgName, data) {
        console.log('有人发布了hello消息, hello消息的回调执行了', msgName, data)
      }
    },
    mounted() {
      // 订阅消息
      this.pubId = pubsub.subscribe('hello', (msgName, data) => {
        console.log(this)
        this.demo(msgName, data)
      })
    },
    beforeDestroy() {
      // 取消订阅消息
      pubsub.unsubscribe(this.pubId)
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