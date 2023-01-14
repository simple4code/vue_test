<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"></TodoHeader>
        <TodoList 
          :todos="todos" 
          :changeTodo="changeTodo" 
          :deleteTodo="deleteTodo"></TodoList>
        <TodoFooter 
          :todos="todos" 
          :deleteFinished="deleteFinished"
          :checkAllTodo="checkAllTodo"></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: { TodoHeader, TodoFooter, TodoList },
  data() {
    return {
      todos: [
        {id:'001', title:'吃饭', done:true},
        {id:'002', title:'运动', done:true},
        {id:'003', title:'学习', done:true}
      ]
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    // 勾选或者取消勾选todo
    changeTodo(id) {
      this.todos.forEach((todo) => {
        if(todo.id === id) todo.done = !todo.done
      })
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    // 删除全部已完成的todo
    deleteFinished() {
      this.todos = this.todos.filter((todo) => !todo.done)
    },
    // 勾选或者不勾选所有事项
    checkAllTodo(isCheck) {
      this.todos.forEach((todo) => todo.done=isCheck)
    }
  }
}
</script>
  
<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) , 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color:#bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
