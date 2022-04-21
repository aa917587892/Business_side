<template>
      <div class="" style="width:1000px;background-color:white;padding-bottom:100px">
           <h2 class="px-2 pt-2 pb-2 m-0 border-bottom">返款管理</h2>
           <div class="el-card__body border mx-2 mt-2">
               <p style="color: red;">关于自己返款的平台规定：</p> 
               <p>1、必须在当天前完成前一天的所有返款，否则无法发布新活动；</p> 
               <p>2、对于超时未返款的订单，买家有权申请退款；</p> 
               <p>3、对于多次超时的卖家，平台有权终止合作。</p> 
               <p>4、转账操作流程：导出转账信息—进行转账操作—返回平台 标记返款成功订单。 </p>
            </div>
            <div class="mx-2 m-1 p-1 border">
                 <el-select class="mt-1"  size="small" v-model="search.platform" style="width:150px">        
                </el-select>
                <el-select class="mt-1"  size="small" v-model="search.shop"  style="width:150px">                  
                </el-select>
                <el-select class="mt-1" size="small" v-model="search.state" style="width:150px">              
                </el-select>
                <el-input class="mt-1" placeholder="请输入订单号" size="small" style="width:150px" v-model="search.oder"></el-input>
                <el-input class="mt-1" placeholder="请输入买号" size="small" style="width:150px" v-model="search.maihao"></el-input>
                <el-input class="mt-1" placeholder="请输入商品标题" size="small" style="width:150px" v-model="search.goods_title"></el-input>
                <el-row class="mt-1">
                    <el-date-picker
                        v-model="search.date"
                        type="daterange"
                        size="small"
                        range-separator="至"
                        start-placeholder="领取开始日期"
                        end-placeholder="领取结束日期">
                    </el-date-picker>
                    <el-button type="primary" size="small" class="ml-1"><i class=""></i> 搜索</el-button>
                    <el-button type="success" size="small">导出结果</el-button>
                </el-row>  
            </div>
            <div class="mx-2 border">
                <el-table  class=" "  ref="multipleTable"   :data="tableData"  tooltip-effect="dark" style="width: 100%"   @selection-change="handleSelectionChange">
                    <el-table-column type="selection"> </el-table-column>
                    <el-table-column label="活动信息" ></el-table-column>
                    <el-table-column   prop="name" label="付款信息" > </el-table-column>
                    <el-table-column  prop="address"  label="收款信息"  show-overflow-tooltip>  </el-table-column>
                    <el-table-column  prop="address"  label="操作" >  </el-table-column>
                </el-table>
            </div>
             
      </div>  
</template>
<script>
export default {
    data(){
        return{
            search:{}
        }
    }
}
</script>
<style scoped>
.el-card__body p{
    margin: 8px 0px;
}
</style>