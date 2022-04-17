import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
//element UI引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//自定义样式

import './assets/css/free.css'
import './assets/css/common.css'

// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(ElementUI)

 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App)
})
 