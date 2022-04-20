<template>
    <div style="width:1050px;background-color:white" v-if="primary">
         <h2 class="px-3 py-2 border-bottom" style="margin:0px">发布活动 </h2>
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
                                    <el-radio-group v-model="formData.platform">                             
                                            <el-radio :label="index+1" border style="margin:0px 10px 0px 0px;" v-for="(item,index) in primary.platform" :key="index" >{{item.title}}</el-radio>
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
                                    <el-radio-group v-model="formData.terminal_id">
                                            <el-radio label="1" border style="margin:0px 10px 0px 0px;">手机端</el-radio>
                                            <el-radio label="2" border style="margin:0px 10px 0px 0px;">电脑端</el-radio>

                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="所属店铺:">
                                    <el-select v-model="formData.shop_id" placeholder="请选择店铺" filterable>
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
                                <el-form-item label="商品类目:" prop="category">
                                    <el-select v-model="formData.category" placeholder="请选择商品类目">
                                        <el-option label="请选择商品类目" v-for="(item,index) in primary.category" :key="index" :value="0"></el-option>
                                        <el-option label="综合商品" :value="9"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" style="padding-top:10px;"></el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品链接:" prop="product_url">
                                    <el-input v-model="formData.product_url" width="100%">
                                        

                                    </el-input>

                                </el-form-item>
                            </el-col>

                            <el-col :span="4">
                            </el-col>

                        </el-row>


                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品名称:" prop="product_title">
                                    <el-input v-model="formData.product_title" width="100%"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="4" style="padding-top:10px;"></el-col>

                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <el-form-item label="商品规格:" prop="product_spec">
                                    <el-input v-model="formData.product_spec"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" style="padding-top:10px;"></el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="商品单价:" prop="product_price">
                                    <el-input-number v-model="formData.product_price" :min="0" :precision="2" :step="1" value="0"></el-input-number>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="每单买:" prop="product_nums">
                                    <el-input-number v-model="formData.product_nums" :min="1" :precision="0" :step="1" value="0"></el-input-number> 个
                                </el-form-item>
                            </el-col>
                            
                        </el-row>


                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品主图:" prop="GoodsPic">
                                   <imgupload :limit_count="1" @change="spzt_img" ></imgupload>
                                   <!-- <el-upload
                                       action="/apis/api/common/upload"
                                       list-type="picture-card"
                                        :limit='1'
                                        
                                        :headers="token"
                                        :on-success="handleAvatarSuccess"
                                        :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                                        </el-upload>
                                        <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%" :src="formData.product_img" alt="">
                                        </el-dialog> -->
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <el-form-item label="活动数量:" prop="task_nums">
                                    <el-input-number v-model="formData.task_nums" :min="1" :step="1" label="活动数量"></el-input-number>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="0" v-if="primary.added_value.need_screenshot_show">
                            <el-col :span="8">
                                <el-form-item label="是否截图:">
                                    <el-radio-group v-model="formData.need_screenshot">
                                        <el-radio label="0" border style="margin:0px 10px 0px 0px;">不需要</el-radio>
                                        <el-radio label="1" border style="margin:0px 10px 0px 0px;">需要</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>

                            <el-col :span="16" class="tips">提示: 试客是否需要上传关键字、货比、浏览副宝贝、加购物车、收藏宝贝或店铺等截图</el-col>
                        </el-row>
                        <el-row :gutter="0" v-if="primary.added_value.product_verify_show">
                            <el-col :span="12">
                                <el-form-item label="商品核对:">
                                    <el-radio-group v-model="formData.product_verify">
                                        <el-radio label="0" border style="margin:0px 10px 0px 0px;">核对标题</el-radio>
                                        <el-radio label="1" border style="margin:0px 10px 0px 0px;">核对详情词</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="1" class="tips"></el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.product_verify == 1">
                                <el-row :gutter="10">

                                    <el-col :span="13">
                                        <el-form-item label="请设置商品核对关键词:" label-width="165px">
                                            {{formData.verify_keyword}}
                                            <el-input v-model="formData.verify_keyword" placeholder="请输入4-10个字的关键词"></el-input>
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
                                    <el-radio-group v-model="formData.inshop_type">
                                            <el-radio label="1" border style="margin:0px 5px 5px 0px;">搜索关键词</el-radio>
                                            <el-radio label="2" border style="margin:0px 5px 5px 0px;">搜索店铺</el-radio>
                                            <el-radio label="3" border style="margin:0px 5px 5px 0px;">直通车</el-radio>
                                            <el-radio label="4" border style="margin:0px 5px 5px 0px;">直接打开</el-radio>
                                            <el-radio label="5" border style="margin:0px 5px 5px 0px;">淘口令</el-radio>
                                            <el-radio label="6" border style="margin:0px 5px 5px 0px;">二维码</el-radio>
                                            <el-radio label="7" border style="margin:0px 5px 5px 0px;">商品卡屏</el-radio>
                                            <el-radio label="8" border style="margin:0px 5px 5px 0px;">其他渠道</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.inshop_type==1
                                    ||formData.inshop_type==2
                                    ||formData.inshop_type==3">
                                <el-row :gutter="10" v-for="(item, index) in formData.search_keywords" :key="index">

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
                                     v-if="formData.inshop_type==6">
                                <el-row :gutter="20">
                                    <el-col :span="20">
                                        <el-form-item label="二维码图:" prop="OrCodePic">
                                            <imgupload :limit_count="1" @change="erweima_upload" ></imgupload>
                                           <!-- <el-upload
                                                action="/apis/api/common/upload"
                                                list-type="picture-card"
                                                :headers="token"
                                                :on-preview="handlePictureCardPreview"
                                                :on-remove="handleRemove">
                                                <i class="el-icon-plus"></i>
                                                </el-upload>
                                                <el-dialog :visible.sync="dialogVisible">
                                                <img width="100%" :src="buy_qrcode" alt="">
                                            </el-dialog> -->
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.inshop_type==5">
                                <el-row :gutter="20">
                                    <el-col :span="10">
                                        <el-form-item label="淘口令:" prop="tb_buy_password">
                                            <el-input v-model="formData.tb_buy_password" style="width:600px;"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;"
                                     v-if="formData.inshop_type==7">

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
                                     v-if="formData.inshop_type==8">
                                <el-row :gutter="20">
                                    <el-col :span="22" class="tips" :offset="3">
                                        添加搜索商品步骤图片（如有需要可上传搜索步骤帮助找商品，最多可上传5张图）
                                    </el-col>
                                </el-row>
                               
                                    <el-row   style="margin-top:10px;margin-bottom:10px;">
                                    <el-col :span="22" :offset="3">
                                        <div class="qtjd" style="">
                                            <imgupload :limit_count="5" @change="qtjd" ></imgupload>
                                        </div>
                                   
                                    </el-col>
                                </el-row>
                        
                                
                                <el-row :gutter="10">
                                    <el-col :span="3" style="padding-left:30px;">
                                        备注说明:
                                    </el-col>
                                    <el-col :span="20">
                                        <el-input v-model="formData.other_remark" :maxlength="200" type="textarea" :rows="4" placeholder="重要！商家必须清楚描述活动商品查找的入口步骤，例如第一步手机端首页海淘抢购，第二步12：00点场，第三步88元的武夷山红茶特级正山小种500g。可配合添加步骤图片"></el-input>

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
                        <el-row :gutter="20" v-if="primary.added_value.check_fraud_show">
                            <el-col :span="9">
                                <el-form-item label="照妖镜验号:">
                                    <el-radio-group v-model="formData.check_fraud">
                                        <el-radio label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="15" class="tips">注：自动过滤降全号，建议开启，增值费 +{{primary.added_value.check_fraud_merchant_fee}} 金币</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.check_brain_show =1">
                            <el-col :span="9">
                                <el-form-item label="电商大脑验号:">
                                    <el-radio-group v-model="formData.check_brain">
                                        <el-radio label="0" border style="margin:0px 10px 0px 0px;" disabled>不要求</el-radio>
                                        <el-radio label="1" border style="margin:0px 10px 0px 0px;" disabled>要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="15" class="tips">注：自动过滤降全号，建议开启，增值费 +{{primary.added_value.need_follow_shop_merchant_fee}} 金币</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.buyer_credit_show">
                            <el-col :span="8">
                                <el-form-item label="要求买号信誉:">
                                      <el-select v-model="formData.buyer_credit_title" @change="select_buyer_id" >
                                            <el-option  label="" :value="0" >不要求</el-option>
                                            <el-option  :label="item.title+'('+item.merchant_fee+')'" name="1" :value="index" v-for="(item,index) in primary.credit_list" :key="index" ></el-option>
                                      </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取对应的增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.buyer_auto_mark_merchant_fee">
                            <el-col :span="9">
                                <el-form-item label="买号自动打标:">
                                    <el-radio-group v-model="formData.buyer_auto_mark" >
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
                                    <el-radio-group v-model="formData.need_follow_shop">
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
                                    <el-radio-group v-model="formData.need_collect_product">
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
                                    <el-radio-group v-model="formData.need_add_cart">
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
                                    <el-radio-group v-model="formData.need_service_talk">
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
                                    <el-radio-group v-model="formData.need_verify_buyer">
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
                                    <el-radio-group v-model="formData.huabei_credit_pay">
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
                                    <el-radio-group v-model="formData.need_buyer_sex">
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
                                     <el-select v-model="formData.need_buyer_age_range_message" @change="select_buyer_age">
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
   
                                       <el-select  v-model="formData.buyer_area_limited" placeholder="请选择限制买号地区" multiple style="width:100%;">
                                            <el-option-group
                                            v-for="(group,index) in primary.region"
                                            :key="index"
                                            :label="group.title">
                                            <el-option
                                                v-for="item in group.province_list"
                                                :key="item.id"
                                                :label="item.title"
                                                :value="item.title"
                                                >
                                            </el-option>
                                            </el-option-group>
                                        </el-select>
                                </el-form-item>

                            </el-col>
                            <el-col :span="13" class="tips">被选中的地区将禁止接活动 选择此项将收取 {{primary.added_value.check_self_merchant_fee}} 金币 增值费</el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="primary.added_value.buyer_category_limited_show">
                            <el-col :span="11">
                                <el-form-item label="要求买号类目:">
                                    <el-select v-model="formData.buyer_category_limited" multiple :multiple-limit="3" style="width:100%;">
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

                        <el-row :gutter="20" v-if="primary.added_value.pay_for_reduce_weight_show">
                            <el-col :span="8">
                                <el-form-item label="降权包赔:">
                                    <el-radio-group v-model="formData.pay_for_reduce_weight">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不赔</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">包赔</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16" class="tips">降权包赔 要求此项将收取 {{primary.added_value.pay_for_reduce_weight_merchant}} 金币 增值费</el-col>
                        </el-row>


                        <el-row :gutter="20" v-if="primary.added_value.add_product_show">
                            <el-col :span="7">
                                <el-form-item label="搭配商品数量:">
                                    <el-input-number v-model="formData.CollocationNum" :precision="0" :min="0" :max="10" label="商品数量"></el-input-number>

                                </el-form-item>
                            </el-col>
                            <el-col :span="16" class="tips">搭配商品购买的数量 要求此项将收取 {{primary.added_value.add_product_merchant}} 金币/个 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.delay_buy_time_show">
                            <el-col :span="7">
                                <el-form-item label="延迟购买时间:">
                                    <el-input-number v-model="formData.delay_buy_time" :min="0" :max="240" :stp="1" label=""></el-input-number>

                                    
                                </el-form-item>
                            </el-col>
                            
                            <el-col :span="6" class="tips" style="margin-top:4px;">*单位：小时 选0为不启用此项</el-col>
                            <el-col :span="5" class="tips" style="margin-top:4px;">此项将收取 {{primary.added_value.delay_buy_time_merchant_fee}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="0" v-if="primary.added_value.before_in_shop_compare_show">
                            <el-col :span="17">
                                <el-form-item label="进店前货比:">
                                    <el-radio-group v-model="formData.before_in_shop_compare">
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
                                            <el-input v-model="formData.before_compare_range" :disabled="formData.before_in_shop_compare==0" size="small" style="width:110px;padding:0 2px;" placeholder="价格区间描述"></el-input>
                                        </div>
                                    </el-popover>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" style="margin-left:10px;" class="tips">此项收{{primary.added_value.before_in_shop_compare_merchant_fee}}金币/家增值费</el-col>
                        </el-row>

                        <el-row :gutter="0" v-if="primary.added_value.after_in_shop_compare_show">
                            <el-col :span="17">
                                <el-form-item label="进店后货比:">
                                    <el-radio-group v-model="formData.after_in_shop_compare">
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
                                            <el-input v-model="formData.after_compare_range" :disabled="formData.after_in_shop_compare==0" size="small" style="width:110px;padding:0 2px;" placeholder="价格区间描述"></el-input>
                                        </div>
                                    </el-popover>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" style="margin-left:10px;" class="tips">此项收{{sCost.contrastNumLater}}金币/家增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="primary.added_value.view_product_nums_show">
                            <el-col :span="14">
                                <el-form-item label="浏览商品数量:">
                                    <el-radio-group v-model="formData.view_product_nums">
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
                                    <el-radio-group  v-model="formData.praise_type">
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
                                        <el-input v-model="formData.praise_delay_time" :disabled="formData.praise_type==0" size="mini" style="width:35px;padding:0 2px;" class="yanshi"></el-input>
                                    </div>
                                </el-popover>小时
                            </el-col>
                            <el-col :span="3" class="tips"  >收取  {{}} 金币增值费</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.praise_type==2">
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
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.praise_type==3">
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
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.praise_type==4">
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
                                    <el-radio-group v-model="formData.add_praise_type">
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
                                        <el-input v-model="formData.add_praise_delay_time" :disabled="formData.add_praise_type==0" size="mini" style="width:35px;padding:0 2px;" class="yanshi"></el-input>
                                    </div>
                                </el-popover>小时
                            </el-col>
                            <el-col :span="3" class="tips">收取 {{}} 金币 增值费</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.add_praise_type==2">
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
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.add_praise_type==3">
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
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.add_praise_type==4">
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


                        <el-row :gutter="20" v-if="formData.platform!='3'&&1">
                            <el-col :span="9">
                                <el-form-item label="搭配商品:"> 

                                    <el-radio-group v-model="formData.add_product_type">
                                            <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不启用</el-radio>
                                            <el-radio :label="1" border style="margin:0px 10px 0px 0px;">启用</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" class="tips">有多件下单需求的，请开启并填写副宝贝信息 （启用此项将收取 {{sCost.limitSubProd}} 金币/个 增值费）</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.add_product_type ==1">
                                <div v-for="(item, index) in formData.add_product" :key="index" class="mt-1">
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
                                            <div style="width:90px;height:90px"><imgupload :index="index" :limit_count="1" @change="dapeigoods" > </imgupload></div>
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
                                    <el-radio-group v-model="formData.gift_service">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不使用</el-radio>
                                        <!-- <el-radio :label="1" v-if="false" border style="margin:0px 10px 0px 0px;">KBKD</el-radio> -->
                                        <el-radio :label="2" border style="margin:0px 10px 0px 0px;">选择礼品</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                        </el-row>

                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:1px;margin-bottom:20px;"
                                     v-if="formData.gift_service==1">
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
                                     v-if="formData.gift_service==2">
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
                                    <el-input-number v-model="formData.add_coins" :precision="2" :min="0" label="追加金币"></el-input-number>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16" class="tips">填入给试客的金币奖励</el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="9">
                                <el-form-item label="活动定时:">
                                    <el-radio-group v-model="formData.timing_type">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不启用</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">启用</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" class="tips">定时上架的数量总数应该与此活动的总数量一致 （启用此项将收取 {{primary.added_value.timing_merchant_fee}} 金币 增值费）</el-col>
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.timing_type!=0">
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
                                <el-form-item label="模版名称:" prop="template_title">
                                    <el-input v-model="formData.template_title"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" class="tips">提示: 不填写名称则默认不创建模版</el-col>
                        </el-row>
                        
                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="留言提醒:" prop="notice">
                                    <el-input v-model="formData.notice"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                    </el-collapse-item>
                </el-card>



                <li style="margin-top: 45px;text-align:center">

                    <el-button type="primary" @click="submit_form" >提交</el-button>
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
                   <div style="margin-top: 20px;">
                       <p style="margin-left:64px;">商品总价：<span style="color:#409EFF;">{{formData.product_price*formData.product_nums}}</span></p>
                       <p style="margin-left:50px;" v-if="formData.product_price > 0" >基础服务费：<span style="color:#409EFF;">7</span></p>
                       <p style="margin-left:50px;">增值服务费：<span style="color:#409EFF;">{{zengzhi_computed}}</span></p>
                       <p style="margin-left:64px;">追加金币：<span style="color:#409EFF;">{{formData.AppendMoney}}</span></p>
                       <hr><p><span style="color:#409EFF;margin-left:20px;">x</span>
                            <span style="margin-left:36px;">活动数量：<span style="color:#409EFF;">{{formData.task_nums}}</span></span></p>
                            <div role="alert" class="el-alert is-center el-button--primary is-dark" style="margin-top: 20px;">
                                <div class="el-alert__content">
                                    <span class="el-alert__title">合计：{{sum}}</span>
                                    <i class="el-alert__closebtn el-icon-close" style="display: none;"></i>
                                </div>
                            </div>
                    </div>
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
import {get_add,get_shop_list,post_computed,post_add} from'@/network/merchant/sellTaskMoney/add'
import imgupload from '@/components/commom/el-upload/el-upload.vue'
export default {
    data(){
      return{
            formData:{
                    task_type:'1',   		//活动频道 默认1-试用活动
                    template:'',  			//模板
                    platform:1,  			//平台ID
                    terminal_id:'1',  		//终端 默认1-手机端 2-电脑端
                    shop_id:1,  		//所属店铺
                    category:'',  			//商品类目(单选)
                    product_url:'',  			//商品链接
                    product_title:'',  			//商品标题
                    product_spec:'',  		//商品规格
                    product_price:'0',  			//商品价格
                    product_nums:'1',  			//购买数量
                    product_img:'',  			//商品图片
                    task_nums:'1',  			//任务数量
                    need_screenshot:'0',  			//需要截图 0-不需要 1-需要 默认1
                    product_verify:"0",  			//商品核对 1-核对标题 1-核对关键词 默认1
                    verify_keyword:'',  			//核对关键词
                    inshop_type:"1",  		    //进店方式 默认1
                    RefundType:"1",     //返款平台
                    AppendMoney:'0',    //追加金币
                    CollocationNum:'0',  //搭配商品数量
                    DelayBuyDay:'0',        //延时购买时间
                    search_keywords:[{       //搜索关键词
                       value:'asdas',
                        Describe:'',
                        Num:'2',
                    }],

                    EnterShopType:1,
                    screenClipListID:0,      //卡片类型
                    RemarkType:"",      //好评方式
                    AppendRemarkType:"1",

  
                    tb_buy_password:'XXX',           //淘口令
                    buy_qrcode:'',      //二维码图片
                    print_type:'0',     //商品卡屏
                    other_images:[],       //其他聚到说明图片
                    other_remark:'',        //其他渠道备注
                    check_self:0 ,         //商家自主验号
                    check_fraud:0,  //照妖镜验号
                    check_brain:0,    
                    buyer_credit:0,     //要求买手信誉
                    buyer_credit_title:'不要求',
                    buyer_auto_mark:0,     //买号自动打标 
                    need_follow_shop:0,    //	要求关注店铺 
                    need_collect_product:0,    //要求收藏宝贝
                    need_add_cart:0,       //	要求加入购物车
                    need_service_talk:0,       //要求和客服聊天
                    need_verify_buyer:0,   //要求审核买号
                    huabei_credit_pay:0,   //花呗信用卡付款
                    need_buyer_sex:0,          //要求买号性别
                    need_buyer_age_range:0,
                    need_buyer_age_range_message:'不要求',        //要求买号年龄段
                    buyer_area_limited:'',      //要求买号地区,多个用
                    buyer_category_limited:'',      //要求买号类目,多个用’,’隔开
                    delay_buy_time:'0',             //	延迟购买时间
                    before_in_shop_compare:0,      //	要求进店前货比
                    before_compare_range:'',        //	进店前价格区间描述
                    after_in_shop_compare:0,        //进店后货比
                    after_compare_range:'',          //进店后价格区间
                    view_product_nums:0,               //浏览商品数量
                    praise_type:0,                  //好评方式
                    praise_content:[{}],            //当评论方式3 4 5
                    praise_delay_time:'0',           //评价延时时间
                    add_praise_type:0,                      //追评方式
                    add_praise_delay_time:'0',       //追评延时时间 
                    add_praise_content:[{}],           //追评 3 4 5
                    add_product_type:0,             //搭配商品
                    add_product:[                    //搭配商品,json数组
                        { url:'123123',
                          title:'dfdsfs',
                          price:'3444',
                          imageUrl:''}],              
                    pay_for_reduce_weight:0,        //降权赔付
                    timing_type:0,                  //定时任务	
                    timing_content:[{}],             //定时内容
                    gift_service:0,                 //礼品开启
                    add_coins:0,                    //追加金币
                    template_title:'',              //模板名称
                    notice:'',                      //留言提醒

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

            primary:"", //基础属性
                        
            post_data:{     //提交的数据
                task_type:'',   //活动频道 默认1-试用活动
                template:'',    //模板
                platform:'',

            }
        }
    },
    created(){
        get_add().then(res=>{   //发布任务参数接口
            if(res.code==1){
                this.primary = res.data
            }
            console.log( this.primary)
        })
       get_shop_list().then(res=>{  
           if(res.code=1){
               console.log(res);
           }
            })
            console.log();
   
    },
    methods: {
    addKeyWord() {       //添加关键词
      this.formData.search_keywords.push({
          value:'',
          Describe:'',
          Num:'', 
        });
        console.log( this.formData.search_keywords)
      },
    removeKeyWord(item){
        var index = this.formData.search_keywords.indexOf(item)
        if (index !== -1) {
           this.formData.search_keywords.splice(index, 1)
        }
      },

    erweima_upload(value){
        this.formData.buy_qrcode =value
        console.log(value+'上传成功');

    },
    //商品主图
    spzt_img(value){
        this.product_img=value
    },
    //其他聚到图片
    qtjd(value){
        this.formData.other_images.push({
          'img_url':value,
        });
         console.log(value+'上传成功');
         console.log(this.formData.other_images)
    },
    //买手荣誉下拉
    select_buyer_id(id){ this.formData.buyer_credit=id },
     //买手年龄下拉
    select_buyer_age(id){
        this.formData.need_buyer_age_range=id
        console.log(this.formData.buyer_area_limited) 
    },
     //添加商品链接
    addLimitSubProd() {  
        this.formData.add_product.push({
                url:'',
                title:'',
                price:'',
                imageUrl:''
            });
      },
    removeLimitSubProd(item){
        var index = this.formData.add_product.indexOf(item)
        if (index !== -1) {
           this.formData.add_product.splice(index, 1)
        }
      },
      //搭配商品上传的图片
    dapeigoods(id,index){
         this.formData.add_product[index].imageUrl=id
         console.log(this.formData.add_product);
     },


        ///图片上传
      
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
      },

    //提交表单
    submit_form(){  
        const data = this.formData
        post_add(data).then(res=>{
            console.log(res)
        })
    }
    },
    computed:{
    ClipList(){
            return this.screenClipList[this.formData.screenClipListID].title
        },
    //计算增值服务费
    zengzhi_computed(){
        let Count =0;
        if(this.formData.check_brain >0){
            Count+=this.primary.added_value.check_brain_merchant_fee-0
        }
        if(this.formData.buyer_auto_mark > 0){
          Count  = Count+(this.primary.added_value.buyer_auto_mark_merchant_fee-0)
        }
        if(this.formData.buyer_credit > 0){
            Count+=(this.primary.credit_list[this.formData.buyer_credit].merchant_fee-0)   //买手信誉多少钱
        }
        // if(this.primary.added_value.buyer_auto_mark > 0){
        //     Count+=this.primary.added_value.buyer_auto_mark_merchant_fee
        // }
        return Count.toFixed(2);
    },
    //计算总共
       sum(){
          var money= (this.formData.product_price*this.formData.product_nums-0)
                if(this.formData.product_price > 0){ money+=7}
                money +=(this.zengzhi_computed-0 )
                  money +=(this.formData.AppendMoney-0)
                  money = (money * this.formData.task_nums-0)
             
              
          return money.toFixed(2);
       }

    },
    components:{
        imgupload
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