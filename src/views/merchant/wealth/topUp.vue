<template>

    <div style="width:1000px;background-color:white;padding-bottom:100px">
       <h3 class="px-3 py-2 border-bottom" style="margin:0px">
        金币充值
         </h3>
        <div class="m-2">
            <el-tabs type="border-card">
                <el-tab-pane label="在线充值">
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-form-item label="账号余额:">
                       <span style="font-size:18px;font-weight:bold">{{user.momey}}金币</span> 
                         </el-form-item>
                        <el-form-item label="支付方式:">
                            {{user.payment}}
                         </el-form-item>
                         <el-form-item label="收款人:">
                            {{user.username}}
                         </el-form-item>
                        <el-form-item label="收款账号">
                            {{user.payname}}
                         </el-form-item>
                         <el-form-item label="支付方式:">
                            <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :step="10"></el-input-number>
                         </el-form-item>
                         <el-form-item>
                            <el-button   class="el-button  py-1 px-2" type="success">立即充值</el-button>
                   
                        </el-form-item>
                     </el-form>  
                </el-tab-pane>
                <el-tab-pane label="线下汇款">
                      <el-form ref="form" :model="form" label-width="100px">
                        <el-form-item label="收款机构:">
                            工商银行
                         </el-form-item>
                        <el-form-item label="收款人:">
                            {{user.payment}}
                         </el-form-item>
                         <el-form-item label="收款账号:">
                            123143245213123
                         </el-form-item>
                        <el-form-item label="充值金额">
                            <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :step="10"></el-input-number>
                         </el-form-item>
                         <el-form-item label="转账说明:">
                           5分钟未到帐请联系客服
                         </el-form-item>
                           <el-form-item label="转账截图:">
                               <el-upload
                                    class="avatar-uploader "
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class=" el-icon-camera-solid "></i>
                                </el-upload>
                          </el-form-item>
                         <el-form-item>
                            <el-button   class="el-button  py-1 px-2" type="success">立即充值</el-button>
                   
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
                
            },
            user:{
                momey:888.23,
                payment:'支付宝',
                username:'啊啊啊',
                payname:'123144523'
            },
            num:100,
            imageUrl: ''
        }
    },
    methods:{
        handleChange(value){
            console.log(value)
        },
        //图片上传
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }

    }
}
</script>
<style scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .el-icon-camera-solid {
    font-size: 28px;
    color: #babec3;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border:2px dotted #babec3;
    border-radius: 10px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 10px;
  }
</style>