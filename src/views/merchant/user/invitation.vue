<template>
     <div style="width:1000px;background-color:white;padding-bottom:100px">
        <h3 class="px-3 py-2 border-bottom" style="margin:0px">
        推广赚钱
         </h3>
        <div class="mt-2 mx-2 ">
            <img src="@/assets/images/wealth/tg.jpg" alt=""  srcset="" style="width:100%;height:;">
            <div  class="flex justify-between align-center pr-2" style="font-size:15px;background-color:#cee6ff;font-size:13px">
                <div class="text-center flex-1 py-2" >推广人数 <span style="color:red;padding-left:10px">775</span></div>
                <div class="text-center flex-1 py-2">奖励金币 <span style="color:red;padding-left:10px">3548218</span></div>
                <div class="text-center flex-1 py-2">今日还可以推广 <span style="color:redpadding-left:10px">500万人注册</span></div>
                <div>
                    <el-button type="danger" plain class="px-2"  >我要推广</el-button>
                </div>
            </div>
        </div>
        <div class="border mx-2 mt-2">
            <h4 class="px-3 py-1 border-bottom" style="margin:0px">推广奖励</h4>
            <div class="flex  px-3 pb-2">
                <div class="flex-1">
                    <h4>直推好友奖励</h4>
                    <span>* 推广商家完成任务，奖励佣金的 <span>5%</span> </span>
                </div>
                <div class="flex-1">
                    <h4>下级推广奖励</h4>
                    <span>* 推广的好友再推广商家任务完成，奖励佣金的<span>3%</span> </span>
                </div>
            </div>
        </div>
         <div class="border mx-2 mt-2">
            <h4 class="px-3 py-1 border-bottom" style="margin:0px">推广说明</h4>
            <div class="flex  px-3 pb-2">
                  <p>推广活动说明</p> 
            </div>
        </div>
        <div class="mx-2 mt-2 border px-2 pb-1">
              <el-table :data="tableData.slice((paging.currentPage-1)*paging.pageSize,paging.currentPage*paging.pageSize)"   stripe style="width: 100%">
                <el-table-column prop="username" label="推广用户"></el-table-column>
                <el-table-column  prop="date" label="推广日期"  sortable></el-table-column>
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
            tableData:[{
                username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            },{
                 username:'sadasdw',
                date:'2020.11.06 13:54'
            }],

            paging:{
                currentPage: 1, // 当前页码
                total: 1, // 总条数
                pageSize: 10 ,// 每页的数据条数
            },
             
        }
    },
    methods:{
                handleSizeChange(val) {
                    this.paging.currentPage = 1;
                    this.paging.pageSize = val;

                },
                handleCurrentChange(val) {
                    this.paging.currentPage = val;
 
                },
    },
    components:{
        paging
    }
}
</script>
<style scoped>

</style>