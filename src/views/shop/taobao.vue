<template>
    <div id="app">  
         <div>
        <h3 class="px-2 py-1 border-bottom" >我的淘宝/天猫店铺</h3>
        <button>绑定淘宝/天猫店铺</button>
        <div class="m-2  p-2 border">
            <div class=" mt-2">
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">                    
                    <el-table-column prop="date" label="已绑定店铺名" sortable width="180"></el-table-column>
                    <el-table-column prop="name" label="掌柜" sortable width="100"></el-table-column>
                    <el-table-column prop="address" label="复购天数" width="100"></el-table-column>
                    <el-table-column prop="address" label="发货省/市/区" width="100" :formatter="formatter"></el-table-column>
                    <el-table-column prop="address" label="发货详细地址" width="100" :formatter="formatter"></el-table-column>
                    <el-table-column prop="address" label="绑定日期" width="100"></el-table-column>
                    <el-table-column prop="address" label="审核状态" width="100">                        
                    </el-table-column>
                    </el-table>
            </div>
        </div>
    </div>


    </div>
   
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
       
         }
      }
      ,
    components:{
    }
  }
</script>
<style scoped>
.el-table thead{
  color: #6794ef;
}
</style>