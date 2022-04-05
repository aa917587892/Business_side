import { patch } from 'semver'
import Vue from 'vue'
import Router from 'vue-router'


const merchant = () => import("@/views/merchant/index")
    const home = () => import("@/views/merchant/home")
    const sellTaskMoney = () => import("@/views/merchant/sellTaskMoney/index")
        const add = () =>  import("@/views/merchant/sellTaskMoney/add") 
        const list = () => import("@/views/merchant/sellTaskMoney/list")
        const order = () => import("@/views/merchant/sellTaskMoney/order")
        const batchlist = () => import("@/views/merchant/sellTaskMoney/batchlist")
        const complaints = () => import("@/views/merchant/sellTaskMoney/complaints")
        const tasktmpl = () => import("@/views/merchant/sellTaskMoney/tasktmpl")
        const aftersales = () => import("@/views/merchant/sellTaskMoney/aftersales")
        const blackList = () => import("@/views/merchant/sellTaskMoney/blackList")
        const costList = () => import("@/views/merchant/sellTaskMoney/costList")
    const tool = () => import("@/views/merchant/tool/tool")
    const user = () => import("@/views/merchant/user/user")
    const sellTaskFlow = () => import("@/views/merchant/sellTaskFlow/sellTaskFlow")
    const shop = () => import("@/views/merchant/shop/index")
        const taobao = () =>  import("@/views/merchant/shop/taobao") 
        const jingdong = () => import("@/views/merchant/shop/jingdong")
        const pdd = () => import("@/views/merchant/shop/pdd")
        const dy = () => import("@/views/merchant/shop/dy")
        const znzs = () => import("@/views/merchant/shop/znzs")


const flow = () => import("@/views/flow/flow")
const tools = () => import("@/views/tools/tools")
const edu = () => import("@/views/edu/edu")
const news = () => import("@/views/news/news")





Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'/',
      redirect:'/merchant/home' //默认路径
    
  }, 
  {
    path:'/merchant',
    component:merchant,
    redirect:'/merchant/home',  //一级路径 输入/merchant
    children:[
      {
       path:'/merchant/sellTaskMoney',
       component:sellTaskMoney,
       children:[
            { path: '/merchant/sellTaskMoney/add', component: add},
            { path: '/merchant/sellTaskMoney/list', component: list},
            { path: '/merchant/sellTaskMoney/order', component: order},
            { path: '/merchant/sellTaskMoney/batchlist', component: batchlist},
            { path: '/merchant/sellTaskMoney/complaints', component: complaints},
            { path: '/merchant/sellTaskMoney/tasktmpl', component: tasktmpl},
            { path: '/merchant/sellTaskMoney/aftersales', component: aftersales},
            { path: '/merchant/sellTaskMoney/blackList', component: blackList},
            { path: '/merchant/sellTaskMoney/costList', component: costList}
          ]
        },{
       path:'/merchant/sellTaskFlow',
       component:sellTaskFlow
          },{
       path:'/merchant/shop',
       component:shop,
       redirect:'/merchant/shop/taobao',  //二级默认路径 换句话说就是输入路径时候 他会跳转到已设置的默认路径上 输入：/merchant/shop
       children:[
          { path: '/merchant/shop/taobao', component: taobao},
          { path: '/merchant/shop/jingdong', component: jingdong},
          { path: '/merchant/shop/pdd', component: pdd},
          { path: '/merchant/shop/dy', component: dy},
          { path: '/merchant/shop/znzs', component: znzs}
      ]
      },
      {
      path:'/merchant/tool',
      component:tool
      },
      {
      path:'/merchant/user',
      component:user
      },
      {
        path:'/merchant/home',
        component:home  
      
    }
    ]
  },
  {
    path:'/flow',
    component:flow
  },
  {
    path:'/edu',
    component:edu
  },
  {
    path:'/tools',
    component:tools
  },
  {
    path:'/news',
    component:news
  },
  {path:'*',redirect:'/'},  //路径上面没有的统一去默认路径
  ]
})

