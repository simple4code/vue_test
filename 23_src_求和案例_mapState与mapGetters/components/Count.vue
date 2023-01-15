<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍后为：{{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
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
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: 'CountC',
    data() {
      return {
        // 用户选择的数字
        addNum: 1,
      }
    },
    computed: {
      // 靠程序员自己亲自去写计算属性
      /* sum() {
        return this.$store.state.sum
      },
      school() {
        return this.$store.state.school
      },
      subject() {
        return this.$store.state.subject
      }, */
      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({he:'sum', xuexiao:'school', xueke:'subject'}),

      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState(['sum', 'school', 'subject']),

      /* ************************************************************** */
      /* bigSum() {
        return this.$store.getters.bigSum
      } */
      // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
      // ...mapGetters({bigSum: 'bigSum'}),
      // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(['bigSum']),
    },
    methods: {
      add() {
        this.$store.commit('ADD', this.addNum)
      },
      sub() {
        this.$store.commit('SUB', this.addNum)
      },
      addWhenOdd() {
        this.$store.dispatch('addOdd', this.addNum)
      },
      addWait() {
        this.$store.dispatch('addWait', this.addNum)
      }
    },
    mounted() {
      const x = mapState({he:'sum', xuexiao:'school', xueke:'subject'})
      console.log(x)
    }
  }
</script>

<style scoped lang="css">
  button {
    margin-left: 5px;
  }
</style>