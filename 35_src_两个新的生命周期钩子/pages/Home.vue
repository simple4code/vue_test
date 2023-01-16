<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" to="/home/news" active-class="active">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" to="/home/message" active-class="active">Message</router-link>
        </li>
      </ul>
    </div>
    <keep-alive include="NewsC">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'HomeC',
    mounted() {
      console.log('Home组件已被挂载', this)
    },
    beforeDestroy() {
      console.log('Home组件即将被销毁')
    }
  }
</script>

<style>

</style>