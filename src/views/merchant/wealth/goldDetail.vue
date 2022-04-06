<template>
    <div style="width:1000px;background-color:white;padding-bottom:100px">
        <h3 class="px-3 py-2 border-bottom" style="margin:0px">
        资金明细
         </h3>
        <div class="mx-2 mt-2 list_" >
            <div class="flex align-center text-center list_top">
                <div class="flex-1">金币余额: <span>891.13</span>  <router-link to="topUp"> <el-button size="small" style="background-color:rgb(226, 86, 86);color:white;border:0px" >充值</el-button></router-link></div>
                <div class="flex-1">7天累计充值:<span>10.00</span></div>
                <div class="flex-1">30天累计充值:<span>58.00</span></div>
                <div class="flex-1">共计充值:<span>10556.92</span></div>
            </div>
            <div>
            <el-form ref="form" :model="form" label-width="80px" class=" flex flex-wrap mt-2">
                <el-form-item label="交易类型:">
                     <el-select v-model="shaixuan" size="small"  placeholder="请选择交易类型" style="width:100px" >
                         <el-option label="全部" value="all"></el-option>
                         <el-option label="支出" value="czz"></el-option>
                         <el-option  label="收入" value="czcg"></el-option>
                     </el-select>    
                </el-form-item>
                  <el-form-item label="备注查询:">
                     <el-input placeholder="备注模糊查询" size="small"></el-input>
                 </el-form-item>
                  <el-form-item label="日期:">
                     <el-date-picker
                        v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        size="small">
                    </el-date-picker>
                 </el-form-item>

                   <el-button size="mini" style="background-color:rgb(226, 86, 86);color:white;border:0px;height:30px;margin-left:5px;margin-top:5px"><i class="el-icon-search"></i> 搜索</el-button>
            
            </el-form>
            </div>
            <div></div>
        </div>
        <div class="m-2">
            <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"   stripe style="width: 100%">
                <el-table-column
                prop="data"
                label="日期"
                width="180" sortable>
                </el-table-column>
                <el-table-column
                prop="goldtopup"
                label="金币"
                width="80">
                </el-table-column>
                <el-table-column
                prop="money"
                label="余额"
                 width="100">
                </el-table-column>
                <el-table-column
                prop="paytype"
                label="类型"
                 width="100">
                </el-table-column>
                <el-table-column
                prop="deatil"
                label="备注"
               >
                </el-table-column>
            </el-table>

             <div class="block" style="margin-top:15px;">
                <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
                :current-page="currentPage" 
                :page-sizes="[4,5,10,20]"  
                :page-size="pageSize" 
                layout="total, sizes, prev, pager, next, jumper" 
                :total="tableData.length">
                </el-pagination>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            shaixuan:'全部',
            value1:'2022.06.01',
            form:{},
            tableData: [{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            },{
                data:' 2022-04-06 17:20:18',
                goldtopup:0.16,
                money:'897.41',
                paytype:'推广奖励',
                deatil:'推广的用户（编号：15366）发布的任务订单完成，订单编号：3492973，您获得推荐奖励'
            }],

            currentPage: 1, // 当前页码
            total: 1, // 总条数
            pageSize: 10 ,// 每页的数据条数
        }
    },
    methods:{
           //每页条数改变时触发 选择一页显示多少行
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                    this.currentPage = 1;
                    this.pageSize = val;
                },
                //当前页改变时触发 跳转其他页
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                    this.currentPage = val;
                },
    }
}
</script>
<style scoped>
.list_top{
    font-size: 15px;
    padding:8px 20px;
    background-color: #f5f5f5
}
.list_top span{color: rgb(226, 86, 86); padding-left: 10px;}
.list_ .el-form-item{margin-bottom: 0px;}
</style>