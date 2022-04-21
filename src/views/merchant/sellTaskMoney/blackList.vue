<template>
    <div class="" style="width:1000px;background-color:white;padding-bottom:100px">
           <h2 class="px-2 pt-2 pb-2 m-0 border-bottom">黑名单管理 <el-button size="small" type="primary" style="float:right" ><i class="el-icon-plus"></i> 批量添加</el-button> </h2>
            <div class="mx-2 mt-2 border ">
                  <el-table  class=""  ref="multipleTable"   :data="tableData"  tooltip-effect="dark" style="width: 100%;"   >
                    <el-table-column label="拉黑时间"  sortable ></el-table-column>
                    <el-table-column   prop="name" label="拉黑买号" > </el-table-column>
                    <el-table-column  prop="address"  label="备注"  >  </el-table-column>
                    <el-table-column  prop="address"  label="操作" ></el-table-column>
                </el-table>
            </div>
    </div>
</template>
<script>
import{blacklist}from'@/network/merchant/sellTaskMoney/blackList'

export default {
    data(){
        return{
                tableData:{}
        }
    },
    created(){
        blacklist().then(res=>{
            console.log(res)
        })
    }
}
</script>
<style scoped>

</style>