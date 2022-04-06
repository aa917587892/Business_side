<template>
  <div class="" style="width:1050px;background-color:white;padding-bottom:100px">
      <h3 class="px-2 pt-2 pb-2 m-0 border-bottom">购买套餐</h3>
        <div class="m-2">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="真实人工引流" name="1" class="">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="类型与来源">
                         <div style="">
                            <el-radio-group v-model="radio3" size="mini">
                            <el-radio-button name="1" label="会员搜索进入"></el-radio-button>
                            <el-radio-button name="1" label="首页猜你喜欢"  ></el-radio-button>
                            <el-radio-button name="1" label="购物车猜你喜欢"></el-radio-button>
                            <el-radio-button name="1" label="微淘入口"></el-radio-button>
                            <el-radio-button name="1" label="我的淘宝"></el-radio-button>
                            <el-radio-button name="1" label="其他店铺商品详情"></el-radio-button>
                            <el-radio-button name="1" label="抖音"></el-radio-button>
                            <el-radio-button name="1" label="聚划算"></el-radio-button>
                            <el-radio-button name="1" label="淘宝直播来路流量"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <el-form-item label="淘气值">
                         <div style="">
                            <el-radio-group v-model="radio3" size="mini">
                            <el-radio-button name="1" label="用户淘气值（801~1500）(免费)"></el-radio-button>
                            <el-radio-button name="1" label="优质（1000<=淘气值<2400）(免费)"  ></el-radio-button>
                            <el-radio-button name="1" label="极品（淘气值>=2400）(0.02金币)"></el-radio-button>
                            <el-radio-button name="1" label="高消费层级(0.03金币)"></el-radio-button>
                            </el-radio-group>
                        </div>

                    </el-form-item>
                    <el-form-item label="时间">
                        <el-date-picker
                            v-model="value1"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="商品详情">
                         <el-input v-model="form.name" placeholder="请输入商品链接地址" ></el-input>
                    </el-form-item>
                    <el-form-item label="搜索关键词1">
                         <el-input v-model="form.name" placeholder="请输入商品链接地址"  style="width:150px"></el-input>
                         <span class="px-2">数量</span>
                         <el-input v-model="form.name" placeholder="请输入数量"  style="width:90px"></el-input>
                          <span class="px-2" >展现</span>
                          <el-input v-model="form.name" placeholder="0"  style="width:80px"></el-input>
                          <el-select v-model="form.region"  style="width:100px">
                            <el-option label="不展现" value="0"></el-option>
                            <el-option label="1倍" value="1"></el-option>
                            <el-option label="2倍" value="2"></el-option>
                            <el-option label="3倍" value="3"></el-option>
                            <el-option label="4倍" value="4"></el-option>
                            <el-option label="5倍" value="5"></el-option>
                            <el-option label="6倍" value="6"></el-option>
                        </el-select>
                        <button class="el-button"><i class="el-icon-plus"></i></button>
                    </el-form-item>
                    <el-form-item label="浏览时间">
                        <el-select v-model="form.regiontime" placeholder="请选择活动区域">
                        <el-option label="浏览器121-180秒(免费)" value="浏览器121-180秒(免费)"></el-option>
                        <el-option label="浏览器181-300秒(0.001金币)" value="浏览器181-300秒(0.001金币)"></el-option>
                        <el-option label="浏览器301-420秒(0.002金币)" value="浏览器301-420秒(0.002金币)"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="浏览深度">
                        <el-select v-model="form.region_shendu" placeholder="请选择活动区域">
                        <el-option label="深入1个商品" value="深入1个商品"></el-option>
                        <el-option label="随机深入浏览1-2个商品(免费)" value="随机深入浏览1-2个商品(免费)"></el-option>
                        <el-option label="浏览器301-420秒(0.002金币)" value="随机深入浏览1-3个商品(0.002金币)"></el-option>
                        <el-option label="随机深入浏览1-2个商品(免费)" value="随机深入浏览1-2个商品(免费)"></el-option>
                        <el-option label="深入浏览2个商品(免费)" value="深入浏览2个商品(免费)"></el-option>
                         <el-option label="随机深入浏览1-2个商品(免费)" value="深入浏览3个商品(0.002金币)"></el-option>
                        </el-select>
                        <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
                    </el-form-item>
                    <el-form-item label="">
                        <span>发布任务请核实，若自己操作失误，任务执行无法停止，平台不支持退款，谢谢理解！底部提示，仅作为参考，实际金额以扣款为准！</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                    </el-form>
            </el-tab-pane>
            <el-tab-pane label="流量任务" name="2">流量任务</el-tab-pane>
            <el-tab-pane label="加购任务" name="3">加购任务</el-tab-pane>
            <el-tab-pane label="收藏任务" name="4">收藏任务</el-tab-pane>
            <el-tab-pane label="达人任务" name="5">达人任务</el-tab-pane>
            <el-tab-pane label="阿里巴巴" name="6">阿里巴巴</el-tab-pane>
            <el-tab-pane label="天猫优品服务站关注" name="7">天猫优品服务站关注</el-tab-pane>
            <el-tab-pane label="PC流量" name="8">PC流量</el-tab-pane>
        </el-tabs>
        </div>
        
  </div>
     
</template>
<script>
export default {
     data() {
      return {
        activeName: "1",
        radio3:'',
        form: {
          name: '',
          region: '不展现',
          regiontime:'浏览器121-180秒(免费)',
          region_shendu:'深入1个商品',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
.el-radio-button--mini .el-radio-button__inner{
    padding: 8px 5px!important;
}
</style>