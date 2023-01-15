<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <select v-model.number="addNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addWhenOdd">当前和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: 'CountC',
    data() {
      return {
        // 当前和
        sum: 0,
        // 用户选择的数字
        addNum: 1
      }
    },
    methods: {
      add() {
        this.sum += this.addNum
      },
      sub() {
        this.sum -= this.addNum
      },
      addWhenOdd() {
        if(this.sum % 2 === 1) this.sum += this.addNum
      },
      addWait() {
        setTimeout(() => {
          this.sum += this.addNum
        }, 1500)
      }
    }
  }
</script>

<style scoped lang="css">
  button {
    margin-left: 5px;
  }
</style>