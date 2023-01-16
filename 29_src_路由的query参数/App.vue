<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!-- 原始html使用a标签实现页面跳转 -->
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->

          <!-- vue-router使用router-link标签实现路由切换 -->
          <router-link class="list-group-item" to="/about" active-class="active">About</router-link>
          <router-link class="list-group-item" to="/home" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 使用router-view标签指定组件展示位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './components/Banner.vue'
  export default {
    name: 'App',
    components: {Banner},
  }
</script>
  
<style>
</style>
