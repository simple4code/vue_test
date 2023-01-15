<template>
  <div class="container">
    <Category title="美食">
      <img src="./assets/food.png" alt="food">
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls
      src="https://p9-sign.douyinpic.com/obj/xigua-video-audit/d11b7ba6b7a44061a3c92534780330d1?x-expires=1988845200&x-signature=KO0BrLz2ZvkulLqUdhy88w1mo94%3D&filename=1.mp4"></video>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
    name: 'App',
    components: { Category },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        films: ['《教父》', '《拆弹专家》', '《泰坦尼克号》', '《阿凡达》']
      }
    }
  }
</script>
  
<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>
