import Vue from 'vue'
import Router from 'vue-router'


const home = () => import("@/views/home/home")
const sellTaskMoney = () => import("@/views/sellTaskMoney/index")
const costList = () => import("@/views/sellTaskMoney/costList")

const sellTaskFlow = () => import("@/views/sellTaskFlow/sekkTaskFlow")

const shop = () => import("@/views/shop/index")
const taobao = () => import("@/views/shop/taobao")
const jingdong = () => import("@/views/shop/jingdong")
const pdd = () => import("@/views/shop/pdd")
const dy = () => import("@/views/shop/dy")
const znzs = () => import("@/views/shop/znzs")


const tool = () => import("@/views/tool/tool")

const user = () => import("@/views/user/user")




Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'/',
      redirect:'/home'
    
  }, 
  {
    path:'/home',
    component:home
  },
  {
      path:'/sellTaskMoney',
      component:sellTaskMoney,
      children:[
        { path: '/sellTaskMoney/costList', component: costList},
    ]

  }
  ,{
      path:'/sellTaskFlow',
      component:sellTaskFlow
  },
  {
    path:'/shop',
    component:shop,
    children:[
      { path: '/shop/tabao', component: taobao},
      { path: '/shop/jingdong', component: jingdong},
      { path: '/shop/pdd', component: pdd},
      { path: '/shop/dy', component: dy},
      { path: '/shop/znzs', component: znzs},
  ]
  },
  {
  path:'/tool',
  component:tool
  },
  {
  path:'/user',
  component:user
  }
  ]
})

