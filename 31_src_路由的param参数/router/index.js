// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      // 嵌套路由配置
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'detail',
              path: 'detail/:id/:title',
              component: Detail,
            }
          ]
        }
      ]
    }
  ]
})

