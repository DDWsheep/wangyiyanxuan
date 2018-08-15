/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import InterPage from '../pages/InterPage/InterPage'
import Msite from '../pages/Msite/Msite'
import Explore from '../pages/Explore/Explore'
import Category from '../pages/Category/Category'
import ShopCart from '../pages/ShopCart/ShopCart'
import Profile from '../pages/Profile/Profile'


Vue.use(VueRouter);

export default new VueRouter({//配置路由
  routes: [
    {
      path: '/interpage',
      component: InterPage
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/explore',
      component: Explore,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
    },
   
    {
      path: '/',
      redirect: '/interpage'
    }
  ]
})

