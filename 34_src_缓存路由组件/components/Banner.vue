<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back" class="btn btn-info">后退</button>
      <button @click="forward" class="btn btn-info">前进</button>
      <button @click="go" class="btn btn-info">Go</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BannerC',
    methods: {
      back() {
        this.$router.back()
      },
      forward() {
        this.$router.forward()
      },
      go() {
        this.$router.go(2)
      }
    }
  }
</script>

<style>

</style>