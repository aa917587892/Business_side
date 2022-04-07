<template>
<div>
        <div class="block " style="margin-top:15px;">
                <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
                :current-page="paging.currentPage" 
                :page-sizes="[4,5,10,20]"  
                :page-size="paging.pageSize" 
                layout="total, sizes, prev, pager, next, jumper" 
                :total="tableData">
                </el-pagination>
           
        </div>
</div>
      

</template>
<script>
export default {
    data(){
        return{}
    },props:{
       tableData:{
           type:Number
       },
        paging:{
            type:Object,
            default:{}
        }
    }
    ,methods:{
    //每页条数改变时触发 选择一页显示多少行
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            // this.paging.currentPage = 1;
            // this.pageSize = val;
            this.$emit('handleSizeChange',val)
        },
        //当前页改变时触发 跳转其他页
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            // this.currentPage = val;
           this.$emit('handleCurrentChange',val)
        },
    }
}
</script>
<style scoped>

</style>