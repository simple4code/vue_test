<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍后为: {{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <h3 style="color:red;">Person组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="addNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(addNum)">+</button>
    <button @click="sub(addNum)">-</button>
    <button @click="addWhenOdd(addNum)">当前和为奇数再加</button>
    <button @click="addWait(addNum)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'CountC',
    data() {
      return {
        // 用户选择的数字
        addNum: 1,
      }
    },
    computed: {
      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState('countAbout', ['sum', 'school', 'subject']),
      ...mapState('personAbout', ['personList']),

      /* ************************************************************** */
      // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters('countAbout', ['bigSum']),
    },
    methods: {
      // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations（对象写法）
      ...mapMutations('countAbout', {add:'ADD', sub:'SUB'}),

      /* ************************************************************** */
      // 借助mapActions生成对应的方法，方法会调用dispatch去联系actions（对象写法）
      ...mapActions('countAbout', {addWhenOdd:'addOdd', addWait:'addWait'}),
    },
    mounted() {
    }
  }
</script>

<style scoped lang="css">
  button {
    margin-left: 5px;
  }
</style>