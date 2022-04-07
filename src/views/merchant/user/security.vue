<template>
    <div style="width:1000px;background-color:white;padding-bottom:100px">
        <h3 class="px-3 py-2 border-bottom" style="margin:0px">
        金币充值
         </h3>
        <div class="m-2">
            <el-tabs type="border-card">
                <el-tab-pane label="解绑手机号">
                    <el-form ref="form" :model="form" label-width="200px">
                          <el-form-item label="手机号:">
                                <el-input v-model="form.text" style="width:200px;"></el-input>
                          </el-form-item>
                          <el-form-item label="图形验证码:" >
                              <div class="flex">
                                <el-input v-model="form.text" placeholder="请输入图形验证码" style="width:200px;padding-right:20px"></el-input>
                                <div class="tuxing"></div>
                              </div>
                                
                          </el-form-item>
                          <el-form-item label="短信验证码:">
                              <div class="flex">
                                  <el-input v-model="form.text" style="width:200px;" placeholder="请输入短信验证码"></el-input>
                                  <el-button   class="el-button  py-1 px-1 ml-2" type="success"><i class="el-icon-mobile-phone"></i> 获取验证码</el-button>
                              </div>
                                
                          </el-form-item>
                          <el-form-item label="登录密码:">
                                <el-input v-model="form.text" style="width:200px;" placeholder="请输入登录验证码"></el-input>
                          </el-form-item>
                           <el-form-item>
                                <el-button  class="el-button  py-1 px-2" type="success">解绑手机</el-button>
                                <el-button  class="el-button  py-1 px-2" >重置</el-button>
                          </el-form-item>
                   
                    </el-form>  
                </el-tab-pane>
                <el-tab-pane label="修改登录密码">
                      <el-form ref="form" :model="form" label-width="200px">
                          <el-form-item label="原登录密码:">
                                <el-input v-model="form.text" style="width:200px;" placeholder="请输入原登录密码" ></el-input>
                          </el-form-item>
                           <el-form-item label="新登录密码:">
                               <div class="flex">
                                  <el-input v-model="form.text" style="width:200px;" placeholder="请输入短信验证码"></el-input>
                                  <el-button   class="el-button  py-1 px-1 ml-2" type="success"><i class="el-icon-mobile-phone"></i> 获取验证码</el-button>
                              </div>                    
                          </el-form-item>
                           <el-form-item label="确认新密码:">
                                <el-input v-model="form.text" style="width:200px;" placeholder="再次输入新密码" ></el-input>
                          </el-form-item>
                         <el-form-item>
                                <el-button   class="el-button  py-1 px-2" type="success">修改密码</el-button>
                                <el-button   class="el-button  py-1 px-2" >重置</el-button>
                        </el-form-item>
                     </el-form>  
                </el-tab-pane>
                 <el-tab-pane label="设置安全密码">                    
                           <el-form ref="form" :model="form" label-width="200px">
                          <el-form-item label="手机号:">
                            <el-input v-model="form.text" style="width:200px;" placeholder="" ></el-input>
                          </el-form-item>
                           <el-form-item label="图形验证码:">
                             <div class="flex">
                                <el-input v-model="form.text" placeholder="请输入图形验证码" style="width:200px;padding-right:20px"></el-input>
                                <div class="tuxing"></div>
                              </div>
                          </el-form-item>
                           <el-form-item label="短信验证码:">
                               <div class="flex">
                                  <el-input v-model="form.text" style="width:200px;" placeholder="请输入短信验证码"></el-input>
                                  <el-button   class="el-button  py-1 px-1 ml-2" type="success"><i class="el-icon-mobile-phone"></i> 获取验证码</el-button>
                              </div>
                          </el-form-item>
                          <el-form-item label="安全密码:">
                                <el-input v-model="form.text" style="width:200px;" placeholder="请输入安全密码" ></el-input>
                          </el-form-item>
                          <el-form-item label="确认密码:">
                                <el-input v-model="form.text" style="width:200px;" placeholder="请再次输入安全密码" ></el-input>
                          </el-form-item>
                         <el-form-item>
                                <el-button   class="el-button  py-1 px-2" type="success">设置</el-button>
                                <el-button   class="el-button  py-1 px-2" >重置</el-button>
                        </el-form-item>                     
                     </el-form>  
                </el-tab-pane>
            </el-tabs> 
        </div>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                text:''
            }
        }
    },

}
</script>
<style scoped>
    .tuxing{
      width:100px;
      height:40px;
      background-color:#c9e7ff;
      /* position: absolute; */

    }
</style>