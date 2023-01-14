<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gender}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑getStudentName事件</button>
    <button @click="end">销毁当前Student组件实例对象</button>
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
    methods: {
      sendStudentName() {
        // 触发自定义的getStudentName事件
        this.$emit('getStudentName', this.name, 100, 200, 300)
        // this.$emit('demo')
        // this.$emit('click')
      },
      unbind() {
        // 解绑一个自定义事件
        // this.$off('getStudentName')
        // 解绑多个自定义事件
        // this.$off(['getStudentName', 'demo'])
        // 解绑所有自定义事件
        this.$off()
      },
      end() {
        // 销毁当前Student组件实例对象
        // 销毁后所有Student组件实例自定义事件都会失效
        this.$destroy()
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