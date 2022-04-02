<template>
    <div id="app"> 
       <h3>用户主页</h3> 
    </div>
   
</template>
<script>
    import top from '@/components/top.vue'  
    import leftnav from '@/components/leftnav.vue'
  export default {
    name: 'App',
    data() {
      return {
        tableData: [{
          date: '返款方式',
          name: '0(元) < 商品价格 ≤ 50(元)',
          address: '0.96'
        }, {
            date: '返款方式',
          name: '0(元) < 商品价格 ≤ 50(元)',
          address: '0.96'
        }, {
            date: '返款方式',
          name: '1(元) < 商品价格 ≤ 50(元)',
          address: '0.96'
        }, {
            date: '返款方式',
          name: '0(元) < 商品价格 ≤ 50(元)',
          address: '0.96'
        }],  
         radio1:'淘宝/天猫'
         }
      }
      ,
    components:{
      top,
      leftnav
    }
  }
</script>
<style scoped>
.el-table thead{
  color: #6794ef;
}
</style>