<template>
  <!-- 组件的结构 -->
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gender}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据，方法等）
  export default {
    name: 'StudentC',
    data() {
      console.log(this)
      return {
        msg: 'Hello!',
        myAge: this.age
      }
    },
    // 简单声明接收：数组方式
    // props: ['name', 'gender', 'age']

    // 接收的同时对数据进行类型限制
    /* props: {
      name: String,
      gender: String,
      age: Number
    } */

    // 接收的同时对数据进行类型限制 + 指定默认值/必要性限制
    props: {
      name: {
        // 类型是字符串
        type: String,
        // 必须要传
        required: true
      },
      age: {
        type: Number,
        default: 22
      },
      gender: {
        type: String,
        required: true
      }
    },

    methods: {
      // 一般不要直接修改从外部传入的属性，
      // 可以在自己组件的data里面声明一个变量接收外部属性，再修改这个变量
      updateAge() {
        this.myAge = this.myAge + 1
      }
    }
  }
</script>

<style>
  /* 组件的样式 */
</style>