<template>
   <div style="width:1000px;background-color:white;padding-bottom:100px">
      <h2 class="px-2 pt-2 pb-2 m-0 mb-4 border-bottom" >绑定{{Shop}}店铺</h2>
      <el-form ref="form" :model="formData" label-width="150px" :rules="rules" class="ml-5">
         <el-form-item :label="Shop +'店铺名:'" prop="ShopName">
            <el-input v-model="formData.ShopName" style="width:250px"></el-input>
         </el-form-item>
          <el-form-item label="掌柜名:" prop="name">
            <el-input v-model="formData.name" style="width:250px"></el-input>
         </el-form-item>
          <el-form-item label="店铺地址:" prop="ShopAddress">
            <el-input v-model="formData.ShopAddress" style="width:250px"></el-input>
         </el-form-item>
          <el-form-item label="复购天数:"  prop="">
            <el-input-number  v-model="formData.day"  style="width:250px" :min="0" :max="999" :step="1"></el-input-number>
            <span>提示：限制同一买号再次接单的任务时间间隔</span>
         </el-form-item>
         <el-form-item label="发货人:" prop="shipper">
            <el-input v-model="formData.shipper" style="width:250px"></el-input>
         </el-form-item>
         <el-form-item label="发货人手机号:" prop="phone">
            <el-input v-model="formData.phone" style="width:250px"></el-input>
         </el-form-item>
         <el-form-item label="发货省/市/区:" prop>
            <el-select v-model="formData.city.province"  placeholder="选择省份">
             
            </el-select>
            <el-select v-model="formData.city.city" placeholder="选择市区">
            
            </el-select>
            <el-select  v-model="formData.city.town" placeholder="选择镇/区/县">
 
             </el-select> 
         </el-form-item>
          <el-form-item label="发货详情地址" prop="DetailCity">
            <el-input v-model="formData.DetailCity" style="width:250px"></el-input>
         </el-form-item>
          <el-form-item label="店铺截图:" prop>
            <el-upload
               class="avatar-uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
               <img v-if="formData.imageUrl" :src="formData.imageUrl" class="avatar">
               <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
         </el-form-item>
         <el-form-item  >
           <el-button type="primary" >提交</el-button>
         </el-form-item>
      </el-form>
       <el-card style="margin-top:20px;" class="mx-2">
                <div slot="header" class=" ">
                    <h3 class="my-0">注意事项：</h3>
                </div>
                <div class=" item" style="font-size:13px">
                    <p>1、请核对淘宝/天猫店铺信息后认真填写，如填写的店铺名及掌柜名不是本人所使用，则会影响审核成功率！</p>
                    <p>2、提交审核后平台预计在24小时内完成审核操作，只有审核通过的店铺才能发布任务。</p>
                    <p>3、淘宝/天猫店铺审核通过后无法删除或修改店铺名，掌柜名及截图。</p>
                       <h3 style="color: #ff0000;font-weight: bold;">关于复购天数的设置说明：</h3>
                    <p style="margin-left:10px">复购天数指用户第一次接任务与第二次接任务之间的时间间隔，不同类目的商家，用户的平均回购时间都不同，</p>
                    <p>适当比例的用户回购对店铺和商品权重有很大好处，所以我们开放了商家店铺对用户的间隔时间设置，</p>
                    <p>商家可以根据自己类目和店铺的需要建议在区间内设置：建议间隔设置区间“大于等于15天，小于等于45天”</p>
                    <p>（注意：商家一定要根据自己的类目特点来设置，比如食品类正常回购时间就很短，大家电类就会很长。</p>
                    <p>如果设置了过短且不符合类目特性间隔时间，可能会触发“重复购买”的降权处罚，大家慎重设置！）</p>
                </div>
       </el-card>
   </div>
</template>
<script>
export default {
    data(){
       return{
          Shop:'',
          formData:{
             ShopName:'',
             name:'',
             ShopAddress:'',
             day:0,
             shipper:'',
             phone:'',
             city:{
                province:{},
                city:{},
                town:{}
             },
             DetailCity:'',
             imageUrl:''
          },
          rules:{
             ShopName:[{required: true, message: '请输入店铺名', trigger: 'blur' } ],
             name:[{required: true, message: '请输入掌柜名', trigger: 'blur' } ],
             day:[{required: true, message: '请输入复购天数', trigger: 'blur' } ],
             ShopAddress:[{required: true, message: '请输入店铺地址', trigger: 'blur' } ],
             shipper:[{required: true, message: '请输入发货人', trigger: 'blur' }],
             phone:[{required: true, message: '请输入发货人手机号', trigger: 'blur' } ],
             city:[{required: true, message: '请输入', trigger: 'blur' } ],
             DetailCity:[{required: true, message: '请输入详情地址', trigger: 'blur' }],
             
          }
       }
    },
    created(){
       this.shopname()
    },
     methods: {
      shopname(){
        this.Shop= this.$route.query.shop

      },

      handleAvatarSuccess(res, file) {
        this.formData.imageUrl = URL.createObjectURL(file.raw);
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
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
     border:2px dotted rgb(204, 204, 204);
     border-radius: 10px;
  }
  .avatar {
    width: 100px;
    height:100px;
    display: block;
   border-radius: 10px;
  }
</style>