import axios from 'axios'

export function request(config){
     const instance =axios.create({
         baseURL:'/apis/',
         timeout: 5000
     })
    //  axios的拦截器
    //  请求拦截的作用 
     instance.interceptors.request.use(config =>{
        if (localStorage.getItem('token')) {
            config.headers['token']  = localStorage.getItem('token');
            console.log(config.headers);
          }
        // if (localStorage.getItem("token")) {
        //     config.headers.Authorization = "JWT " + localStorage.getItem("token");
        //   }
         return config
     },err =>{
        console.log(err);
     })
    
    //  2.相应拦截
     instance.interceptors.response.use(res =>{
        return res.data
    },err =>{
       console.log(err);
    })   

     return instance(config)
}


// import axios from 'axios'

// // ES6 Promise的封装
// export function request(options) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例对象
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5/',
//       timeout: 5000
//     })

//     // 过滤器(拦截器)
//     instance.interceptors.response.use(res => {
//       return res.data
//     })

//     // 通过实例发送网络请求
//     instance(options)
//         .then(res => {
//           resolve(res)
//         }).catch(err => {
//           reject(err)
//     }) 
//   })
// }
