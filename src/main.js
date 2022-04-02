import Vue from 'vue'
import App from './App'
import router from './router'
//element UI引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//自定义样式

import './assets/css/free.css'

Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
