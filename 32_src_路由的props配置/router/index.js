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
              path: 'detail',
              component: Detail,

              // props的第一种写法，值为对象，
              // 该对象中的所有 key-value 都会以props的形式传给Detail组件（较少用）
              // props: {a:1, b:'hello'}

              // props的第二种写法，值为boolean，
              // 若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              // props: true

              // props的第三种写法，值为函数，
              // 函数返回的对象的所有 key-value 都会以props的形式传给Detail组件
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title
                }
              }
              
              // 解构赋值简化第三种写法
              /* props({query}) {
                return {
                  id:query.id, 
                  title:query.title
                }
              } */
              // 连续解构赋值简化第三种写法
              /* props({query:{id, title}}) {
                return {
                  id, title
                }
              }, */
            }
          ]
        }
      ]
    }
  ]
})

