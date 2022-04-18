<template>
  <div id="app" style="width:1050px;background-color:white;padding-bottom:30px"  >
    <div class="flex" >
      <div class="nav flex-1">
        <div class="mx-2 my-1 border p-1">
          <span
            style="
              font-size: 15px;
              color: rgb(64, 158, 255);
              padding-left: 30px;
              padding-right: 15px;
              font-weight: bold;
            "
            ><i class="el-icon-chat-line-square"></i>重要公告:</span>
          <span
            class=""
            style="color: red; font-weight: 300; font-size: 15px"
            >{{ mode.gonggao }}</span>
        </div>
        <div class="el-card__body border mx-2 my-1" style="padding: 20px">
          <div class="el-row" style="margin-left: -10px; margin-right: -10px">
            <div
              class="el-col el-col-4"
              style="padding-left: 10px; padding-right: 10px"
            >
              <div class="block">
                <span
                  class="el-avatar el-avatar--circle"
                  style="height: 80px; width: 80px; line-height: 80px"
                >
                  <img
                    src="@/assets/images/head.jpg"
                    style="object-fit: cover"
                /></span>
              </div>
            </div>
            <div
              class="el-col el-col-8"
              style="padding-left: 10px; padding-right: 10px"
            >
              <p style="margin-top: 10px"></p>
              <h2 style="color: rgb(64, 158, 255)">
                {{homedata.user_info.mobile}}
                <span style="margin-left: 10px"
                  ><i
                    title="已绑定手机"
                    class="el-icon-mobile-phone"
                    style="font-size: 20px; color: rgb(64, 158, 255)"
                  ></i>
                  <i
                    title="已绑定店铺"
                    class="el-icon-s-shop"
                    style="font-size: 20px; color: rgb(64, 158, 255)"
                  ></i>
                </span>
              </h2>
              <p></p>
              <p style="margin-top: 15px">
                <img
                  :src="homedata.user_info.grade.grade_img"
                  :title="homedata.user_info.grade.title"
                  width="90"
                />
              </p>
            </div>
            <div
              class="el-col el-col-12"
              style="padding-left: 10px; padding-right: 10px"
            >
              <p style="margin-top: 15px">
                <i class="el-icon-money" style="color: rgb(64, 158, 255)"></i>
                <span style="margin-right: 20px"
                  >金币余额
                  <span
                    style="
                      color: red;
                      font-size: 18px;
                      font-weight: bold;
                      margin-left: 15px;">
                    {{homedata.user_info.coins}}
                    </span>
                    </span>
                <button
                  type="button"
                  class="el-button el-button--success el-button--small is-round"
                  onclick="location.href='/Member/Wealth/RechargePay'"
                >
                  <!----><!---->
                  <span>充值</span>
                </button>
              </p>
              <p style="margin-top: 10px">
                <i class="el-icon-coin" style="color: rgb(64, 158, 255)"></i>
                <span style="margin-right: 20px"
                  >积分余额
                  <span
                    style="
                      color: rgb(64, 158, 255);
                      font-size: 16px;
                      font-weight: bold;
                      margin-left: 15px;
                    "
                    >
                    {{homedata.user_info.score}}
                    </span
                  ></span
                >
                距离升级还差：80000 积分
              </p>
            </div>
          </div>
        </div>
        <div class="flex mx-2">
          <span class="list_1 border "><i class="el-icon-s-home"></i> 个人信息</span>
          <span  class="list_1 border "><i class="el-icon-s-cooperation"></i> 照妖镜验号</span>
          <span   class="list_1 border "><i class="el-icon-s-order"></i> 充值明细</span>
          <span   class="list_1 border "><i class="el-icon-s-finance"></i> 金币明细</span>
        </div>
        <div id="myChart" class="border mx-2 my-1 pt-1 pl-1" style="height:340px;"> </div>
        <div class="mx-2">
          <el-tabs type="border-card">
            <el-tab-pane label="试用活动汇总" >
              <div class=" flex justify-center align-center">
                 <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 mx-1 border">待审核活动(<span>{{homedata.tast_data.task_0}}</span>)</div> </router-link>
                 <img src="@/assets/images/home/jiantou.png"  style="object-fit: cover;width:30px;height:20px">
                  <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 mx-1  border">进行活动中(<span>{{homedata.tast_data.task_1}}</span>)</div> </router-link>
                  <img src="@/assets/images/home/jiantou.png"  style="object-fit: cover;width:30px;height:20px">
                   <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 mx-1  border">待审核活动(<span>{{homedata.tast_data.task_3}}</span>)</div> </router-link> 
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
         <div class="mx-2 mt-2">
          <el-tabs type="border-card">
            <el-tab-pane label="试用订单汇总" >
              <div class=" flex flex-wrap justify-center align-center">
                 <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 m-1 border">待审核订单(<span>{{homedata.order_data.order_1}}</span>)</div> </router-link>
                 <img src="@/assets/images/home/jiantou.png"  style="object-fit: cover;width:30px;height:20px">
                  <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 m-1  border">已接单订单(<span>{{homedata.order_data.order_1}}</span>)</div> </router-link>
                  <img src="@/assets/images/home/jiantou.png"  style="object-fit: cover;width:30px;height:20px">
                   <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 m-1  border">已找到商品(<span>{{homedata.order_data.order_3}}</span>)</div> </router-link> 
                  <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 m-1 border">已完成订单(<span>{{homedata.order_data.order_6}}</span>)</div> </router-link>
                 <img src="@/assets/images/home/jiantou.png"  style="object-fit: cover;width:30px;height:20px">
                  <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 m-1  border">待完成订单(<span>{{homedata.order_data.order_5}}</span>)</div> </router-link>
                  <img src="@/assets/images/home/jiantou.png"  style="object-fit: cover;width:30px;height:20px">
                   <router-link to="/shop/taobao.vue"><div class="flex-1 px-5 py-2 m-1  border">代发货订单(<span>{{homedata.order_data.order_3}}</span>)</div> </router-link> 
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div style=" width: 220px;margin-right:20px;margin-top:10px">
          <div
          class="weixin border">
          <h4 class="pl-2 pb-1 border-bottom"><i class="el-icon-phone-outline text_color"></i> 联系方式</h4>
          <li class="pl-2  align-center">客服QQ: <img src="@/assets/images/home/qq.png" style="width:90px;height:20px" alt="" srcset=""></li>
          <li class="pl-2  align-center">客服电话: 扫码加微信</li>
          <li class=" text-center  justify-center align-center"><img src="@/assets/images/home/erweima.jpg" style="width:140px;height:140px" alt="" srcset=""><p class=" text-center">扫码加微信</p></li>
        </div>
        <div class="border mt-2">
            <h4 class="pl-2 pb-1 border-bottom"><i class="el-icon-message-solid text_color"></i> 全体公告</h4>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import top from "@/components/top.vue";
import leftnav from "@/components/leftnav.vue";
import {get_home} from'@/network/merchant/home'

// 模板
let echarts = require('echarts/lib/echarts')
 
// 引入折线图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')

// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/legendScroll')//图例翻译滚动


export default {
  name: "App",
  data() {
    return {
      mode: {
        gonggao:
          "绑店铺要设置复购时间，照妖镜验号自动审核，电商大脑手动 2021-01-22",
      },
      homedata:""
    };
  },
  created(){
      get_home().then(res=>{
        if(res.code=1){  
          this.homedata=res.data
        
          console.log(this.homedata);
        }
        
      })
  
  },
  mounted(){
       this.myEcharts()
      // this.drawLine()
      
  },
  methods:{
      
      myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = echarts.init(document.getElementById('myChart'));

		  // 指定图表的配置项和数据
		  var option = {
            title: {
              text: '一周任务趋势'
            },
               itemStyle: {
                color: '#6794ef'
                },
            legend: {
              data:['销量']
            },
            xAxis: {
              type: 'category',
              data: ['22-04-01', '22-04-01', '22-04-01', '22-04-01', '22-04-01', '22-04-01', '22-04-01'],
              splitLine: {
                  lineStyle: {
                  // 使用深浅的间隔色
                    color: ['#6794ef']
                  }
               },
                nameTextStyle: {
                  color: ['#6794ef']
                },
                axisLine:{
                  lineStyle:{
                  color:'#6794ef',
                  width:1,//这里是为了突出显示加上的
                  }

                   }
            },
            yAxis: {
              type: 'value',
               axisLine:{
                  lineStyle:{
                  color:'#6794ef',
                  width:1,//这里是为了突出显示加上的
                  }

                   }
            },
            series: [
              {
                data: [0, 230, 224, 218, 135, 147, 260, ],
                type: 'line'
              }
            ]
          };

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
		  },
      
    
  },
  components: {
    top,
    leftnav,
  },
};
</script>
<style scoped>
.weixin li{
    font-size: 13px;
    list-style: none;
    padding-top: 5px;
}
.text_color{
      color: rgb(64, 158, 255);
}
.el-table thead {
  color: #6794ef;
}
.list_1 i{color: rgb(64, 158, 255);}
.list_1{
  padding:20px 0px;
  font-size: 20px;
  flex: 1;
  text-align:center;
}
</style>