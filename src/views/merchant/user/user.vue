<template>
    <div style="width:1000px;background-color:white;padding-bottom:100px">
        <h3 class="px-3 py-2 border-bottom" style="margin:0px">
         基本信息 <span  style="font-size:10px;font-weight:500;color:#2e2e2e" >请如实填写信息，以免影响审核通过率！</span> 
        </h3>
        <div class=" flex justify-center align-center mt-3">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item class=" text-center" >
                    <el-upload
                         class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                   </el-upload>
                </el-form-item>
                <el-form-item label="用户名:">
                    <el-input v-model="form.text"></el-input>
                </el-form-item>
                <el-form-item label="常用QQ号:">
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item label="邮箱Email:">
                    <el-input ></el-input>
                </el-form-item>
                 <el-form-item class=" text-center" >
                    <el-button type="danger">保存信息</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        imageUrl: '',
        form:{
            text:''
        }
      };
    },
    methods: {
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
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 2px dotted darkgray;
    border-radius: 50%;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50%;
  }
</style>