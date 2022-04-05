<template>
    <div>
      <h2 class="px-2 pb-2 border-bottom">基础服务费</h2>
      <!-- 表格 -->
      <div class="table m-2">
          <div>
            <el-radio-group v-model="radio1" @change="changetype(radio1)">
              <el-radio-button name="shoptype" label="淘宝/天猫"></el-radio-button>
              <el-radio-button name="shoptype" label="京东" ></el-radio-button>
              <el-radio-button name="shoptype" label="拼多多" ></el-radio-button>
              <el-radio-button name="shoptype" label="抖音小店" ></el-radio-button>
            </el-radio-group>
          </div>
          <el-table :data="tableData.slice(yeshu,currentPage*pageSize)" style="width: 100%">
            <el-table-column prop="text1" label="返款方式" width="180">
            </el-table-column>
            <el-table-column prop="text2" label="范围" >
            </el-table-column>
            <el-table-column prop="text3" label="资金" sortable width="80">
            </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <div class="block" style="margin-top:15px;">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage" 
            :page-sizes="[4,5,10,20]"  
            :page-size="pageSize" 
            layout="total, sizes, prev, pager, next, jumper" 
            :total="tableData.length">
            </el-pagination>
        </div>
      </div>
      <h2 class="px-2 pb-2 border-bottom">增值服务费</h2>
      <div class="mx-2 p-1 border flex flex-wrap  justify-between  align-center">
          <span v-for="(item,index) in 30" :key="index" style="padding:8px 20px;font-size:13px" >好评方式_指定好评:0.5金币</span>
      </div>
    </div>
 
</template>
 
  <script>
        export default {
            data() {
                return {
                    mode: [{
                       taobao:[
                          {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "1"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "2"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.96"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.96"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.34"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.93"
                        },
                       ],
                      jd:[ {
                            text1: "平台返款京东",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "1"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "2"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.96"
                        },
                        {
                            text1: "平台返款京东",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.96"
                        },
                        {
                            text1: "平台返款京东",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.34"
                        },
                        {
                            text1: "平台返款京东",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.93"
                        },],
                      pdd:[ {
                            text1: "平台返款拼多多",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "1"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "2"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.96"
                        },
                        {
                            text1: "平台返款",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.96"
                        },
                        {
                            text1: "平台返款pdd",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.34"
                        },
                        {
                            text1: "平台返pdd",
                            text2: "0(元) < 商品价格 ≤ 50(元)",
                            text3: "0.93"
                        },],
                      dyxd:[]
                    }],

                    tableData:[],
                    currentPage: 1, // 当前页码
                    total: 1, // 总条数
                    pageSize: 4 ,// 每页的数据条数

                    radio1:'淘宝/天猫'
                };
            },
            created(){
                this.tableData = this.tableData =this.mode[0].taobao
            },
            methods: {
                //每页条数改变时触发 选择一页显示多少行
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                    this.currentPage = 1;
                    this.pageSize = val;
                },
                //当前页改变时触发 跳转其他页
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                    this.currentPage = val;
                },
                 changetype(val){
                    if(val ==='淘宝/天猫'){
                      this.tableData =this.mode[0].taobao
                    }else if(val==='京东'){
                       this.tableData =this.mode[0].jd
                    }else if(val==='拼多多'){
                       this.tableData =this.mode[0].pdd
                    }else if(val==='抖音小店'){
                       this.tableData =this.mode[0].dyxd
                    }
                    this.handleCurrentChange(1)
            }
            },
            computed:{
                yeshu(){
                  return(this.currentPage-1)*this.pageSize
                }
            }
        };
</script>