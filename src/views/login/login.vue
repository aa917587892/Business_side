<template>
        <div class=" bg-white" style="height: 100vh;">
            <div class="top"  style="width:100%;height:100px">
                <img src="@/assets/images/logo.png" style="width:180px;height:55px;top:10px;left:20%" class=" position-absolute"   alt="" srcset="">
            </div>
            <div class="flex justify-center  nav">
                <div class=" left  m-auto">
                    <img src="@/assets/images/login/login.png" alt="" srcset="">
                </div>
                <div class=" right  m-auto">
                    <div class="login border rounded pb-3 ">
                        <div class="title py-1 bg_title" >用户登录</div>
                        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="mx-2 mt-2">
                            <el-form-item prop="username">
                                 <el-input v-model="ruleForm.username" placeholder="请输入账号"><i slot="prefix" class="el-input__icon el-icon-user  font-sm"></i></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                 <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password><i slot="prefix" class="el-input__icon el-icon-unlock font-sm"></i></el-input>
                            </el-form-item>
                        </el-form>

                        <div class="mx-2">
                            <p style="font-size:14px;"><router-link to="" class=" text-light-black">忘记密码</router-link> </p>
                        </div>
                        <div class=" text-center ">
                             <el-button class="enter"  >立即登录</el-button>
                        </div>
                        <div>
                            <p style="font-size:14px;text-align:center" class="text-light-black"> 没有账号?<router-link to="/registered" style="color:#3da3eb" class="text-light-black"> 注册</router-link> </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            ruleForm:{
                username:'',
                password:''
            },
            rules:{
                username:[{required: true, message: '请输入用户名', trigger: 'blur' }, { min: 3, max: 16, message: '长度在 4 到 16 个字符的用户名', trigger: 'blur' }],
                password:[{required: true, message: '请输入密码', trigger: 'blur' },{ min: 6, max: 18, message: '请输入 6 到 18 个字符的密码', trigger: 'blur' }],
                phone:[{type: 'phone',required: true, message: '请输入密码', trigger: 'blur' }]
                }
           
        }
    }
}
</script>
<style scoped>
    .top{
        background-color: white;
    }
    .nav{
        margin: 40px 200px ;
    }
    .bg_title{
        background-color: #ededed;
    }
    .login{
        width:350px;

    }
     .login .title{
         text-align:center;
         font-size: 20px;
         font-weight:200;
     }
    .enter{
        width: 85%;
        height: 45px;
        font-size: 16px;
        background-color: #409EFF;
        border-color:white ;
        color: white;
    }
</style>