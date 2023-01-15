// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 准备actions--用于响应组件中的动作
// 建议业务逻辑在actions里面做
const actions = {
  // 如果业务逻辑很复杂，action里面可以拆分步骤委托其他action进行处理
  addOdd(context, addNum) {
    console.log('处理一些事情')
    context.dispatch('addOddStep2', addNum)
  },
  addOddStep2(context, addNum) {
    console.log('处理一些事情')
    context.dispatch('addOddStep3', addNum)
  },
  addOddStep3(context, addNum) {
    console.log('处理一些事情')
    if(context.state.sum % 2) {
      context.commit('ADD', addNum)
    }
  },
  addWait(context, addNum) {
    setTimeout(() => {
      context.commit('ADD', addNum)
    }, 1500)
  }
}

// 准备mutations--用于操作数据（state）
// mutations一般建议不要写业务逻辑，只操作数据
const mutations = {
  ADD(state, addNum) {
    state.sum += addNum
  },
  SUB(state, addNum) {
    state.sum -= addNum
  },
  ADD_PERSON(state, personObj) {
    state.personList.unshift(personObj)
  }
}

// 准备state--用于存储数据（state）
const state = {
  // 当前和
  sum: 0,
  school: 'Princeton University',
  subject: 'Math',
  personList: [
    {id: '001', name: 'Jack'}
  ]
}

// 用于将state里的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum*10
  }
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})

