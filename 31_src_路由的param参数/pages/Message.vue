<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带 param 参数，to属性字符串写法 -->
        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;

        <!-- 跳转路由并携带 param 参数，to属性对象写法 -->
        <router-link :to="{
          name: 'detail',
          params: {
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'MessageC',
    data() {
      return {
        messageList:[
          {id:'001', title: '消息001'},
          {id:'002', title: '消息002'},
          {id:'003', title: '消息003'}
        ]
      }
    }
  }
</script>

<style>

</style>