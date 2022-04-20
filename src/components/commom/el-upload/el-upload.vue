<template>
    <div class="el-upload">
            <el-upload :class="{hideShow:hideUpload}" 
                        action="/apis/api/common/upload"  
                        list-type="picture-card" :limit="limit_count" 
                        :headers="token"
                        :on-change="handleChange"
                        :on-success="handlesuccess"
                        :on-remove="handleRemove"
                        :on-preview="handlePreview">
                    <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
    </div>
    
    
</template>
<script>
export default {
    data(){
        return{
           hideUpload:false,
            dialogImageUrl: '',
            dialogVisible: false,
            imgUrl:''
        }
    },
    props:{
        limit_count:{
            type:Number,
            default:1
        },
        index:{
            type:Number,
            default:0
        }
    },
    computed:{
        token(){
            return { 'token':localStorage.getItem('token')}

        }
    },
    methods:{
        handlesuccess(res, file) {  //图片上传成功
        this.imgUrl = URL.createObjectURL(file.raw);
        console.log( this.imgUrl);
        this.$emit('change',this.imgUrl,this.index);
        },
        handleChange(file, fileList) {
            this.hideUpload =fileList.length >= this.limit_count
            },
        handleRemove(file, fileList) {
            this.hideUpload=false
        console.log(file, fileList);
      },
        handlePreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
      }
    }
}
</script>
<style >
   .hideShow  .el-upload--picture-card {
        display: none;
    } 
  .el-upload .el-upload--picture-card{
        width:100px;
        height: 100px;
        line-height:100px;
        margin-bottom: 10px;
    }
   .el-upload .el-upload-list--picture-card .el-upload-list__item{
        width: 100px;
        height: 100px;
    }
</style>