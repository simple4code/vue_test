<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="./assets/food.png" alt="food">
      <a slot="footer" href="https://cn.bing.com/search?q=%E7%BE%8E%E9%A3%9F&">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://cn.bing.com/search?q=%E5%8D%95%E6%9C%BA%E6%B8%B8%E6%88%8F">单机游戏</a>
        <a href="https://cn.bing.com/search?q=%E7%BD%91%E7%BB%9C%E6%B8%B8%E6%88%8F">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls
      src="https://p9-sign.douyinpic.com/obj/xigua-video-audit/d11b7ba6b7a44061a3c92534780330d1?x-expires=1988845200&x-signature=KO0BrLz2ZvkulLqUdhy88w1mo94%3D&filename=1.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://cn.bing.com/search?q=%E5%8D%95%E6%9C%BA%E6%B8%B8%E6%88%8F">经典</a>
          <a href="https://cn.bing.com/search?q=%E5%8D%95%E6%9C%BA%E6%B8%B8%E6%88%8F">热门</a>
          <a href="https://cn.bing.com/search?q=%E5%8D%95%E6%9C%BA%E6%B8%B8%E6%88%8F">推荐</a>
        </div>
        <h4>Welcome!</h4>
      </template>
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
  .container, .foot {
    display: flex;
    justify-content: space-around;
  }
  h4 {
    text-align: center;
  }
</style>
