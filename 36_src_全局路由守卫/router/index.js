// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: About,
      meta: {title:'关于'},
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: {title:'主页'},
      // 嵌套路由配置
      children: [
        {
          name: 'news',
          path: 'news',
          component: News,
          // 在路由元信息里面配置该路径是否需要权限
          meta: {isAuth: true, title:'新闻'}
        },
        {
          name: 'message',
          path: 'message',
          component: Message,
          meta: {isAuth: true, title:'详情'},
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

// 全局前置-路由守卫配置
// 初始化，每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from, next)
  // 根据路由元信息判断是否需要鉴权
  if(to.meta.isAuth) {
    if(localStorage.getItem('school') === 'EM') {
      next()
    }else{
      alert('学校名不对，无权查看')
    }
  }else {
    next()
  }
})

// 全局后置-路由守卫配置
router.afterEach((to, from) => {
  console.log('后置路由守卫', to, from)
  if(to.meta.title) {
    // 修改网页的title
    document.title = to.meta.title
  }else{
    document.title = 'vue_test'
  }
}) 

export default router

