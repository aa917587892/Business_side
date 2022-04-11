<template>
    <div id="app" style="width:1000px;background-color:white;padding-bottom:100px">  
         <div>
        <h3 class="px-2 pt-2 pb-2 border-bottom m-0" >我的抖音小店店铺
       <router-link :to="{ path: 'bindingShop', query: { shop: '抖音小店'}}"><el-button class="" style="float:right;" type="primary" ><i class="el-icon-plus"></i> 绑定抖音小店店铺</el-button></router-link> </h3>
       
        <div class="m-2  p-2 border">
            <div class=" mt-2">
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">                    
                    <el-table-column prop="shopname" label="已绑定店铺名" sortable width="130"></el-table-column>
                    <el-table-column prop="username" label="店铺账号" sortable  ></el-table-column>
                    <el-table-column prop="number_data" label="复购天数" width="100"></el-table-column>
                    <el-table-column prop="address" label="发货省/市/区"  ></el-table-column>
                    <el-table-column prop="details" label="发货详细地址"  ></el-table-column>
                    <el-table-column prop="data" label="绑定日期" width="100"></el-table-column>
                    <el-table-column prop="state" label="审核状态" width="100">
                    <template slot-scope="scope" >
                        <el-button
                            size="mini"
                            type="success"
                            plain
                            @click="handleEdit(scope.$index, scope.row)">正常</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                             style="margin-left:0px;margin-top:3px"
                            @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
                    </template>
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
          tableData: [{
            shopname: '小时的',
            username: '1554833748',
            number_data: '12',
            address:'东莞市莞城地区',
            details:'xxxx小区',
            data:'2022.1.12',
            state:'正常'
                }, 
            {
             shopname: '发的说',
            username: '1554833748',
            number_data: '12',
            address:'东莞市莞城地区',
            details:'xxxx小区',
            data:'2022.1.12',
            state:'正常'
            }, {
             shopname: '多发点',
            username: '1554833748',
            number_data: '12',
            address:'东莞市莞城地区',
            details:'xxxx小区',
            data:'2022.1.12',
            state:'正常'
                }, {
              shopname: '程序等',
            username: '1554833748',
            number_data: '12',
            address:'东莞市莞城地区',
            details:'xxxx小区',
            data:'2022.1.12',
            state:'异常'
                }] 

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