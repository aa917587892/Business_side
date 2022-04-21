<template>
    <div class="" style="width:1000px;background-color:white;padding-bottom:100px">
           <h2 class="px-2 pt-2 pb-2 m-0 border-bottom">模板任务</h2>
            <div class="px-2 py-1 mx-2 mt-2 border" >
                <label for="">模板名称：</label>
                <el-input placeholder="请输入模板名称" size="small" style="width:200px" ></el-input>
                <el-button type="primary" size="small" >搜索</el-button>
            </div>
            <div class="mx-2 mt-2 border ">
                  <el-table  class=""  ref="multipleTable"   :data="tableData"  tooltip-effect="dark" style="width: 100%;"   >
                    <el-table-column label="创建时间"  sortable ></el-table-column>
                    <el-table-column   prop="name" label="模板名称" > </el-table-column>
                    <el-table-column  prop="address"  label="平台"  >  </el-table-column>
                    <el-table-column  prop="address"  label="操作" ></el-table-column>
                </el-table>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>