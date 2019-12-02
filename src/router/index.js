import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/**
 * 重写路由的push方法 防止重复添加路由
 */
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }
// import home_page from '../components/common/Home.vue'
export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      name: 'parent',
      redirect:'/test',
      meta: {
          title: '项目首页'
      },
      children: [
        {
          path: '/test',
          component: resolve => require(['../components/test/test.vue'], resolve),
          meta: {
              title: '测试页'
          },
        },{
          path: '/set',
          component: resolve => require(['../components/test/testSetVuex.vue'], resolve),
          meta: {
              title: '存vuex'
          },
        },{
          path: '/get',
          component: resolve => require(['../components/test/testGetVuex.vue'], resolve),
          meta: {
              title: '取vuex'
          },
        },{
          path: '/cart',
          component: resolve => require(['../components/test/cart/cart.vue'], resolve),
          meta: {
              title: 'cart'
          },
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/common/Login.vue'], resolve)
    },
    {
        path: '/404',
        component: resolve => require(['../components/page/404.vue'], resolve)
    },
    {
        path: '/403',
        component: resolve => require(['../components/page/403.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/404'
    }
  ]
})
