<template>
    <div style="width:1000px;background-color:white;padding-bottom:100px">
      <h2 class="px-2 pt-2 pb-2 m-0 border-bottom">活动管理</h2>
      <div  class="mx-2 px-2 pb-2 mt-2 border" >
         <div style="margin-top: 20px;padding-right:20px "  >
           <label class="label" for="">平台类型:</label>
            <el-radio-group v-model="radio" size="small">
              <el-radio label="1" border class="mr-1 ">全部</el-radio>
              <el-radio label="2" border class="mr-1 ">淘宝/天猫</el-radio>
              <el-radio label="3" border class="mr-1 ">京东</el-radio>
              <el-radio label="4" border class="mr-1 ">拼多多</el-radio>
              <el-radio label="5" border class="mr-1 ">抖音小店</el-radio>
            </el-radio-group>
          </div>
          <div class="mt-1">
            <label class="label" for="">平台状态:</label>
                <el-radio-group v-model="radio2"  size="small">
                  <el-radio-button label="1">全部活动</el-radio-button>
                  <el-radio-button label="2">待审核</el-radio-button>
                  <el-radio-button label="3">进行中活动</el-radio-button>
                  <el-radio-button label="4">已完成活动</el-radio-button>
                   <el-radio-button label="5">暂停中活动</el-radio-button>
                  <el-radio-button label="6">审核失败</el-radio-button>
                   <el-radio-button label="7">已取消活动</el-radio-button>
                </el-radio-group>
          </div>
           <div class="mt-1">
            <label class="label" for="">高级搜索:</label>
               <el-input placeholder="活动ID" style="width:120px"  size="small" ></el-input>
               <el-select v-model="shopname" placeholder="请选择店铺" size="small" >
                  <el-option   v-for="(item,index) in shop"
                    :key="index"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
               </el-select>
               <el-input placeholder="商品标题" style="width:170px"  size="small" ></el-input>
               <el-input placeholder="库存大于" style="width:120px"  size="small" ></el-input>
          </div>
           <div class="mt-1">
            <label class="label" for="">高级搜索:</label>
                <el-date-picker size="small"
                  v-model="date"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              <el-button size="small" type="primary"  plain style="width:80px"><i class="el-icon-search"></i> 搜索</el-button>
              <el-button size="small" type="primary"  plain style="width:80px"><i class="el-icon-printer"></i> 导出</el-button>
          </div>
      </div>
      <div>
        <div  class="mx-2 px-2 py-2 mt-2 border flex   align-center" >
            <div class="el-tag el-tag--plain mr-1">今日订单总数(<span>{{get_data.today_orders}}</span>)</div>
            <div class="el-tag el-tag--plain mr-1">已接订单(<span>{{get_data.receive_orders}}</span>)</div>
           <div class="el-tag el-tag--plain mr-1">未接订单(<span>{{get_data.no_receive_orders}}</span>)</div>
        </div>
        <div class="mx-2 mt-2  list">
            <div class="border my-1" v-for="(item,index) in data_list" :key="index">
              <div class="top flex py-1 border-bottom">
                <div class="p-1 ml-1" style="width: 200px;">
                  活动ID:<span>{{item.id}}</span>
                </div>
                <div class="p-1" style="width: 100px;font-size:20px;padding:5px;color:#409eff">
                  <i class="el-icon-mobile-phone"></i>
                </div>
                <div class="p-1 flex-1"><i class="el-icon-s-shop" style="color:#02b110"></i>{{item.shop_title}}</div>
                <div class="p-1"><i class="el-icon-time"></i>{{item.createtime}}</div>
                <div class="p-1"><i class="el-icon-s-flag" style="font-size:20px;color:#bfbfbf"></i></div>
              </div>
              <div class="nav flex">
                <img :src="item.product_img" style="width: 128px;height: 128px;margin:10px 10px 10px 20px  ;" >
                <div class="message_1" style="width: 25%;padding-top: 10px;">
                  <li>活动状态:{{item.status}}</li>
                  <li>商品总价:￥{{item.product_price}}</li>
                  <li>追加金币:{{item.add_coins}}</li>
                  <li>已领份数:0/{{item.product_nums}}份</li>
                  <li>活动备注:{{item.remark?item.remark:'暂无'}}</li>
                </div>
                <div class="flex " style="width:30%;padding-top: 10px;height: 25px;">
                  <el-tag type="danger" size="small">{{item.refund_title}}</el-tag>
                  <el-tag  size="small">{{item.inshop_title}}</el-tag>
                  <el-tag type="warning" size="small">需要电商大脑验号</el-tag>
                </div>
                <div class="flex-1 text-right mt-1 mr-5">
                  <el-button  size="small" type="success" round><i class="el-icon-message"></i> 管理订单</el-button>
                </div>
              </div>
              <div class="foot flex p-1 m-1 border align-center">
                <div class="justify-center align-center" style="margin-right: 22%;" >
                  <p style="font-size:14px">淘宝天猫代运营 人工SD手淘首页搜索排名提升专业S单补单打造爆款</p> 
                </div>
                <div class="flex-1" style="float:left">

                </div>
                <el-button size="small" type="primary" style="height:30px " round><i class="el-icon-s-promotion"></i>重新发布</el-button>
                <el-button size="small" type="primary" style="height:30px" round><i class="el-icon-s-data"></i>活动详情</el-button>
              </div>

          </div>
         </div>
      </div>
    </div>    
</template>
<script>
import {get_task_list} from '@/network/merchant/sellTaskMoney/list'
export default {
    data(){
      return{
        radio:"1",
        radio2:"1",
        shop:[{name:'选择店铺',value:''},{name:"店铺1",value:'店铺1'},{name:"店铺2",value:'店铺2'},{name:"店铺3",value:'店铺3'},{name:"店铺4",value:'店铺4'}],
        shopname:'选择店铺',
        date:'',
        get_data:"",
        data_list:""
      }
    },
    created(){
      get_task_list().then(res=>{
         if(res.code=1){ 
          console.log(res.data.list)
           this.get_data=res.data
           this.data_list=res.data.list
          //  res.data.list=this.data_list
         }
      })
    }
}
</script>
<style scoped>
.el-radio.is-bordered+.el-radio.is-bordered{
  margin-left: 0px;
}
li{
  list-style:none;
}
.label{
  font-size: 14px;
  padding-right: 10px;
  color: darkgrey;
}
.list .top{
  font-size: 14px;
}
</style>