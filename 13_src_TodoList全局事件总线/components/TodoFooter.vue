<template>
  <div class="todo-footer" v-show="total !== 0">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="handleCheckAll"/> -->
      <!-- 可以使用v-model绑定计算属性(getter和setter)实现上面两个功能 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ finishedTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="handleDeleteAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoFooter',
    props: ['todos'],
    computed: {
      total() {
        return this.todos.length
      },
      finishedTotal() {
        // filter实现
        // return this.todos.filter(todo => todo.done).length
        // reduce实现
        return this.todos.reduce((sum, todo) => sum + (todo.done?1:0), 0)
      },
      isAll: {
        get() {
          return this.finishedTotal === this.todos.length && this.todos.length > 0
        },
        set(value) {
          this.$emit('checkAllTodo', value)
        }
      }
    },
    methods: {
      // 勾选或者取消勾选所有事项
      // handleCheckAll(e) {
      //   this.checkAllTodo(e.target.checked)
      // },
      // 删除所有已完成的todo事项
      handleDeleteAll() {
        this.$emit('deleteFinished')
      }
    }
  }
</script>

<style>
  /*footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>