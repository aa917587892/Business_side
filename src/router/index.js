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
    const sellTaskFlow = () => import("@/views/merchant/sellTaskFlow/sellTaskFlow")
      const BuyTbFlow = () => import("@/views/merchant/sellTaskFlow/BuyTbFlow")
    const shop = () => import("@/views/merchant/shop/index")
        const taobao = () =>  import("@/views/merchant/shop/taobao") 
        const jingdong = () => import("@/views/merchant/shop/jingdong")
        const pdd = () => import("@/views/merchant/shop/pdd")
        const dy = () => import("@/views/merchant/shop/dy")
        const znzs = () => import("@/views/merchant/shop/znzs")
        const bindingShop = () => import("@/views/merchant/shop/bindingShop")  
    const wealth = () => import("@/views/merchant/wealth/wealth")
        const topUp = () => import("@/views/merchant/wealth/topUp")
        const rechargeList = () => import("@/views/merchant/wealth/rechargeList")
        const goldDetail = () => import("@/views/merchant/wealth/goldDetail")
    const userindex = () => import("@/views/merchant/user/index")
        const user = () => import("@/views/merchant/user/user")
        const invitation = () => import("@/views/merchant/user/invitation")
        const message = () => import("@/views/merchant/user/message")
        const security = () => import("@/views/merchant/user/security")

const flow = () => import("@/views/flow/flow")
const tools = () => import("@/views/tools/tools")
const edu = () => import("@/views/edu/edu")
const news = () => import("@/views/news/news")
const login =() => import("@/views/login/login")
const registered =() => import("@/views/login/registered")





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
       component:sellTaskFlow,
       children:[
         {path:'/merchant/sellTaskFlow/BuyTbFlow',component:BuyTbFlow}
       ]
          },{
       path:'/merchant/shop',
       component:shop,
       redirect:'/merchant/shop/taobao',  //二级默认路径 换句话说就是输入路径时候 他会跳转到已设置的默认路径上 输入：/merchant/shop
       children:[
          { path: '/merchant/shop/taobao', component: taobao},
          { path: '/merchant/shop/jingdong', component: jingdong},
          { path: '/merchant/shop/pdd', component: pdd},
          { path: '/merchant/shop/dy', component: dy},
          { path: '/merchant/shop/znzs', component: znzs},
          { path:'/merchant/shop/bindingShop',component:bindingShop}
      ]
      },{
        path:'/merchant/wealth',
        component:wealth,
        redirect:'/merchant/wealth/topUp',  
        children:[
           { path: '/merchant/wealth/topUp', component: topUp},
           { path: '/merchant/wealth/rechargeList', component: rechargeList},
           { path: '/merchant/wealth/goldDetail', component: goldDetail},
       ]
       },
      {
      path:'/merchant/tool',
      component:tool
      },
      {
      path:'/merchant/user',
      component:userindex,
      redirect:'/merchant/user/user',  
      children:[
        { path: '/merchant/user/user', component: user},
        { path: '/merchant/user/invitation', component: invitation},
        { path: '/merchant/user/message', component: message},
        { path: '/merchant/user/security', component: security},
      ]
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
  },{
    path:'/login',
    component:login,
    meta: {
			showTab: true   //如果需要显示就加上这个
		}
  },
  {
    path:'/registered',
    component:registered,
    meta: {
			showTab: true   //如果需要显示就加上这个
		}
  },
  {path:'*',redirect:'/'},  //路径上面没有的统一去默认路径
  ]
})

