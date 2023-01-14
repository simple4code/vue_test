<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定自定义事件实现：子组件给父组件传递数据(第一种写法，使用v-on) -->
    <!-- <Student @getStudentName="getStudentName"/> -->
    <!-- 绑定自定义事件,只触发一次 -->
    <!-- <Student @getStudentName.once="getStudentName"/> -->
    <Student @getStudentName="getStudentName" @demo="m1" @click.native="show"/>

    <!-- 通过父组件给子组件绑定自定义事件实现：子组件给父组件传递数据(第二种写法，使用ref) -->
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: { Student, School },
  data() {
    return {
      msg: 'Hello!',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名', name)
    },
    getStudentName(name, ...args) {
      console.log('App收到了学生名', name, args)
      this.studentName = name
    },
    m1() {
      console.log('demo事件被触发了')
    },
    show() {
      console.log('show')
    }
  },
  mounted(){
    console.log(this.$refs.student)
    // 绑定自定义事件
    // this.$refs.student.$on('getStudentName', this.getStudentName)
    // 绑定自定义事件，只触发一次
    // this.$refs.student.$once('getStudentName', this.getStudentName)
  }
}
</script>

<style scoped>
  .app {
    background-color: blueviolet;
    padding: 5px;
  }
</style>
