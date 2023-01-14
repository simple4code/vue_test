<template>
  <li >
    <label>
      <input 
        type="checkbox" 
        :checked="todo.done" 
        @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        :value="todo.title" 
        v-show="todo.isEdit" 
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"/>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    name: 'TodoItem',
    data() {
      return {
      }
    },
    // 声明接收todo对象
    props: ['todo'],
    methods: {
      handleCheck(id) {
        // 通知App组件将对应todo的done值取反
        // this.$bus.$emit('changeTodo', id)
        // 发布消息
        PubSub.publish('changeTodo', id)
      },
      // 删除该todo事项
      handleDelete(id) {
        if(confirm('确定要删除吗')) {
          // this.$bus.$emit('deleteTodo', id)
          // 发布消息
          PubSub.publish('deleteTodo', id)
        }
      },
      // 编辑
      handleEdit(todo) {
        if(todo.hasOwnProperty('isEdit')) {
          todo.isEdit = true
        }else {
          // todo没有isEdit属性，追加该属性
          console.log('todo没有isEdit属性，追加该属性')
          this.$set(todo, 'isEdit', true)
        }
        // $nextTick会在下一轮更新时执行回调方法
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      // 失去焦点回调（真正执行修改逻辑）
      handleBlur(todo, e) {
        todo.isEdit = false
        if(!e.target.value.trim()) {
          return alert('输入不能为空')
        }
        this.$bus.$emit('updateTodo', todo.id, e.target.value)
      }
    },
    mounted() {
      if(this.todo.hasOwnProperty('isEdit')) {
          this.todo.isEdit = false
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }

</style>