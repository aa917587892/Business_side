<template>
    <div class="" style="width:1000px;background-color:white;padding-bottom:100px">
           <h2 class="px-2 pt-2 pb-2 m-0 border-bottom">售后服务</h2>
          <div class="mx-2 my-1 p-2 border">
          <div style="margin-top: 20px;padding-right:20px "  >
                <el-radio-group v-model="platform" size="small">
                    <el-radio-button label="1" border class=" ">全部</el-radio-button>
                    <el-radio-button label="2" border class=" ">我的投诉</el-radio-button>
                    <el-radio-button label="3" border class=" ">投诉我的</el-radio-button>
                </el-radio-group>
          </div>
          <div class="mt-1">
            <el-select   placeholder="请选择状态" size="small" v-model="steta" @change="state_change">
                <el-option label="全部状态" value="1" ></el-option>
                <el-option label="待处理"  value="2" ></el-option>
                <el-option label="继续任务" value="3"   ></el-option>
                <el-option label="结束任务" value="4" ></el-option>
            </el-select>
            <el-input placeholder="请输入订单ID" size="small" v-model="oder_id" style="width:150px" ></el-input>
            <el-date-picker size="small"   v-model="date_time" type="daterange"  range-separator="至" start-placeholder="开始日期"  end-placeholder="结束日期"> </el-date-picker>
            <el-button type="primary" size="small">搜索</el-button>
          </div>
          </div>
          <div class="mx-2 border">
                <el-table  class=" "  ref="multipleTable"   :data="tableData"  tooltip-effect="dark" style="width: 100%"   >
                    <el-table-column label="投诉时间"  sortable ></el-table-column>
                    <el-table-column   prop="name" label="订单" > </el-table-column>
                    <el-table-column  prop="address"  label="投诉用户"  >  </el-table-column>
                    <el-table-column  prop="address"  label="被投诉用户" ></el-table-column>
                    <el-table-column  prop="address"  label="投诉内容"  show-overflow-tooltip>  </el-table-column>
                    <el-table-column  prop="address"  label="投诉状态" ></el-table-column>
                </el-table>
            
          </div>
 </div>    
</template>
<script>
export default {
        data(){
            return{
                platform:1,
                steta:'',
                steta_id:'',
                oder_id:'',  //订单ID
                date_time:'',
                tableData:''
                    }
        },
        methods:{
            state_change(id){
                this.steta_id=id
            }
        }
}
</script>
<style scoped>

</style>