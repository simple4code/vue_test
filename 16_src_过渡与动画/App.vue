<template>
  <div>
    <TestC />
    <Test2C />
    <Test3C />
  </div>
</template>

<script>
import TestC from './components/Test.vue'
import Test2C from './components/Test2.vue'
import Test3C from './components/Test3.vue'

export default {
  name: 'App',
  components: { TestC, Test2C, Test3C },
  data() {
    return {
      
    }
  },
}
</script>
  
<style>
  
</style>
