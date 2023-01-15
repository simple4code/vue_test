<template>
  <div class="container">
    <UserSearch />
    <UserList />
  </div>
</template>

<script>
  import UserList from './components/UserList.vue'
  import UserSearch from './components/UserSearch.vue'

  export default {
    name: 'App',
    components: { UserList, UserSearch }
  }
</script>
  
<style>
</style>
