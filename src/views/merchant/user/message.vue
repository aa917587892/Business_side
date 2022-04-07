<template>
    <div style="width:1000px;background-color:white;padding-bottom:100px">
        <h3 class="px-3 py-2 border-bottom" style="margin:0px">
        推广赚钱
         </h3>
         <div class="pt-2 pl-2">
             <el-button type="success" round style="height:36px;width:120px;line-height:0;padding:10px 15px" ><i class="el-icon-check" ></i> 标记已读</el-button>
         </div>
         <div class="mx-2 mt-2 border">
             <el-table ref="multipleTable" :data="tableData.slice((paging.currentPage-1)*paging.pageSize,paging.currentPage*paging.pageSize)" tooltip-effect="dark" style="width: 100%"> 
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="date" label="日期" width="120" sortable></el-table-column>
            <el-table-column  prop="messageType"  label="资金变动通知" width="200"> </el-table-column>
            <el-table-column prop="message"  label="内容"  show-overflow-tooltip > </el-table-column>
             <el-table-column prop="state"  label="状态"  width="120"  show-overflow-tooltip> 
                 <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.state === '未读' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.state}}</el-tag>
                </template>
             </el-table-column>
        </el-table>
         
         </div>
         <paging :paging="paging" :tableData="tableData.length" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"  ></paging>
    </div>    
</template>
<script>
import paging from '@/components/commom/paging.vue'
export default {
    data(){
      return{
          tableData:[
              {
                  date:'2022.11.22',
                  messageType:'资金变动通知',
                  message:'您已成功充值3000元',
                  state:'未读'
              },{
                  date:'2022.11.05',
                  messageType:'资金变动通知',
                  message:'您已成功充值3000元',
                  state:'已读'
              },{
                  date:'2022.11.05',
                  messageType:'资金变动通知',
                  message:'您已成功充值3000元',
                  state:'已读'
              },{
                  date:'2022.11.05',
                  messageType:'资金变动通知',
                  message:'您已成功充值3000元',
                  state:'已读'
              },{
                  date:'2022.11.05',
                  messageType:'资金变动通知',
                  message:'您已成功充值3000元',
                  state:'已读'
              },{
                  date:'2022.11.05',
                  messageType:'资金变动通知',
                  message:'您已成功充值3000元',
                  state:'已读'
              },
          ],
          paging:{
                currentPage: 1, // 当前页码
                total: 1, // 总条数
                pageSize: 10 ,// 每页的数据条数
            },
      }  
    },
    components:{
        paging
    },
     methods: {
         handleSizeChange(val){
             this.paging.currentPage = 1;
            this.paging.pageSize = val;
         },
         handleCurrentChange(val) {
            this.paging.currentPage = val;
            },

    }
}
</script>
<style scoped>

</style>