<template>
  <div class="bg-white" style="min-height: 100vh">
    <div class="top" style="width: 100%; height: 100px">
      <img
        src="@/assets/images/logo.png"
        style="width: 180px; height: 55px; top: 10px; left: 20%"
        class="position-absolute"
        alt=""
        srcset=""
      />
    </div>
    <div class="flex justify-center nav">
      <div class="left m-auto">
        <img src="@/assets/images/login/register.png" alt="" srcset="" />
      </div>
      <div class="right m-auto">
        <div class="register border rounded pb-3">
         <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
          <div class="title py-1 bg_title">商家注册</div>
           
            <div class="mx-2">
                 <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入4-16位用户名" maxlength="16"
              ><i slot="prefix" class="el-input__icon el-icon-user font-sm"></i
            ></el-input> 
           </el-form-item>  
            <el-form-item prop="password">
                 <el-input
                    placeholder="请输入6-18位密码"
                    v-model="ruleForm.password"
                    show-password
              ><i
                slot="prefix"
                class="el-input__icon el-icon-unlock font-sm"
              ></i
            ></el-input>
            </el-form-item>
             <el-form-item  prop="relpassword">
                  <el-input
                    placeholder="请输入确认密码"
                    v-model="ruleForm.relpassword"
                    show-password
                    blur="password_yanzhen"
              ><i
                slot="prefix"
                class="el-input__icon el-icon-unlock font-sm"
              ></i
            ></el-input>
             </el-form-item> 
              <el-form-item prop="mobile">
                   <el-input placeholder="请输入手机号" v-model="ruleForm.mobile " >
              <template slot="prepend" class="bg-white"
                ><i class="el-icon-mobile-phone"> </i> +86</template
              >
            </el-input>
              </el-form-item>
            <el-form-item prop="verificatio" >
               <el-col :span="16" class="mr-1">
                <el-input
                placeholder="请输入图像验证码"
                v-model="ruleForm.verificatio"
                ></el-input>
                 
               </el-col>

                <el-col :span="7">
                 <div style="height:35px;background-color:red">
                        s
                </div>
                </el-col>
               
            </el-form-item>
             <el-form-item prop="code">
                 <el-col :span="13" class="mr-1">
                    <el-input
                    placeholder="输入短信验证码"
                    v-model="ruleForm.code"
                    
                    ></el-input>
                 </el-col>
                 <el-col :span="6">
                      <el-button style="width:130px;font-size:13px">
                        获取短信验证码
                    </el-button>
                 </el-col>
               
             </el-form-item>
              <el-form-item prop="qq">
                  <el-input
                    placeholder="请输入QQ号码"
                    v-model="ruleForm.qq"
                    >
              </el-input>
              </el-form-item>
            </div>
           

          <div class="text-center">
            <el-button class="enter" @click="submitForm('ruleForm')">立即注册</el-button>
          </div>
          <div>
            <p
              style="font-size: 14px; text-align: center"
              class="text-light-black"
            >
              已有账号?<router-link
                to="/login"
                style="color: #3da3eb"
                class="text-light-black"
              >
                登录</router-link
              >
            </p>
          </div>
         </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {post_registered} from '@/network/login'


export default {
  data() {

    let checkPwd2=((rule,value,callback)=>{
        if(value.trim().length==0){
          callback(new Error("请确认密码不能为空"));
        }else if(value !=this.ruleForm.password){
          callback(new Error("2次密码不一致"));
        }else{
          callback();
        }
      })
    return {
     ruleForm:{
        usertype:1,
        username: "",
        password: "",
        relpassword:"",
        mobile:'',
        verificatio:'', //图形验证码
        code:'',   //短信验证码
        qq:'',
     },  
    rules:{
         username:[{required: true, message: '请输入用户名', trigger: 'blur' }, { min:4, max: 16, message: '长度在 4 到 16 个字符的用户名', trigger: 'blur' }],
         password:[{required: true, message: '请输入密码', trigger: 'blur' },{ min:6, max: 18, message: '请输入 6 到 18 个字符的密码', trigger: 'blur' }],
         relpassword:[{required: true, message: '请输入密码', trigger: 'blur' }
         ,{ min:6, max: 18, message: '请输入 6 到 18 个字符的密码', trigger: 'blur' }
         ,{required: true,validator:checkPwd2, trigger: 'blur' }
         ],
         verificatio:[{required: true, message: '请输入图像验证', trigger: 'blur'}],
         code:[{required: true, message: '请输入短信验证码', trigger: 'blur'}],
        //  verificatio:[{required: true, message: '请输入图像验证', trigger: 'blur'}],
         qq:[{required: true, message: '请输入QQ账号', trigger: 'blur'}],
        mobile:[{required: true, message: '请输入手机号', trigger: 'blur' },{ min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }]
     }
    }
     

  },
  created(){
    // getHomeMultidata().then(res=>{
    //   console.log(res);
    // })
  },
  computed:{
     relpassword_pd(){
       password==relpassword
     }
  },
  methods:{
      submitForm(formName){
          // this.$axios({
          //         method: "post",
          //         url: "apis/api/common/register",
          //         data: {
          //             usertype:2,
          //             username: "hyh",
          //             password: "123456",
          //             mobile:'15487985491',
          //             // code: null,
          //             // qq: null
          //         }
          //     }).then((res)=>{
          //         console.log(res);
          //         console.log("成功");
          //     })
        this.$refs[formName].validate((valid) => {
          if (valid) {

             const data = { 
                      usertype:this.ruleForm.usertype,
                      username: this.ruleForm.username,
                      password: this.ruleForm.password,
                      mobile:this.ruleForm.mobile,
                      code: this.ruleForm.code,
                      qq: this.ruleForm.qq
                  }
                console.log(data)
              post_registered(data).then(res => {
                          if(res.code=1){
                            this.$message({
                                message: '恭喜你，注册成功！',
                                type: 'success',
                                showClose: true,
                              });
                          }
                          console.log(res);
                        })

                } else {
                  console.log('请按要求填写信息！');
                    this.$message.error('错了哦，请按要求注册！');
                  return false;
                }
            });
              
        },
     
  }
};
</script>
<style scoped>
.top {
  background-color: white;
}
.nav {
  margin: 40px 200px;
}
  .bg_title{
        background-color: #ededed;
    }
.register {
  width: 350px;
}
.register .title {
  text-align: center;
  font-size: 20px;
  font-weight: 200;
}
.enter {
  width: 85%;
  height: 45px;
  font-size: 16px;
  background-color: #409eff;
  border-color: white;
  color: white;
}
.el-form-item {
    margin-top: 20px;
}
</style>