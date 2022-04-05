<template>
    <div class="sideMenu myfl" id="userleft_nav" v-cloak>

    <el-menu  default-active="2" class="el-menu-vertical-demo" :default-openeds="openeds"  >

        <el-submenu index="11" v-if="'v-if'">
            <template slot="title">
                <i class="el-icon-present" style="color:#409EFF"></i>
                <span>试用活动</span>
            </template>
            <router-link to='/merchant/sellTaskMoney/add'><el-menu-item index="11-1">发布活动</el-menu-item></router-link>
            <el-menu-item index="11-2"><a href="">活动管理</a></el-menu-item>
            <el-menu-item index="11-3"><a href="">订单管理</a></el-menu-item>
            <el-menu-item index="11-9"><a href="">返款管理<el-badge class="mark" :hidden="0==0" :value="0" /></a></el-menu-item>
            <el-menu-item index="11-5"><a href="">售后服务</a></el-menu-item>
            <el-menu-item index="11-4"><a href="">任务模版</a></el-menu-item>
            <el-menu-item index="11-6">拉黑买号</el-menu-item>
             <router-link to='/merchant/sellTaskMoney/costList'><el-menu-item index="11-7">收费标准</el-menu-item></router-link>
        </el-submenu>
            <el-submenu index="3" v-if="'v-if'">
                <template slot="title">
                    <i class="el-icon-s-shop" style="color:#67C23A"></i>
                    <span>店铺管理</span>
                </template>
                <router-link to='/merchant/shop/taobao'><el-menu-item index="3-1" v-if="'v-if'">淘宝店铺</el-menu-item></router-link>
                <router-link to='/merchant/shop/jingdong'><el-menu-item index="3-2" v-if="'v-if'">京东店铺</el-menu-item></router-link>
                <router-link to='/merchant/shop/pdd'><el-menu-item index="3-3" v-if="'v-if'">拼多多店铺</el-menu-item></router-link>
                <router-link to='/merchant/shop/dy'><el-menu-item index="3-4" v-if="'v-if'">抖音小店</el-menu-item></router-link>
                <router-link to='/merchant/shop/znzs'><el-menu-item index="3-5" v-if="1">淘宝智能助手</el-menu-item></router-link>
            </el-submenu>
                    <el-submenu index="12" v-if="'v-if'">
                <template slot="title">
                    <i class="el-icon-star-off" style="color:#F56C6C"></i>
                    <span>增流活动</span>
                </template>
                <el-menu-item index="12-1"><a href="">淘宝增流</a></el-menu-item>
                <el-menu-item index="12-2"><a href="">拼多多增流</a></el-menu-item>
                <el-menu-item index="12-3"><a href="">京东增流</a></el-menu-item>
                <el-menu-item index="12-5"><a href="">增流订单</a></el-menu-item>
            </el-submenu>
                    <el-submenu index="7" v-if="'v-if'">
                <template slot="title">
                    <i class="el-icon-setting" style="color:#67C23A"></i>
                    <span>电商工具</span>
                </template>
                <el-menu-item index="7-1" v-if="'v-if'"><a href="">照妖镜验号</a></el-menu-item>
                <el-menu-item index="7-2" v-if="'v-if'"><a href="">淘宝客检测</a></el-menu-item>
            </el-submenu>
        <el-submenu index="10" v-if="'v-if'">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>礼品服务</span>
            </template>
            <el-menu-item index="10-4"><a href="">礼品订单</a></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-money" style="color:#E6A23C"></i>
                <span>金币管理</span>
            </template>
            <el-menu-item index="4-1" v-if="'v-if'"><a href="/">金币充值</a></el-menu-item>
            <el-menu-item index="4-2" v-if="'v-if'"><a href="/">充值明细</a></el-menu-item>

            <el-menu-item index="4-5"><a href="/">金币明细</a></el-menu-item>
            
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-user" style="color:#F56C6C"></i>
                <span>系统管理</span>
            </template>
            <el-menu-item index="5-1"><a href="/">基本信息</a></el-menu-item>
            <el-menu-item index="5-2"><a href="/">账户安全</a></el-menu-item>
            <el-menu-item index="5-4" v-if="''"><a href="/">实名认证</a></el-menu-item>
                <el-menu-item index="5-3"><a href="/">推广赚钱</a></el-menu-item>
            <el-menu-item index="6-1"><a href="/">站内消息<el-badge class="mark" :hidden="2==0" :value="2" /></a></el-menu-item>
            <el-menu-item index="6-2"><a href="/" target="_blank">帮助中心</a></el-menu-item>
        </el-submenu>
    </el-menu>
    <audio id="audio" src=""></audio>
</div>
</template>
<script>

export default {
    data(){
        return{
            openeds:['11','3','12','7','10','4']
        }
    },
        methods: {
           
        },
        watch: {
            //activeMenu: function (val) {
            //    this.openedMenu.push(val.split('-')[0]);
            //},
        },
      
}
</script>
<style scoped>
  .leftnav .el-menu-item-group__title{
    font-size: 15px!important;
  }
  .el-submenu__title{
      text-align: center;
  }
  .el-menu-item{
      text-align: center;
  }
</style>