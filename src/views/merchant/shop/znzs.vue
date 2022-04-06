<template>
    <div style="width:1000px;background-color:white;padding-bottom:100px">
    <h3 class="px-2  py-2 border-bottom m-0">淘宝智能助手</h3>
    <div class="m-2 border position-relative">
        <h5 class="px-2 pb-1 border-bottom ">一、开通智能助手流程: </h5>
        <div class="flex m-2">
            <div class="flex-1 text-center"  style=" z-index: 999;">
                <img src="@/assets/images/znzs/person.png" style="width:50px;height:50px;position:relative;"  alt="" srcset="">
                <div class="list_1">点击订购</div>
                <span class="text-muted " style="font-size:12px;position:absolute;bottom:60px;left:160px">【用店铺账号登录购买服务】</span>
            </div>
            <div class="flex-1 text-center" style=" z-index: 999;" >
                <img src="@/assets/images/znzs/dianji.png" style="width:50px;height:50px;" alt="" srcset="">
                <div class="list_1">点击授权</div>
                <span class="text-muted " style="font-size:12px;position:absolute;bottom:60px;left:40%">【登录购买服务的淘宝账号授权】</span>
            </div>
            <div class="flex-1 text-center" style=" z-index: 999;" >
                <img src="@/assets/images/znzs/dagou.png" style="width:50px;height:50px;" alt="" srcset="">
                <div class="list_1">开通成功</div> 
                <span class="text-muted " style="font-size:12px;position:absolute;bottom:60px;left:68%">【对智能助手插旗备注】</span>
            </div>
            <div class="flex-1 text-center" style=" z-index: 999;" >
                <img src="@/assets/images/znzs/beizhu.png" style="width:50px;height:50px;" alt="" srcset="">
                <div class="list_1">插旗备注</div>
            </div>     
        </div>
        <div class="m-2 biankuang"  style="" >
        </div>
        </div>
        <div class="m-2 border position-relative font-weight-light">
             <h5 class="px-2 pb-1 border-bottom ">二、已绑定店铺信息 <span class=" text-danger">（为保证能正常发布任务，当智能助手有效期≤3天时，请及时联系客服进行续费）</span> </h5>
            <el-table :data="tableData" border  class="">
                <el-table-column prop="pingtai" label="平台" width="180"></el-table-column>
                <el-table-column  prop="dianpu" label="店铺名称" width="180"></el-table-column>
                <el-table-column prop="" label="状态"></el-table-column>
                <el-table-column prop="" label="智能助手有效期"></el-table-column>
                <el-table-column prop="" label="淘宝服务接口有效期"></el-table-column>
                <el-table-column prop="" label="操作">

                </el-table-column>
                </el-table>
        </div>
         <div class="m-2 border position-relative font-weight-light">
             <h5 class="px-2 pb-1 border-bottom ">三、插旗失败订单</h5>
            <el-table :data="tableData" border  class="">
                <el-table-column prop="pingtai" label="编号任务" width="180"></el-table-column>
                <el-table-column  prop="dianpu" label="店铺名称" width="180"></el-table-column>
                <el-table-column prop="" label="买号名称"></el-table-column>
                <el-table-column prop="" label="订单编号"></el-table-column>
                <el-table-column prop="" label="下单支付时间"></el-table-column>
                <el-table-column prop="" label="操作">
                </el-table-column>
                </el-table>
        </div>
    </div>
    
</template>
<script>
export default {
     data() {
      return {
        tableData:[]
      }
      }
}
</script>
<style scoped>
    .list_1{
        font-size: 13px;
       color: #1e9fff;
    }
    .biankuang{
        width:70%;
        height:2px;
        background-color:#1e9fff;
        position:absolute ;

        /* top:50px; */
        left:120px;
        bottom:30px
    }
    .table_1{
        width: 100%;
    }
</style>