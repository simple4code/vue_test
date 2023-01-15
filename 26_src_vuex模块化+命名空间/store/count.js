// 求和功能相关的配置
export default {
  namespaced: true,
  actions:{
    addOdd(context, addNum) {
      context.commit('ADD', addNum)
    },
    addWait(context, addNum) {
      setTimeout(() => {
        context.commit('ADD', addNum)
      }, 1500)
    }
  },
  mutations:{
    ADD(state, addNum) {
      state.sum += addNum
    },
    SUB(state, addNum) {
      state.sum -= addNum
    },
  },
  state:{
    sum: 0,
    school: 'Princeton University',
    subject: 'Math',
  },
  getters:{
    bigSum(state) {
      return state.sum*10
    }
  }
}