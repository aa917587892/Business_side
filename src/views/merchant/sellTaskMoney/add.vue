<template>
    <div style="width:1050px;background-color:white" v-if="primary">
         <h2 class="px-3 py-2 border-bottom" style="margin:0px">
        发布活动
         </h2>

    <ul class=" p-2">

        <el-form :model="formData" :rules="rules" ref="ruleForm" size="small" label-width="120px" class="demo-ruleForm">
            <el-collapse  v-model="activeNames">

                <el-card class="box-card">
                    <el-collapse-item name="1">
                        <template slot="title">
                            <h2 class="list_name">1. 基础信息</h2>
                        </template>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-divider></el-divider>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="活动模版:">
                                    <el-select v-model="tmplId" placeholder="选择活动模版" filterable>
                                        <el-option label="选择活动模版" :value="0"></el-option>
                                        <el-option v-for="(item,index) in primary.template" :key="index" :label="item.template_title" :value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="所属平台:">
                                    <el-radio-group v-model="formData.PlatformId">                             
                                            <el-radio :label="item.title" border style="margin:0px 10px 0px 0px;" v-for="(item,index) in primary.platform" :key="index" >淘宝/天猫</el-radio>
                                            <el-radio label="京东" border style="margin:0px 10px 0px 0px;">京东</el-radio>
                                            <el-radio label="拼多多" border style="margin:0px 10px 0px 0px;">拼多多</el-radio>
                                            <el-radio label="抖音小店" border style="margin:0px 10px 0px 0px;">抖音小店</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="currRefundTypeCustomEnable==1">
                            <el-col :span="24">
                                <el-form-item label="返款方式:">
                                    <el-radio-group v-model="formData.RefundType">
                                        <el-radio label="1" border style="margin:0px 10px 0px 0px;">平台返款</el-radio>
                                        <el-radio label="3" border style="margin:0px 10px 0px 0px;">自己返款</el-radio>

                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="终端类型:">
                                    <el-radio-group v-model="formData.OrderTerminal">
                                            <el-radio label="1" border style="margin:0px 10px 0px 0px;">手机端</el-radio>
                                            <el-radio label="2" border style="margin:0px 10px 0px 0px;">电脑端</el-radio>

                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="所属店铺:">
                                    <el-select v-model="formData.ShopId" placeholder="请选择店铺" filterable>
                                        <el-option :label="item.Name" :value="item.Id" v-for="(item,index) in getShopList" :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-link type="primary" >绑定店铺</el-link>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="商品类目:" prop="CategoryId">
                                    <el-select v-model="formData.CategoryId" placeholder="请选择商品类目">
                                        <el-option label="请选择商品类目" v-for="(item,index) in primary.category" :key="index" :value="0"></el-option>
                                        <el-option label="综合商品" :value="9"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" style="padding-top:10px;"></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品链接:" prop="GoodsUrl">
                                    <el-input v-model="formData.GoodsUrl" width="100%">
                                        

                                    </el-input>

                                </el-form-item>
                            </el-col>

                            <el-col :span="4">
                            </el-col>

                        </el-row>


                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品名称:" prop="GoodsName">
                                    <el-input v-model="formData.GoodsName" width="100%"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="4" style="padding-top:10px;"></el-col>

                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <el-form-item label="商品规格:" prop="GoodsSku">
                                    <el-input v-model="formData.GoodsSku"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" style="padding-top:10px;"></el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="商品单价:" prop="ShowUnitPrice">
                                    <el-input-number v-model="formData.ShowUnitPrice" :min="0" :precision="2" :step="1" value="0"></el-input-number>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="每单买:" prop="PaiNum">
                                    <el-input-number v-model="formData.PaiNum" :min="1" :precision="0" :step="1" value="0"></el-input-number> 个
                                </el-form-item>
                            </el-col>
                            
                        </el-row>


                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品主图:" prop="GoodsPic">
                                  
                                   <el-upload
                                       action="https://jsonplaceholder.typicode.com/posts/"
                                       list-type="picture-card"
                                        :limit='1'
                                        :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                                        </el-upload>
                                        <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                        </el-dialog>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <el-form-item label="活动数量:" prop="TaskCount">
                                    <el-input-number v-model="formData.TaskCount" :min="1" label="活动数量"></el-input-number>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="0" v-if="1">
                            <el-col :span="8">
                                <el-form-item label="是否截图:">
                                    <el-radio-group v-model="formData.IsNeedScreenshot">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不需要</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">需要</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>

                            <el-col :span="16" class="tips">提示: 试客是否需要上传关键字、货比、浏览副宝贝、加购物车、收藏宝贝或店铺等截图</el-col>
                        </el-row>
                        <el-row :gutter="0" v-if="1">
                            <el-col :span="12">
                                <el-form-item label="商品核对:">
                                    <el-radio-group v-model="formData.LimitDetailsKey">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">核对标题</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">核对详情词</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="1" class="tips"></el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.LimitDetailsKey!=0">
                                <el-row :gutter="10">

                                    <el-col :span="13">
                                        <el-form-item label="请设置商品核对关键词:" label-width="165px">
                                            <el-input v-model="formData.DetailsKey" placeholder="请输入4-10个字的关键词"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="9">
                                        <el-button type="text" v-on:click="example()">示例说明</el-button>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="10">
                                    <el-col :span="24" class="tips">
                                        提示:通过找到商家设置的关键词来增加试客在商品详情页的停留时间
                                    </el-col>
                                </el-row>
                                <el-row :gutter="10">
                                    <el-col :span="24" style="color:#F56C6C;">
                                        切忌:1.核对关键词在商品详情页找不到 2.核对关键词于详情页中某个文案相似却不完全相同 3.标题符号、空格、特殊字符
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                    </el-collapse-item>
                </el-card>
                <el-card class="box-card">
                    <el-collapse-item name="2">

                        <template slot="title">
                            <h2 class="list_name" >2.进店方式</h2>
                        </template>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-divider></el-divider>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="进店方式:">
                                    <el-radio-group v-model="formData.EnterShopType">
                                            <el-radio :label="1" border style="margin:0px 5px 5px 0px;">搜索关键词</el-radio>
                                            <el-radio :label="2" border style="margin:0px 5px 5px 0px;">搜索店铺</el-radio>
                                            <el-radio :label="3" border style="margin:0px 5px 5px 0px;">直通车</el-radio>
                                            <el-radio :label="4" border style="margin:0px 5px 5px 0px;">直接打开</el-radio>
                                            <el-radio :label="5" border style="margin:0px 5px 5px 0px;">淘口令</el-radio>
                                            <el-radio :label="6" border style="margin:0px 5px 5px 0px;">二维码</el-radio>
                                            <el-radio :label="8" border style="margin:0px 5px 5px 0px;">商品卡屏</el-radio>
                                            <el-radio :label="7" border style="margin:0px 5px 5px 0px;">其他渠道</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.EnterShopType==1
                                    ||formData.EnterShopType==2
                                    ||formData.EnterShopType==3">
                                <el-row :gutter="10" v-for="(item, index) in formData.KeyWords.KeyWord" :key="index">

                                    <el-col :span="12">
                                        <el-form-item 
                                            :label="'关键词' + index"
                                          >
                                            <el-input v-model="item.KeyWord" placeholder="关键词"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label-width="0px">
                                            <el-input v-model="item.Describe" placeholder="说明关键词的排序方式和页数"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-form-item label-width="0px" >
                                            <el-input v-model="item.Num" placeholder="数量"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-button v-if="index==0" size="small" v-on:click.prevent="addKeyWord()">增加</el-button>
                                        <el-button v-if="index!=0" size="small" v-on:click.prevent="removeKeyWord(item)">删除</el-button>
                                    </el-col>

                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.EnterShopType==6">
                                <el-row :gutter="20">
                                    <el-col :span="20">
                                        <el-form-item label="二维码图:" prop="OrCodePic">
                                           <el-upload
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                list-type="picture-card"
                                                :on-preview="handlePictureCardPreview"
                                                :on-remove="handleRemove">
                                                <i class="el-icon-plus"></i>
                                                </el-upload>
                                                <el-dialog :visible.sync="dialogVisible">
                                                <img width="100%" :src="dialogImageUrl" alt="">
                                            </el-dialog>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.EnterShopType==5">
                                <el-row :gutter="20">
                                    <el-col :span="10">
                                        <el-form-item label="淘口令:" prop="TaoPwd">
                                            <el-input v-model="formData.TaoPwd" style="width:600px;"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.EnterShopType==8">

                                <el-row :gutter="20" style="margin-bottom:20px;">
                                    <el-col :span="22" class="tips" :offset="1">
                                        <p>温馨提示（必看）</p>
                                        <p>1、根据活动商品自动生成卡首屏二维码，试客使用手淘APP扫一扫后，指定的宝贝就会显示在首屏，快速精准做销量，提升宝贝的权重。</p>
                                        <p>2、以下渠道均为非搜渠道，增加商品的基础权重。</p>
                                        <p>3、生成二维码后一定要自己扫码尝试一下，若发现卡不到，或者扫码不显示，则可以看是否填错了商品链接，或者换一种卡屏方式。</p>
                                        <p>4、渠道入口较多，请根据自己店铺实际情况选择合适的渠道使用。</p>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="卡屏类型：" prop="ScreenClipId">
                                            <el-radio-group v-model="formData.screenClipListID">
                                                <el-radio-button v-for="(item) in screenClipList" :label="item.ID" :key="item.ID">{{item.name}}</el-radio-button>
                                            </el-radio-group>
                                            <p style="text-align:left">
                                                {{ClipList}}
                                            </p>
                                        </el-form-item>

                                        <p style="text-align:center">
                                            <!-- <img width="200" :src="screenClipPicData"  /> -->
                                        </p>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.EnterShopType==7">
                                <el-row :gutter="20">
                                    <el-col :span="22" class="tips" :offset="3">
                                        添加搜索商品步骤图片（如有需要可上传搜索步骤帮助找商品，最多可上传5张图）
                                    </el-col>
                                </el-row>
                               
                                    <el-row   style="margin-top:10px;margin-bottom:10px;">
                                    <el-col :span="22" :offset="3">
                                        <div class="qtjd" style="">
                                               <el-upload 
                                                :limit='5'
                                                class="upload_1"
                                                accept="jpg,png,jpeg,JPEG,PNG,JPG"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                list-type="picture-card"
                                                :on-preview="handlePictureCardPreview"
                                                :on-remove="handleRemove">
                                                <i class="el-icon-plus" ></i>
                                            </el-upload>
                                            <el-dialog :visible.sync="dialogVisible">
                                                <img width="100%"  :src="dialogImageUrl" alt="">
                                        </el-dialog>
                                        </div>
                                   
                                    </el-col>
                                </el-row>
                        
                                
                                <el-row :gutter="10">
                                    <el-col :span="3" style="padding-left:30px;">
                                        备注说明:
                                    </el-col>
                                    <el-col :span="20">
                                        <el-input :maxlength="200" type="textarea" :rows="4" placeholder="重要！商家必须清楚描述活动商品查找的入口步骤，例如第一步手机端首页海淘抢购，第二步12：00点场，第三步88元的武夷山红茶特级正山小种500g。可配合添加步骤图片"></el-input>

                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                    </el-collapse-item>
                </el-card>


                <el-card class="box-card">
                    <el-collapse-item name="3">
                        <template slot="title">
                            <h2 class="list_name">3. 千人千面</h2>
                        </template>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-divider></el-divider>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.check_fraud_show ">
                            <el-col :span="9">
                                <el-form-item label="照妖镜验号:">
                                    <el-radio-group v-model="formData.LimitZyjCheckAccount">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="15" class="tips">注：自动过滤降全号，建议开启，增值费 +{{primary.added_value.check_fraud_merchant_fee}} 金币</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.check_brain_show =1">
                            <el-col :span="9">
                                <el-form-item label="电商大脑验号:">
                                    <el-radio-group v-model="formData.LimitDsdnCheckAccount">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;" disabled>不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;" disabled>要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="15" class="tips">注：自动过滤降全号，建议开启，增值费 +{{primary.added_value.need_follow_shop_merchant_fee}} 金币</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="8">
                                <el-form-item label="要求买号信誉:">
                                    <!-- <el-select v-model="formData.mhry" >
                                            <el-option  label="不要求" value="不要求" ></el-option>
                                            <el-option  label="白号"  value="白号" ></el-option>
                                            <el-option label="一心号金币" value="一心号金币" ></el-option>
                                            <el-option label="二心号金币" value="二心号金币"></el-option>
                                            <el-option label="三心号金币" value="三心号金币"></el-option>
                                            <el-option label="四心号金币" value="四心号金币"></el-option>
                                            <el-option label="五心号金币" value="五心号金币"></el-option>
                                            <el-option label="一钻号金币" value="一钻号金币"></el-option>
                                            <el-option label="二钻号金币" value="二钻号金币"></el-option>
                                            <el-option label="三钻号金币" value="三钻号金币"></el-option>
                                            <el-option label="四钻号金币" value="四钻号金币"></el-option>
                                            <el-option label="五钻及以上金币" value="五钻及以上金币"></el-option>
                                    </el-select> -->
                                      <el-select v-model="formData.mhry" >
                                            <el-option  label="不要求" value="不要求" ></el-option>
                                            <el-option  :label="item.title" :value="item.title" v-for="(item,index) in primary.credit_list" :key="index" ></el-option>
                                      </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取对应的增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="9">
                                <el-form-item label="买号自动打标:">
                                    <el-radio-group v-model="formData.LimitBuyerMark" >
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="15" class="tips">系统对接单买号、关键词自动打标，增加下单权重，增值费+{{primary.added_value.buyer_auto_mark_merchant_fee}}金币/单</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.need_follow_shop_show =1">
                            <el-col :span="9">
                                <el-form-item label="要求关注店铺:">
                                    <el-radio-group v-model="formData.LimitCollectShop">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{primary.added_value.need_follow_shop_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.need_collect_product_show">
                            <el-col :span="9">
                                <el-form-item label="要求收藏宝贝:">
                                    <el-radio-group v-model="formData.LimitCollectGoods">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{primary.added_value.need_collect_product_merchant_fee}} 金币 增值费</el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="primary.added_value.need_add_cart_show">
                            <el-col :span="9">
                                <el-form-item label="要求加入购物车:">
                                    <el-radio-group v-model="formData.LimitAddShoppingCart">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{primary.added_value.need_add_cart_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.need_service_talk_show">
                            <el-col :span="9">
                                <el-form-item label="要求和客服聊天:">
                                    <el-radio-group v-model="formData.LimitChat">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{primary.added_value.need_service_talk_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.need_verify_buyer_show">
                            <el-col :span="9">
                                <el-form-item label="要求审核买号:">
                                    <el-radio-group v-model="formData.LimitAuditAccount">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不审核</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">审核</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{primary.added_value.need_verify_buyer_merchant_fee}} 金币 增值费</el-col>
                        </el-row>


                        <el-row :gutter="20" v-if="primary.added_value.huabei_credit_pay_show">
                            <el-col :span="9">
                                <el-form-item label="花呗/信用卡付款:">
                                    <el-radio-group v-model="formData.LimitCreditCard">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不允许</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">允许</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="8" class="tips">允许花呗/信用卡付款 增值费 +{{primary.added_value.huabei_credit_pay_merchant_fee}} 金币/单 </el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="primary.added_value.need_buyer_sex_show">
                            <el-col :span="10">
                                <el-form-item label="要求买号性别:">
                                    <el-radio-group v-model="formData.LimitSex">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">男</el-radio>
                                        <el-radio :label="2" border style="margin:0px 10px 0px 0px;">女</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{primary.added_value.need_buyer_sex_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                        
                        <el-row :gutter="20" v-if="primary.added_value.need_buyer_age_range_show">
                            <el-col :span="9">
                                <el-form-item label="要求买号年龄:">            
                                     <el-select v-model="formData.LimitAge">
                                         <el-option label="不要求" :value="0"  ></el-option>
                                         <el-option :label="item" :value="item" v-for="(item,index) in primary.age_range" :key="index"   ></el-option>
                                     </el-select>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{primary.added_value.need_buyer_age_range_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.buyer_area_limited_show">
                            <el-col :span="11">
                                <el-form-item label="限制买号地区:">
   
                                       <el-select  v-model="formData.LimitArea" placeholder="请选择限制买号地区" multiple style="width:100%;">
                                            <el-option-group
                                            v-for="(group,index) in primary.region"
                                            :key="index"
                                            :label="group.title">
                                            <el-option
                                                v-for="item in group.province_list"
                                                :key="item.id"
                                                :label="item.title"
                                                :value="item.id"
                                                >
                                            </el-option>
                                            </el-option-group>
                                        </el-select>
                                </el-form-item>

                            </el-col>
                            <el-col :span="13" class="tips">被选中的地区将禁止接活动 选择此项将收取 {{primary.added_value.buyer_area_limited_merchant_fee}} 金币 增值费</el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="primary.added_value.buyer_category_limited_show">
                            <el-col :span="11">
                                <el-form-item label="要求买号类目:">
                                    <el-select v-model="formData.LimitCategory" multiple :multiple-limit="3" style="width:100%;">
                                            <el-option label="综合商品" value="9"></el-option>
                                    </el-select>
                                </el-form-item>

                            </el-col>
                            <el-col :span="13" class="tips">买号的常购类目中包含被选中的类目将允许接活动 选择此项将收取 {{primary.added_value.buyer_category_limited_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                    </el-collapse-item>
                </el-card>

                <el-card class="box-card task-remark">
                    <el-collapse-item name="4">
                        <template slot="title">
                            <h2 class="list_name">4. 增值服务</h2>
                        </template>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-divider></el-divider>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="0&&formData.PlatformId!='4'">
                            <el-col :span="8">
                                <el-form-item label="降权包赔:">
                                    <el-radio-group v-model="formData.PayForRightDown">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不赔</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">包赔</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16" class="tips">降权包赔 要求此项将收取 {{sCost.payForRightDown}} 金币 增值费</el-col>
                        </el-row>


                        <el-row :gutter="20" v-if="1">
                            <el-col :span="7">
                                <el-form-item label="搭配商品数量:">
                                    <el-input-number v-model="formData.CollocationNum" :precision="0" :min="0" :max="10" label="商品数量"></el-input-number>

                                </el-form-item>
                            </el-col>
                            <el-col :span="16" class="tips">搭配商品购买的数量 要求此项将收取 {{sCost.collocationNum}} 金币/个 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.delay_buy_time_show">
                            <el-col :span="7">
                                <el-form-item label="延迟购买时间:">
                                    <el-input-number v-model="formData.DelayBuyDay" :min="0" :max="240" label=""></el-input-number>

                                    
                                </el-form-item>
                            </el-col>
                            
                            <el-col :span="6" class="tips" style="margin-top:4px;">*单位：小时 选0为不启用此项</el-col>
                            <el-col :span="5" class="tips" style="margin-top:4px;">此项将收取 {{primary.added_value.delay_buy_time_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="0" v-if="primary.added_value.before_in_shop_compare_show">
                            <el-col :span="17">
                                <el-form-item label="进店前货比:">
                                    <el-radio-group v-model="formData.ContrastNum">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">货比1家</el-radio>
                                        <el-radio :label="2" border style="margin:0px 10px 0px 0px;">货比2家</el-radio>
                                        <el-radio :label="3" border style="margin:0px 10px 0px 0px;">货比3家</el-radio>
                                        <el-radio :label="4" border style="margin:0px 10px 0px 0px;">货比4家</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3" style="margin-left:-30px;">
                                <el-form-item label="" prop="ContrastNumRemark" label-width="0">
                                    <el-popover placement="top"
                                                title=""
                                                width="200"
                                                trigger="hover"
                                                content="要求试客货比商品的价格区间描述,例如：10-100金币">
                                        <div slot="reference">
                                            <el-input v-model="formData.ContrastNumRemark" :disabled="formData.ContrastNum==0" size="small" style="width:110px;padding:0 2px;" placeholder="价格区间描述"></el-input>
                                        </div>
                                    </el-popover>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" style="margin-left:10px;" class="tips">此项收{{primary.added_value.before_in_shop_compare_merchant_fee}}金币/家增值费</el-col>
                        </el-row>

                        <el-row :gutter="0" v-if="primary.added_value.after_in_shop_compare_show">
                            <el-col :span="17">
                                <el-form-item label="进店后货比:">
                                    <el-radio-group v-model="formData.ContrastNumLater">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">货比1家</el-radio>
                                        <el-radio :label="2" border style="margin:0px 10px 0px 0px;">货比2家</el-radio>
                                        <el-radio :label="3" border style="margin:0px 10px 0px 0px;">货比3家</el-radio>
                                        <el-radio :label="4" border style="margin:0px 10px 0px 0px;">货比4家</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3" style="margin-left:-30px;">
                                <el-form-item label="" prop="ContrastNumLaterRemark" label-width="0">
                                    <el-popover placement="top"
                                                title=""
                                                width="200"
                                                trigger="hover"
                                                content="要求试客货比商品的价格区间描述,例如：10-100金币">
                                        <div slot="reference">
                                            <el-input v-model="formData.ContrastNumLaterRemark" :disabled="formData.ContrastNumLater==0" size="small" style="width:110px;padding:0 2px;" placeholder="价格区间描述"></el-input>
                                        </div>
                                    </el-popover>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" style="margin-left:10px;" class="tips">此项收{{sCost.contrastNumLater}}金币/家增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.view_product_nums_show">
                            <el-col :span="14">
                                <el-form-item label="浏览商品数量:">
                                    <el-radio-group v-model="formData.BrowseNum">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">浏览1个</el-radio>
                                        <el-radio :label="2" border style="margin:0px 10px 0px 0px;">浏览2个</el-radio>
                                        <el-radio :label="3" border style="margin:0px 10px 0px 0px;">浏览3个</el-radio>
                                    </el-radio-group>

                                </el-form-item>
                            </el-col>
                            <el-col :span="9" class="tips">要求试客浏览副宝贝，将收取 {{primary.added_value.after_in_shop_compare_merchant_fee}} 金币 增值费</el-col>
                        </el-row>


                        <el-row :gutter="0" v-if="primary.added_value.praise_type_show">
                            <el-col :span="18">
                                <el-form-item label="好评方式:">
                                    <el-radio-group v-model="formData.RemarkType">
                                            <el-radio :label="0" border style="margin:0px 10px 0px 0px;">默认五星</el-radio>
                                            <el-radio :label="1" border style="margin:0px 10px 0px 0px;">自由发挥</el-radio>
                                            <el-radio :label="2" border style="margin:0px 10px 0px 0px;">指定评语</el-radio>
                                            <el-radio :label="3" border style="margin:0px 10px 0px 0px;">评语带图</el-radio>
                                            <el-radio :label="4" border style="margin:0px 10px 0px 0px;">评语带视频</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3" class="small_input flex">
                                延时
                                <el-popover placement="top"
                                            title=""
                                            width="200"
                                            trigger="hover"
                                            content="发货之后延时多少小时收货好评，如不填写或者填0为不限制时间，试客将在物流签收后自由收货">
                                    <div slot="reference">
                                        <el-input v-model="formData.RemarkDelay" :disabled="formData.RemarkType==0" size="mini" style="width:35px;padding:0 2px;" class="yanshi"></el-input>
                                    </div>
                                </el-popover>小时
                            </el-col>
                            <el-col :span="3" class="tips">收取 {{primary.added_value.praise_type_2_merchant_fee}} 金币增值费</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.RemarkType==2">
                                <div v-for="(item, index) in formData.RemarkTypes" :key="index">
                                    <el-row :gutter="10">
                                        <el-form-item :label="'评价' + (index+1)+':'" :prop="'RemarkTypes.' + index +'.Remark'" :rules="RemarkTypes.Remark">
                                            <el-col :span="20">
                                                <el-input v-model="item.Remark" placeholder="评价"></el-input>
                                            </el-col>
                                            <el-col :span="3">
                                                <el-button v-if="index==0" v-on:click.prevent="addRemarkType()">增加</el-button>
                                                <el-button v-if="index!=0" v-on:click.prevent="removeRemarkType(item)">删除</el-button>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.RemarkType==3">
                                <div v-for="(item, index) in formData.RemarkTypes" :key="index">
                                    <el-row :gutter="10">
                                        <el-form-item :label="'评价' + (index+1)+':'" :prop="'RemarkTypes.' + index +'.Remark'" :rules="RemarkTypes.Remark">
                                            <el-col :span="20">
                                                <el-input v-model="item.Remark" placeholder="评价"></el-input>
                                            </el-col>
                                            <el-col :span="3">
                                                <el-button v-if="index==0" v-on:click.prevent="addRemarkType()">增加</el-button>
                                                <el-button v-if="index!=0" v-on:click.prevent="removeRemarkType(item)">删除</el-button>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                    <el-row :gutter="10" style="margin-bottom:20px;">
                                        <el-col :span="2" style="margin-left:120px;">
                                            <el-form-item label-width="0px" :prop="'RemarkTypes.' + index +'.Pic1'" :rules="RemarkTypes.Pic">
                                                <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic1_'+index" :src="item.Pic1" path="Task"></eku-upload>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic2_'+index" :src="item.Pic2" path="Task"></eku-upload>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic3_'+index" :src="item.Pic3" path="Task"></eku-upload>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic4_'+index" :src="item.Pic4" path="Task"></eku-upload>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic5_'+index" :src="item.Pic5" path="Task"></eku-upload>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-collapse-transition>

                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.RemarkType==4">
                                <div v-for="(item, index) in formData.RemarkTypes" :key="index" >
                                    <el-row :gutter="10">
                                        <el-form-item :label="'评价' + (index+1)+':'" :prop="'RemarkTypes.' + index +'.Remark'" :rules="RemarkTypes.Remark">
                                            <el-col :span="20">
                                                <el-input v-model="item.Remark" placeholder="评价"></el-input>
                                            </el-col>
                                            <el-col :span="3">
                                                <el-button v-if="index==0" v-on:click.prevent="addRemarkType()">增加</el-button>
                                                <el-button v-if="index!=0" v-on:click.prevent="removeRemarkType(item)">删除</el-button>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                    <el-row :gutter="10" style="margin-bottom:20px;">
                                        <el-col :span="4" style="margin-left:120px;">
                                            <el-form-item label-width="0px" :prop="'RemarkTypes.' + index +'.Video'" :rules="RemarkTypes.Video">
                                                <eku-upload-video v-on:uploaded="uploadRemarkTypes" :attr="'Video_'+index" :src="item.Video" path="Task"></eku-upload-video>
                                            </el-form-item>
                                        </el-col>

                                        <el-col :span="2" style="margin-left:20px;">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic1_'+index" :src="item.Pic1" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic2_'+index" :src="item.Pic2" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic3_'+index" :src="item.Pic3" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic4_'+index" :src="item.Pic4" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadRemarkTypes" :attr="'Pic5_'+index" :src="item.Pic5" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-collapse-transition>






                        <el-row :gutter="0" v-if="1">
                            <el-col :span="18">
                                <el-form-item label="追评方式:">
                                    <el-radio-group v-model="formData.AppendRemarkType">
                                                <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不评价</el-radio>
                                                <el-radio :label="1" border style="margin:0px 10px 0px 0px;">自由发挥</el-radio>
                                                <el-radio :label="2" border style="margin:0px 10px 0px 0px;">指定评语</el-radio>
                                                <el-radio :label="3" border style="margin:0px 10px 0px 0px;">评语带图</el-radio>
                                                <el-radio :label="4" border style="margin:0px 10px 0px 0px;">评语带视频</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>

                            <el-col :span="3" class="small_input flex">
                                延时
                                <el-popover placement="bottom"
                                            title=""
                                            width="200"
                                            trigger="hover"
                                            content="发货之后延时多少小时才可以追评，不填写或者填0为不限制时间">
                                    <div slot="reference">
                                        <el-input v-model="formData.AppendRemarkDelay" :disabled="formData.AppendRemarkType==0" size="mini" style="width:35px;padding:0 2px;" class="yanshi"></el-input>
                                    </div>
                                </el-popover>小时
                            </el-col>
                            <el-col :span="3" class="tips">收取 {{}} 金币 增值费</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.AppendRemarkType==2">
                                <div v-for="(item, index) in formData.AppendRemarkTypes" :key="index">
                                    <el-row :gutter="10">
                                        <el-form-item :label="'追评' + (index+1)+':'" :prop="'AppendRemarkTypes.' + index +'.Remark'" :rules="AppendRemarkTypes.Remark">
                                            <el-col :span="20">
                                                <el-input v-model="item.Remark" placeholder="追评"></el-input>
                                            </el-col>
                                            <el-col :span="3">
                                                <el-button v-if="index==0" v-on:click.prevent="addAppendRemarkType()">增加</el-button>
                                                <el-button v-if="index!=0" v-on:click.prevent="removeAppendRemarkType(item)">删除</el-button>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.AppendRemarkType==3">
                                <div v-for="(item, index) in formData.AppendRemarkTypes" :key="index">
                                    <el-row :gutter="10">
                                        <el-form-item :label="'追评' + (index+1)+':'" :prop="'AppendRemarkTypes.' + index +'.Remark'" :rules="AppendRemarkTypes.Remark">
                                            <el-col :span="20">
                                                <el-input v-model="item.Remark" placeholder="追评"></el-input>
                                            </el-col>
                                            <el-col :span="3">
                                                <el-button v-if="index==0" v-on:click.prevent="addAppendRemarkType()">增加</el-button>
                                                <el-button v-if="index!=0" v-on:click.prevent="removeAppendRemarkType(item)">删除</el-button>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                    <el-row :gutter="10" style="margin-bottom:20px;">
                                        <el-col :span="2" style="margin-left:120px;">
                                            <el-form-item label-width="0px" :prop="'AppendRemarkTypes.' + index +'.Pic1'" :rules="AppendRemarkTypes.Pic">
                                                <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic1_'+index" :src="item.Pic1" path="Task"></eku-upload>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic2_'+index" :src="item.Pic2" path="Task"></eku-upload>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic3_'+index" :src="item.Pic3" path="Task"></eku-upload>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic4_'+index" :src="item.Pic4" path="Task"></eku-upload>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic5_'+index" :src="item.Pic5" path="Task"></eku-upload>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-collapse-transition>

                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.AppendRemarkType==4">
                                <div v-for="(item, index) in formData.AppendRemarkTypes" :key="index">
                                    <el-row :gutter="10">
                                        <el-form-item :label="'评价' + (index+1)+':'" :prop="'AppendRemarkTypes.' + index +'.Remark'" :rules="AppendRemarkTypes.Remark">
                                            <el-col :span="20">
                                                <el-input v-model="item.Remark" placeholder="评价"></el-input>
                                            </el-col>
                                            <el-col :span="3">
                                                <el-button v-if="index==0" v-on:click.prevent="addAppendRemarkType()">增加</el-button>
                                                <el-button v-if="index!=0" v-on:click.prevent="removeAppendRemarkType(item)">删除</el-button>
                                            </el-col>
                                        </el-form-item>
                                    </el-row>
                                    <el-row :gutter="10" style="margin-bottom:20px;">
                                        <el-col :span="4" style="margin-left:120px;">
                                            <el-form-item label-width="0px" :prop="'AppendRemarkTypes.' + index +'.Video'" :rules="AppendRemarkTypes.Video">
                                                <eku-upload-video v-on:uploaded="uploadAppendRemarkTypes" :attr="'Video_'+index" :src="item.Video" path="Task"></eku-upload-video>
                                                <p style="text-align:center;" class="tips">上传视频</p>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="2" style="margin-left:20px;">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic1_'+index" :src="item.Pic1" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic2_'+index" :src="item.Pic2" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic3_'+index" :src="item.Pic3" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic4_'+index" :src="item.Pic4" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                        <el-col :span="2">
                                            <eku-upload v-on:uploaded="uploadAppendRemarkTypes" :attr="'Pic5_'+index" :src="item.Pic5" path="Task"></eku-upload>
                                            <p class="tips">上传图片</p>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-collapse-transition>


                        <el-row :gutter="20" v-if="formData.PlatformId!='3'&&1">
                            <el-col :span="9">
                                <el-form-item label="搭配商品:"> 

                                    <el-radio-group v-model="formData.LimitSubProdShow">
                                            <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不启用</el-radio>
                                            <el-radio :label="1" border style="margin:0px 10px 0px 0px;">启用</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" class="tips">有多件下单需求的，请开启并填写副宝贝信息 （启用此项将收取 {{sCost.limitSubProd}} 金币/个 增值费）</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.LimitSubProdShow ==1">
                                <div v-for="(item, index) in formData.LimitSubProd.LimitSubProds" :key="index" class="mt-1">
                                    <el-row :gutter="10" class="flex align-center">
                                        <el-col :span="7">
                                            <el-form-item   >
                                                <el-input  v-model="item.url"  placeholder="请输入商品链接"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="7">
                                            <el-form-item label-width= "0px">
                                                <el-input   v-model="item.title"  placeholder="请输入商品标题"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="3">
                                            <el-form-item label-width="0px" >
                                                <el-input   v-model="item.price" placeholder="商品价格"></el-input>
                                                
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="3">
                                          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" 
                                            :show-file-list="false" :on-success="photo_success" :before-upload="photo_before">
    
                                                  <img v-if="item.imageUrl" :src="item.imageUrl" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                          </el-upload>
                                        </el-col>
                                        <el-col :span="3">
                                            <el-button v-if="index==0" size="small" v-on:click.prevent="addLimitSubProd()">增加</el-button>
                                            <el-button v-if="index!=0" size="small" v-on:click.prevent="removeLimitSubProd(item)">删除</el-button>
                                        </el-col>

                                    </el-row>
                                    
                                </div>
                            </el-card>
                        </el-collapse-transition>

                    </el-collapse-item>
                </el-card>



                <el-card class="box-card">
                    <el-collapse-item name="5">
                        <template slot="title">
                            <h2 class="list_name">5. 其他</h2>
                        </template>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-divider></el-divider>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1">
                            <el-col :span="14">
                                <el-form-item label="礼品服务:">
                                    <el-radio-group v-model="formData.IsExpress">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不使用</el-radio>
                                        <!-- <el-radio :label="1" v-if="false" border style="margin:0px 10px 0px 0px;">KBKD</el-radio> -->
                                        <el-radio :label="2" border style="margin:0px 10px 0px 0px;">选择礼品</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                        </el-row>

                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:1px;margin-bottom:20px;"
                                     v-if="formData.IsExpress==1">
                                <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="选择KD：">
                                            <el-select v-model="formData.ExpressCode" placeholder="选择KD" style="width:300px;">
                                                <el-option :label="item.Name+' '+'(￥'+item.SellingPrice+')'" :value="item.Id" v-for="(item,index) in getExpressList" :key="index"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" style="margin-bottom:-20px;">
                                    <el-col :span="24">
                                        <el-form-item label="发货地址：">
                                            {{getAddress}}
                                        </el-form-item>

                                    </el-col>

                                </el-row>
                            </el-card>

                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:1px;margin-bottom:20px;"
                                     v-if="formData.IsExpress==2">
                                <el-row :gutter="20">
                                    <el-col :span="24">
                                        <div class="gift_express_box">
                                            <ul class="imglist">

                                                <li v-for="(item, index) in giftExpressList" :key="index">
                                                    <img :src="item.GoodsImg" />
                                                    <span class="title">{{item.Name}}</span>
                                                    <span class="title" style="padding-bottom:5px;">【{{item.StoreName}}】</span>
                                                    <div class="money">
                                                        <div class="left"><el-radio :label="item.Id" v-model="formData.ExpressCode" size="small">{{item.Price}}金币</el-radio></div>

                                                    </div>
                                                </li>


                                            </ul>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" style="margin-bottom:-20px;">
                                    <el-col :span="24" style="margin-top:10px;margin-bottom:10px;margin-left:23px;">
                                        <span class="tips">发货地址：{{getGiftAddress}}</span>
                                    </el-col>

                                </el-row>
                            </el-card>
                        </el-collapse-transition>

                        <el-row :gutter="20">
                            <el-col :span="7">
                                <el-form-item label="追加金币:">
                                    <el-input-number v-model="formData.AppendMoney" :precision="2" :min="0" label="追加金币"></el-input-number>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16" class="tips">填入给试客的金币奖励</el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="9">
                                <el-form-item label="活动定时:">
                                    <el-radio-group v-model="formData.LimitPutOn">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不启用</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">启用</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" class="tips">定时上架的数量总数应该与此活动的总数量一致 （启用此项将收取 {{sCost.limitPutOn}} 金币 增值费）</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.LimitPutOn!=0">
                                <el-row :gutter="10" v-for="(item, index) in formData.LimitPutOns" :key="index">
                                    <el-col :span="9">
                                        <el-form-item label-width="130px" :label="'定时' + (index+1)+':'" :prop="'LimitPutOns.' + index +'.PutTime'" :rules="LimitPutOns.PutTime">
                                            <el-date-picker v-model="item.PutTime"
                                                            popper-class="puttime"
                                                            value-format="yyyy-MM-dd HH:mm:ss"
                                                            type="datetime"
                                                            placeholder="选择开始时间"
                                                            align="right"
                                                            :picker-options="PutTimeOptions.PickerOptions"
                                                            style="width:185px;">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-form-item label-width="0px" :prop="'LimitPutOns.' + index +'.Interval'" :rules="LimitPutOns.Interval">
                                            <el-input v-model="item.Interval" placeholder="间隔分钟"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-form-item label-width="0px" :prop="'LimitPutOns.' + index +'.Num'" :rules="LimitPutOns.Num">
                                            <el-input v-model="item.Num" placeholder="发布几单"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="2">
                                        <el-button v-if="index==0" size="small" v-on:click.prevent="addLimitPutOn()">+</el-button>
                                        <el-button v-if="index!=0" size="small" v-on:click.prevent="removeLimitPutOn(item)">-</el-button>
                                    </el-col>

                                    <el-col :span="6" style="margin-left:-20px;">
                                        <el-tag>{{getLimitPutOnsEndTime(item.PutTime,item.Interval,item.Num)}}</el-tag>
                                    </el-col>
                                </el-row>

                            </el-card>
                        </el-collapse-transition>

                        <el-row :gutter="20" v-if="0">
                            <el-col :span="10">
                                <el-form-item label="到期时间:" prop="TaskTimeout">
                                    <el-date-picker size="small" v-model="formData.TaskTimeout"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        type="datetime"
                                        :picker-options="TaskTimeOutOptions.PickerOptions"
                                        placeholder="选择到期时间">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            
                            <el-col :span="14" class="tips">提示：到期后系统会自动取消活动，存在几分钟延时属正常现象</el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="10">
                                <el-form-item label="模版名称:" prop="TaskTempName">
                                    <el-input v-model="formData.TaskTempName"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" class="tips">提示: 不填写名称则默认不创建模版</el-col>
                        </el-row>
                        
                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="留言提醒:" prop="TaskTip">
                                    <el-input v-model="formData.TaskTip"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                    </el-collapse-item>
                </el-card>



                <li style="margin-top: 45px;text-align:center">

                    <el-button type="primary" >提交</el-button>
                    <el-button >重置</el-button>


                </li>
            </el-collapse>
        </el-form>

        <div class="el-notification right" style="bottom: 16px; z-index: 2023;width:auto;">

            <div class="el-notification__group is-with-icon" style="margin-left:23px;">
                <h2 class="el-notification__title">
                    <i class="el-notification__icon el-icon-coin" style="color:#409EFF;font-size:20px;"></i>
                    活动费用预算
                </h2>
                <div class="el-notification__content" style="width:190px;">
                    <div  style="margin-top:20px;"></div>
                </div>
            </div>
        </div>
        <el-dialog title="示例说明"
                   :lock-scroll="false"
                   width="30%"
                   center>
            <div class="exContent"><span ></span></div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" v-on:click="exampleDialogVisible = false">关 闭</el-button>
            </span>
        </el-dialog>
    </ul>

    </div>    
</template>
<script>
import {get_add,post_computed,post_add} from'@/network/merchant/sellTaskMoney/add'
export default {
    data(){
        return{
            formData:{
                PlatformId:1,
                ShowUnitPrice:1,
                TaskCount:1 ,//活动数量
                EnterShopType:1,
                screenClipListID:0,      //卡片类型
                mhry:'不要求',
                KeyWords:{               
                    KeyWord:[{
                        value:'',
                    }],
                    Describe:'',
                    Num:'',
                    KeyWordnumber:2,        
                },
                LimitSubProdShow:0, //商品搭配显示
                LimitSubProd:{    //搭配商品 --链接
                    LimitSubProds:[{
                            url:'123123',
                            title:'dfdsfs',
                            price:'3444',
                            imageUrl:''
                    }],
                LimitSubProdsNumber:1   //链接数量和
                }
                
            },
               imageUrl:'',
              screenClipList:[
                    {   ID:0,
                        name:'小黑盒子',
                        title:'小黑盒是为用户寻找新品，而且是限量版的精品，其实就是新品孵化，建议新品期操作！'
                        
                    },{   ID:1,
                        name:'微详情',
                        title:'微详情是一个由简版商品详情卡片构成的无尽商品流，微详情入口提交，可以提高手淘推荐流量！'
                        
                    },{   ID:2,
                        name:'手淘推荐',
                        title:'手淘首页改版后，推荐流量获得更大，宝贝需要设置微详情！'    
                    },{   ID:3,
                        name:'猜你喜欢',
                        title:'猜你喜欢入口为了增加手淘推荐流量，多种方式进店，千人千面，减少稽查，建议搭配搜索流量叠加使用！'    
                    },{   ID:4,
                        name:'问大家',
                        title:'用户通过问大家进入，进店路径就会变掉，干预问大家，可以间接带动内容化权重！'    
                    },{   ID:5,
                        name:'品牌特卖',
                        title:'聚划算-品牌特卖淘宝天猫都适合，没有报名聚划算的也可以多渠道入口做基础销量！'    
                    },{   ID:6,
                        name:'单品优惠',
                        title:'首单优惠入口，宝贝无需报名首单优惠依然可以卡屏！'    
                    },{ 
                        ID:7,
                        name:'淘金币',
                        title:'卡位商品可以不报名淘金币活动，但一定要开通淘金币抵现，或者无法卡在淘金币页面！'    
                    }
                ], //卡屏类型
              dialogImageUrl: '',
              dialogVisible: false,
            sCost:{},//金币
            rules:{},
            currRefundTypeCustomEnable:1,               
            getShopList:{}, //店铺数
            tmplId:{},   //选择模板
            bindShopLink:[], //绑定店铺
            activeNames: ['1','2','3','4','5'], //折叠面板展开

            primary:"" //基础属性

        }
    },
    created(){
        get_add().then(res=>{
            if(res.code==1){
                this.primary = res.data
            }
            console.log( this.primary)
        })
    },
    computed:{
        ClipList(){
            return this.screenClipList[this.formData.screenClipListID].title
        }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },

    addKeyWord() {
      this.formData.KeyWords.KeyWord.push({
          value:'',
          key: Date.now()
        });
        console.log( this.formData.KeyWords.KeyWord)
        // console.log(this.KeyWords)
      },
      removeKeyWord(item){
        var index = this.formData.KeyWords.KeyWord.indexOf(item)
        if (index !== -1) {
           this.formData.KeyWords.KeyWord.splice(index, 1)
        }
      },

      addLimitSubProd() {
      this.formData.LimitSubProd.LimitSubProds.push({
          value:'',
          key: Date.now()
        });
        console.log( this.formData.KeyWords.KeyWord)
        // console.log(this.KeyWords)
      },
      removeLimitSubProd(item){
        var index = this.formData.LimitSubProd.LimitSubProds.indexOf(item)
        if (index !== -1) {
           this.formData.LimitSubProd.LimitSubProds.splice(index, 1)
        }
      },


        ///图片上传
       photo_success(res, file) {
        this.formData.LimitSubProd.LimitSubProds.imageUrl = URL.createObjectURL(file.raw);
        // console.log(file.raw);
        console.log(file)

      },
      photo_before(file) {
        const isJPG = file.type === 'image/jpeg';
        console.log(file.type)
        const isLt2M = file.size / 1024 / 1024 < 2;
        
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>
<style scoped>
    ul{
        list-style: none;
    }
    .list_name{
        color: #409EFF;
    }
    .yanshi .el-input__inner{
        padding:0px 0px!important;
    }

    /* 上传图片 */
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 8px;
    border: 3px dotted rgb(209, 209, 209) ;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 5px;
  }
    

</style>