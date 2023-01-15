<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
    <slot :games="games">如果使用者没有使用插槽，会显示该提示</slot>
  </div>
</template>

<script>
  export default {
    name: 'CategoryC',
    props: ['title'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      }
    }
  }
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }

  h3 {
    text-align: center;
    background-color: blueviolet;
  }

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
</style>