import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // 存储token
      token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
      user_detaile:{}
    },
   
    mutations: {
      // 修改token，并将token存入localStorage
      changeLogin (state, user) {
        state.token = user.token;
        state.user_detaile =user.user_data
        console.log(user)
        localStorage.setItem('token', user.token);
      }
    
    
  },
  actions: {
  },
  modules: {
  }
})
