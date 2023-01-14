<template>
  <div>
    <button @click="isShow = !isShow">显式/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">Hello!</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'TestC',
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
  h1 {
    background-color: skyblue;
  }

  .hello-enter-active {
    animation: anime-test 0.5s linear;
  }

  .hello-leave-active {
    animation: anime-test 0.5s linear reverse;
  }

  @keyframes anime-test {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>