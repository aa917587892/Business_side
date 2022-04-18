<template>
    <div style="width:1000px;background-color:white;padding-bottom:100px">
      <h2 class="px-2 pt-2 pb-2 m-0 border-bottom">订单管理</h2>  
      <div class="mx-2 p-2">
            <el-radio-group v-model="radio" size="small">
                <el-radio-button label="1">全部活动</el-radio-button>
                <el-radio-button label="2" >待我审核</el-radio-button>
                <el-radio-button label="3">试客已接单</el-radio-button>
                <el-radio-button label="4">试客已找到</el-radio-button>
                <el-radio-button label="5">待我发货</el-radio-button>
                <el-radio-button label="6" >试客待收货</el-radio-button>
                <el-radio-button label="7">待我完成</el-radio-button>
                <el-radio-button label="8">已完成</el-radio-button>
                <el-radio-button label="9">投诉中</el-radio-button>
            </el-radio-group>
            <div >
                <el-select class="mt-1"  size="small" v-model="search.platform" style="width:150px">
         
                </el-select>
                <el-select class="mt-1"  size="small" v-model="search.shop"  style="width:150px">
                   
                </el-select>
                <el-select class="mt-1" size="small" v-model="search.state" style="width:150px">
                 
                </el-select>
                <el-input class="mt-1" placeholder="请输入订单号" size="small" style="width:150px" v-model="search.oder"></el-input>
                <el-input class="mt-1" placeholder="请输入买号" size="small" style="width:150px" v-model="search.maihao"></el-input>
                <el-input class="mt-1" placeholder="请输入商品标题" size="small" style="width:150px" v-model="search.goods_title"></el-input>
                <el-input class="mt-1" placeholder="请输入订单ID" size="small" style="width:150px" v-model="search.stateID"></el-input>
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
            </div>
            <div class="mt-3 border p-1">
                <el-badge :value="1" class="item" type="primary">
                <el-button type="danger" size="small" ><i class="el-icon-s-opportunity"></i> 一键确认完成</el-button>
                </el-badge>
            </div>
            <div class="border mt-2">
                 <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column type="expand">
                        <template slot-scope="props" >
                            <div>
                                 <el-form  label-position="left" inline class=" flex justify-center align-center flex-wrap">
                                    <el-form-item label="商品ID:" >
                                        <span>{{ props.row.shopID }}</span>
                                    </el-form-item>
                                    <el-form-item label="订单ID:">
                                        <span>{{ props.row.orderID }}</span>
                                    </el-form-item>
                                    <el-form-item label="接单时间:">
                                        <span>{{ props.row.jddate }}</span>
                                    </el-form-item>
                                    <el-form-item label="付款时间:">
                                        <span>{{ props.row.fkdate }}</span>
                                    </el-form-item>
                                    <el-form-item label="实付金额:">
                                        <span>{{ props.row.reality_momey }}</span>
                                    </el-form-item>
                                    <el-form-item label="快递公司:">
                                        <span>{{ props.row.courier_name }}</span>
                                    </el-form-item>
                                    <el-form-item label="快递单号:">
                                        <span>{{ props.row.courier_ID }}</span>
                                    </el-form-item>
                                    <el-form-item label="发货时间:">
                                        <span>{{ props.row.fhdate }}</span>
                                    </el-form-item>
                                    <el-form-item label="收货时间:">
                                        <span>{{ props.row.shdate }}</span>
                                    </el-form-item>
                                    </el-form>
                            </div>                  
                        </template>
                        </el-table-column> 
                        <el-table-column  label="商品图" >
                             <template v-slot="scope">
                                <img :src="scope.row.imgUrl" alt="" width="90" height="90">
                            </template>                   
                        </el-table-column>
                        <el-table-column  label="活动商品"  prop="goods"> </el-table-column>
                        <el-table-column  label="商品金额"  prop="money"> </el-table-column>
                        <el-table-column  label="订单状态"  prop="state"> </el-table-column>
                        <el-table-column  label="试客信息"  prop="username"> </el-table-column>
                        <el-table-column  label="操作"  prop="operation"> </el-table-column>
                    </el-table>
            </div>
      </div>

    </div>

</template>
<script>
export default {
    data(){
        return{
             radio:'1',
            search:{
                platform:{},
                shop:{},
                state:{},
                oder:'sss',
                maihao:'sss',
                goods_title:'ss',
                cancel:false,
                stateID:'',
                date:[]
            },
        tableData: [{
          id: '10333',
          shopID:'1234',
          orderID:'4854200023955217833',
          goods:'盲盒幸运盒子大捡漏金镶玉羊脂玉和田玉天然翡',
          shop:' 道义时光',
          username:'Zhh13465676553',
          state:'已完成',
          money:'19.2',
          reality_momey:'19.2', //实际支付
         imgUrl:require('../../../assets/images/head.jpg'),
          operation:'',
          courier_name:'顺丰',  //快递名字
          courier_ID:'45648438435248642451',    //快递编号
          fkdate:'2020.12.12',
          jddate:'2020.12.03',
          fhdate:'2020.12.01',
          shdate:'2020.12.02'
        }, {
           id: '10333',
          shopID:'1234',
          orderID:'4854200023955217833',
          goods:'盲盒幸运盒子大捡漏金镶玉羊脂玉和田玉天然翡',
          shop:' 道义时光',
          username:'Zhh13465676553',
          state:'已完成',
          money:'19.2',
          reality_momey:'19.2', //实际支付
         imgUrl:require('../../../assets/images/head.jpg'),
          operation:'',
          courier_name:'顺丰',  //快递名字
          courier_ID:'45648438435248642451',    //快递编号
          fkdate:'2020.12.12',
          jddate:'2020.12.03',
          fhdate:'2020.12.01',
          shdate:'2020.12.02'
        //   imgUrl: require('../../../assets/images/login.jpg') 
        }, {
          id: '10333',
          shopID:'1234',
          orderID:'4854200023955217833',
          goods:'盲盒幸运盒子大捡漏金镶玉羊脂玉和田玉天然翡',
          shop:' 道义时光',
          username:'Zhh13465676553',
          state:'已完成',
          money:'19.2',
          reality_momey:'19.2', //实际支付
         imgUrl:require('../../../assets/images/head.jpg'),
          operation:'',
          courier_name:'顺丰',  //快递名字
          courier_ID:'45648438435248642451',    //快递编号
          fkdate:'2020.12.12',
          jddate:'2020.12.03',
          fhdate:'2020.12.01',
          shdate:'2020.12.02'
        }, {
           id: '10333',
          shopID:'1234',
          orderID:'4854200023955217833',
          goods:'盲盒幸运盒子大捡漏金镶玉羊脂玉和田玉天然翡',
          shop:' 道义时光',
          username:'Zhh13465676553',
          state:'已完成',
          money:'19.2',
          reality_momey:'19.2', //实际支付
         imgUrl:require('../../../assets/images/head.jpg'),
          operation:'',
          courier_name:'顺丰',  //快递名字
          courier_ID:'45648438435248642451',    //快递编号
          fkdate:'2020.12.12',
          jddate:'2020.12.03',
          fhdate:'2020.12.01',
          shdate:'2020.12.02'
        },{}]
        }
       
    }
}
</script>
<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-form-item{
      width:30%;
  }
</style>