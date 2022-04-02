<template>
    <div id="app"> 
         <div>
        <h3 class="px-2 py-1 border-bottom"  >基础服务费</h3>
        <div class="m-2  p-2 border">
            <div >
            <el-radio-group v-model="radio1">
            <el-radio-button name="la" label="淘宝/天猫"></el-radio-button>
            <el-radio-button name="la" label="京东"></el-radio-button>
            <el-radio-button name="la" label="拼多多"></el-radio-button>
            <el-radio-button name="la" label="抖音小店"></el-radio-button>
            </el-radio-group>
            </div>
            <div class=" mt-2">
              <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">                    
                <el-table-column prop="date" label="返款方式" sortable width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="范围" sortable :formatter="formatter">
                    </el-table-column>
                    <el-table-column prop="address" label="资费(金币)" width="100">
                    </el-table-column>
                    </el-table>
            </div>
        </div>
    </div>


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