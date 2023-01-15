<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">Welcome!</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">Loading...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">请求出错了，错误信息：{{info.errMsg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'UserList',
    data() {
      return {
        info: {
          isFirst: true,
          isLoading: false,
          errMsg: '',
          users: []
        }
      }
    },
    methods: {
      updateListData(dataObj) {
        // {...this.info, ...dataObj} 合并对象
        this.info = {...this.info, ...dataObj}
        // 或者使用Object.assign 方法
        // Object.assign(this.info, dataObj)
      }
    },
    mounted() {
      // 挂载自定义事件 getUsers
      this.$bus.$on('updateListData', this.updateListData)
    },
    beforeDestroy() {
      // 卸载自定义事件 getUsers
      this.$bus.$off('updateListData')
    }
  }
</script>

<style scoped>
  .album {
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>