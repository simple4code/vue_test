<template>
  <div>
    <Student name="Jack" gender="male" :age="18"/>
    <hr/>
    <Student name="Mary" gender="female" :age="20"/>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: { Student },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
