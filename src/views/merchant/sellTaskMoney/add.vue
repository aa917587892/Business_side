<template>
    <div>
         <h2 class="px-3 py-2 border-bottom">
        发布活动
         </h2>

    <ul class="alipay-bind">

        <el-form :model="formData" :rules="rules" ref="ruleForm" size="small" label-width="120px" class="demo-ruleForm">
            <el-collapse >

                <el-card class="box-card">
                    <el-collapse-item name="1">
                        <template slot="title">
                            <h2>1. 基础信息</h2>
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
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>



                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="所属平台:">
                                    <el-radio-group v-model="formData.PlatformId">
                                            <el-radio :label="1" border style="margin:0px 10px 0px 0px;">淘宝/天猫</el-radio>
                                            <el-radio :label="2" border style="margin:0px 10px 0px 0px;">京东</el-radio>
                                            <el-radio :label="3" border style="margin:0px 10px 0px 0px;">拼多多</el-radio>
                                            <el-radio :label="4" border style="margin:0px 10px 0px 0px;">抖音小店</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="currRefundTypeCustomEnable==1">
                            <el-col :span="24">
                                <el-form-item label="返款方式:">
                                    <el-radio-group v-model="formData.RefundType">
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">平台返款</el-radio>
                                        <el-radio :label="3" border style="margin:0px 10px 0px 0px;">自己返款</el-radio>

                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="终端类型:">
                                    <el-radio-group v-model="formData.OrderTerminal">
                                            <el-radio :label="1" border style="margin:0px 10px 0px 0px;">手机端</el-radio>
                                            <el-radio :label="2" border style="margin:0px 10px 0px 0px;">电脑端</el-radio>

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
                                    <el-select v-model="formData.CategoryId">
                                        <el-option label="请选择商品类目" :value="0"></el-option>
                                            <el-option label="综合商品" :value="9"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="14" style="padding-top:10px;"></el-col>

                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品链接:" prop="GoodsUrl">
                                    <el-input v-model="formData.GoodsUrl" v-on:blur="getProdInfo()" width="100%">
                                        

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
                                    <el-input-number v-model="formData.ShowUnitPrice" :min="0" :precision="2" :step="1"></el-input-number>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="每单买:" prop="PaiNum">
                                    <el-input-number v-model="formData.PaiNum" :min="1" :precision="0" :step="1"></el-input-number> 个
                                </el-form-item>
                            </el-col>
                            
                        </el-row>


                        <el-row :gutter="20">
                            <el-col :span="20">
                                <el-form-item label="商品主图:" prop="GoodsPic">
                                    <!-- <eku-upload  attr="GoodsPic" :src="formData.GoodsPic" path="Task"></eku-upload> -->
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
                            <h2>2.进店方式</h2>
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
                                <el-row :gutter="10" v-for="(item, index) in formData.KeyWords" :key="index">

                                    <el-col :span="12">
                                        <el-form-item :label="'关键词' + (index+1)+':'" :prop="'KeyWords.' + index +'.KeyWord'" :rules="KeyWordsRules.KeyWord">
                                            <el-input v-model="item.KeyWord" placeholder="关键词"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label-width="0px" :prop="'KeyWords.' + index +'.Describe'" :rules="KeyWordsRules.Describe">
                                            <el-input v-model="item.Describe" placeholder="说明关键词的排序方式和页数"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-form-item label-width="0px" :prop="'KeyWords.' + index +'.Num'" :rules="KeyWordsRules.Num">
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
                                            <eku-upload v-on:uploaded="upload" attr="OrCodePic" :src="formData.OrCodePic" path="Task"></eku-upload>
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
                                            <el-radio-group v-model="formData.ScreenClipId">
                                                <el-radio-button v-for="item in screenClipList" :label="item.Id" :key="item.Id">{{item.Name}}</el-radio-button>
                                            </el-radio-group>
                                            <p style="text-align:left">
                                                {{getScreenClipRemark}}
                                            </p>
                                        </el-form-item>

                                        <p style="text-align:center">
                                            <img width="200" :src="screenClipPicData" />
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
                                <el-row :gutter="20" style="margin-top:10px;margin-bottom:10px;">
                                    <el-col :span="4" :offset="3">
                                        <eku-upload v-on:uploaded="uploadOtherPlace" attr="Pic1" :src="formData.OtherPlace.Pic1" path="Task"></eku-upload>
                                    </el-col>
                                    <el-col :span="4">
                                        <eku-upload v-on:uploaded="uploadOtherPlace" attr="Pic2" :src="formData.OtherPlace.Pic2" path="Task"></eku-upload>
                                    </el-col>
                                    <el-col :span="4">
                                        <eku-upload v-on:uploaded="uploadOtherPlace" attr="Pic3" :src="formData.OtherPlace.Pic3" path="Task"></eku-upload>
                                    </el-col>
                                    <el-col :span="4">
                                        <eku-upload v-on:uploaded="uploadOtherPlace" attr="Pic4" :src="formData.OtherPlace.Pic4" path="Task"></eku-upload>
                                    </el-col>
                                    <el-col :span="4">
                                        <eku-upload v-on:uploaded="uploadOtherPlace" attr="Pic5" :src="formData.OtherPlace.Pic5" path="Task"></eku-upload>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="10">
                                    <el-col :span="3" style="padding-left:30px;">
                                        备注说明:
                                    </el-col>
                                    <el-col :span="20">
                                        <el-input v-model="formData.OtherPlace.Remark" :maxlength="200" type="textarea" :rows="4" placeholder="重要！商家必须清楚描述活动商品查找的入口步骤，例如第一步手机端首页海淘抢购，第二步12：00点场，第三步88元的武夷山红茶特级正山小种500g。可配合添加步骤图片"></el-input>

                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-collapse-transition>
                    </el-collapse-item>
                </el-card>


                <el-card class="box-card">
                    <el-collapse-item name="3">
                        <template slot="title">
                            <h2>3. 千人千面</h2>
                        </template>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-divider></el-divider>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="9">
                                <el-form-item label="照妖镜验号:">
                                    <el-radio-group v-model="formData.LimitZyjCheckAccount">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="15" class="tips">注：自动过滤降全号，建议开启，增值费 +{{sCost.limitZyjCheckAccount}} 金币</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="9">
                                <el-form-item label="电商大脑验号:">
                                    <el-radio-group v-model="formData.LimitDsdnCheckAccount">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="15" class="tips">注：自动过滤降全号，建议开启，增值费 +{{sCost.limitDsdnCheckAccount}} 金币</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="8">
                                <el-form-item label="要求买号信誉:">
                                    <el-select v-if='formData.PlatformId==1' v-model="formData.LimitBuyLevel">
                                        <el-option label="不要求" :value="0"></el-option>
                                            <el-option :label="'白号 ('+this.sCost.limitTbBuyLevel[1]+'金币)'" :value="1"></el-option>
                                            <el-option :label="'一心号 ('+this.sCost.limitTbBuyLevel[2]+'金币)'" :value="2"></el-option>
                                            <el-option :label="'二心号 ('+this.sCost.limitTbBuyLevel[3]+'金币)'" :value="3"></el-option>
                                            <el-option :label="'三心号 ('+this.sCost.limitTbBuyLevel[4]+'金币)'" :value="4"></el-option>
                                            <el-option :label="'四心号 ('+this.sCost.limitTbBuyLevel[5]+'金币)'" :value="5"></el-option>
                                            <el-option :label="'五心号 ('+this.sCost.limitTbBuyLevel[6]+'金币)'" :value="6"></el-option>
                                            <el-option :label="'一钻号 ('+this.sCost.limitTbBuyLevel[7]+'金币)'" :value="7"></el-option>
                                            <el-option :label="'二钻号 ('+this.sCost.limitTbBuyLevel[8]+'金币)'" :value="8"></el-option>
                                            <el-option :label="'三钻号 ('+this.sCost.limitTbBuyLevel[9]+'金币)'" :value="9"></el-option>
                                            <el-option :label="'四钻号 ('+this.sCost.limitTbBuyLevel[10]+'金币)'" :value="10"></el-option>
                                            <el-option :label="'五钻及以上 ('+this.sCost.limitTbBuyLevel[11]+'金币)'" :value="11"></el-option>
                                    </el-select>
                                    <el-select v-if="formData.PlatformId==2" v-model="formData.LimitBuyLevel">
                                        <el-option label="不要求" :value="0"></el-option>
                                            <el-option :label="'新注册会员 ('+this.sCost.limitJdBuyLevel[21]+'金币)'" :value="21"></el-option>
                                            <el-option :label="'铜牌会员 ('+this.sCost.limitJdBuyLevel[22]+'金币)'" :value="22"></el-option>
                                            <el-option :label="'银牌会员 ('+this.sCost.limitJdBuyLevel[23]+'金币)'" :value="23"></el-option>
                                            <el-option :label="'金牌会员 ('+this.sCost.limitJdBuyLevel[24]+'金币)'" :value="24"></el-option>
                                            <el-option :label="'钻石会员 ('+this.sCost.limitJdBuyLevel[25]+'金币)'" :value="25"></el-option>
                                    </el-select>
                                    <el-select v-if="formData.PlatformId==0" v-model="formData.LimitBuyLevel">
                                        <el-option label="不要求" :value="0"></el-option>
                                            <el-option :label="'新会员 ('+this.sCost.limitSnBuyLevel[31]+'金币)'" :value="31"></el-option>
                                            <el-option :label="'V1会员 ('+this.sCost.limitSnBuyLevel[32]+'金币)'" :value="32"></el-option>
                                            <el-option :label="'V2会员 ('+this.sCost.limitSnBuyLevel[33]+'金币)'" :value="33"></el-option>
                                            <el-option :label="'V3会员 ('+this.sCost.limitSnBuyLevel[34]+'金币)'" :value="34"></el-option>
                                            <el-option :label="'V4会员 ('+this.sCost.limitSnBuyLevel[35]+'金币)'" :value="35"></el-option>
                                    </el-select>
                                    <el-select v-if="formData.PlatformId==3" v-model="formData.LimitBuyLevel">
                                        <el-option label="不要求" :value="0"></el-option>
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
                            <el-col :span="15" class="tips">系统对接单买号、关键词自动打标，增加下单权重，增值费+{{sCost.limitBuyerMark}}金币/单</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1">
                            <el-col :span="9">
                                <el-form-item label="要求关注店铺:">
                                    <el-radio-group v-model="formData.LimitCollectShop">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{sCost.limitCollectShop}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1">
                            <el-col :span="9">
                                <el-form-item label="要求收藏宝贝:">
                                    <el-radio-group v-model="formData.LimitCollectGoods">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{sCost.limitCollectGoods}} 金币 增值费</el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="1">
                            <el-col :span="9">
                                <el-form-item label="要求加入购物车:">
                                    <el-radio-group v-model="formData.LimitAddShoppingCart">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{sCost.limitAddShoppingCart}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="9">
                                <el-form-item label="要求和客服聊天:">
                                    <el-radio-group v-model="formData.LimitChat">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">要求</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{sCost.limitChat}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1">
                            <el-col :span="9">
                                <el-form-item label="要求审核买号:">
                                    <el-radio-group v-model="formData.LimitAuditAccount">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不审核</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">审核</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{sCost.limitAuditAccount}} 金币 增值费</el-col>
                        </el-row>


                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="9">
                                <el-form-item label="花呗/信用卡付款:">
                                    <el-radio-group v-model="formData.LimitCreditCard">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不允许</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">允许</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="8" class="tips">允许花呗/信用卡付款 增值费 +{{sCost.limitCreditCard}} 金币/单 </el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="1">
                            <el-col :span="10">
                                <el-form-item label="要求买号性别:">
                                    <el-radio-group v-model="formData.LimitSex">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不要求</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">男</el-radio>
                                        <el-radio :label="2" border style="margin:0px 10px 0px 0px;">女</el-radio>
                                    </el-radio-group>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{sCost.limitSex}} 金币 增值费</el-col>
                        </el-row>
                        
                        <el-row :gutter="20" v-if="0">
                            <el-col :span="9">
                                <el-form-item label="要求买号年龄:">
                                    <el-select v-model="formData.LimitAge">
                                        <el-option label="不要求" :value="0"></el-option>
                                            <el-option label="20岁以下" :value="1"></el-option>
                                            <el-option label="21-25岁" :value="2"></el-option>
                                            <el-option label="26-32岁" :value="3"></el-option>
                                            <el-option label="33-40岁" :value="4"></el-option>
                                            <el-option label="41岁以上" :value="5"></el-option>
                                    </el-select>
                                </el-form-item>

                            </el-col>
                            <el-col :span="6" class="tips">选择此项将收取 {{sCost.limitAge}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1">
                            <el-col :span="11">
                                <el-form-item label="限制买号地区:">
                                    <el-select v-model="formData.LimitArea" multiple style="width:100%;">
                                            <el-option label="北京" value="北京"></el-option>
                                            <el-option label="天津" value="天津"></el-option>
                                            <el-option label="河北省" value="河北省"></el-option>
                                            <el-option label="山西省" value="山西省"></el-option>
                                            <el-option label="内蒙古自治区" value="内蒙古自治区"></el-option>
                                            <el-option label="辽宁省" value="辽宁省"></el-option>
                                            <el-option label="吉林省" value="吉林省"></el-option>
                                            <el-option label="黑龙江省" value="黑龙江省"></el-option>
                                            <el-option label="青海省" value="青海省"></el-option>
                                            <el-option label="宁夏回族自治区" value="宁夏回族自治区"></el-option>
                                            <el-option label="新疆维吾尔自治区" value="新疆维吾尔自治区"></el-option>
                                            <el-option label="台湾" value="台湾"></el-option>
                                            <el-option label="香港特别行政区" value="香港特别行政区"></el-option>
                                            <el-option label="澳门特别行政区" value="澳门特别行政区"></el-option>
                                            <el-option label="钓鱼岛" value="钓鱼岛"></el-option>
                                            <el-option label="海南省" value="海南省"></el-option>
                                            <el-option label="重庆" value="重庆"></el-option>
                                            <el-option label="四川省" value="四川省"></el-option>
                                            <el-option label="贵州省" value="贵州省"></el-option>
                                            <el-option label="云南省" value="云南省"></el-option>
                                            <el-option label="西藏自治区" value="西藏自治区"></el-option>
                                            <el-option label="陕西省" value="陕西省"></el-option>
                                            <el-option label="甘肃省" value="甘肃省"></el-option>
                                            <el-option label="河南省" value="河南省"></el-option>
                                            <el-option label="湖北省" value="湖北省"></el-option>
                                            <el-option label="湖南省" value="湖南省"></el-option>
                                            <el-option label="广东省" value="广东省"></el-option>
                                            <el-option label="广西壮族自治区" value="广西壮族自治区"></el-option>
                                            <el-option label="上海" value="上海"></el-option>
                                            <el-option label="江苏省" value="江苏省"></el-option>
                                            <el-option label="浙江省" value="浙江省"></el-option>
                                            <el-option label="安徽省" value="安徽省"></el-option>
                                            <el-option label="福建省" value="福建省"></el-option>
                                            <el-option label="江西省" value="江西省"></el-option>
                                            <el-option label="山东省" value="山东省"></el-option>
                                    </el-select>
                                </el-form-item>

                            </el-col>
                            <el-col :span="13" class="tips">被选中的地区将禁止接活动 选择此项将收取 {{sCost.limitArea}} 金币 增值费</el-col>
                        </el-row>

                        <el-row :gutter="20" v-if="1">
                            <el-col :span="11">
                                <el-form-item label="要求买号类目:">
                                    <el-select v-model="formData.LimitCategory" multiple :multiple-limit="3" style="width:100%;">
                                            <el-option label="综合商品" value="9"></el-option>
                                    </el-select>
                                </el-form-item>

                            </el-col>
                            <el-col :span="13" class="tips">买号的常购类目中包含被选中的类目将允许接活动 选择此项将收取 {{sCost.limitCategory}} 金币 增值费</el-col>
                        </el-row>
                    </el-collapse-item>
                </el-card>

                <el-card class="box-card task-remark">
                    <el-collapse-item name="4">
                        <template slot="title">
                            <h2>4. 增值服务</h2>
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


                        <el-row :gutter="20" v-if="0">
                            <el-col :span="7">
                                <el-form-item label="搭配商品数量:">
                                    <el-input-number v-model="formData.CollocationNum" :precision="0" :min="0" :max="10" label="商品数量"></el-input-number>

                                </el-form-item>
                            </el-col>
                            <el-col :span="16" class="tips">搭配商品购买的数量 要求此项将收取 {{sCost.collocationNum}} 金币/个 增值费</el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
                            <el-col :span="7">
                                <el-form-item label="延迟购买时间:">
                                    <el-input-number v-model="formData.DelayBuyDay" :min="0" :max="240" label=""></el-input-number>

                                    
                                </el-form-item>
                            </el-col>
                            
                            <el-col :span="6" class="tips" style="margin-top:4px;">*单位：小时 选0为不启用此项</el-col>
                            <el-col :span="5" class="tips" style="margin-top:4px;">此项将收取 {{sCost.delayBuyDay}} 金币 增值费</el-col>
                        </el-row>
                        <el-row :gutter="0" v-if="1&&formData.PlatformId!='4'">
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
                            <el-col :span="4" style="margin-left:10px;" class="tips">此项收{{sCost.contrastNum}}金币/家增值费</el-col>
                        </el-row>

                        <el-row :gutter="0" v-if="1&&formData.PlatformId!='4'">
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
                        <el-row :gutter="20" v-if="1&&formData.PlatformId!='4'">
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
                            <el-col :span="9" class="tips">要求试客浏览副宝贝，将收取 {{sCost.browseNum}} 金币 增值费</el-col>
                        </el-row>


                        <el-row :gutter="0" v-if="1">
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
                            <el-col :span="3" class="small_input">
                                延时
                                <el-popover placement="top"
                                            title=""
                                            width="200"
                                            trigger="hover"
                                            content="发货之后延时多少小时收货好评，如不填写或者填0为不限制时间，试客将在物流签收后自由收货">
                                    <div slot="reference">
                                        <el-input v-model="formData.RemarkDelay" :disabled="formData.RemarkType==0" size="mini" style="width:35px;padding:0 2px;"></el-input>
                                    </div>
                                </el-popover>小时
                            </el-col>
                            <el-col :span="3" class="tips">收取 {{}} 金币增值费</el-col>
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

                            <el-col :span="3" class="small_input">
                                延时
                                <el-popover placement="bottom"
                                            title=""
                                            width="200"
                                            trigger="hover"
                                            content="发货之后延时多少小时才可以追评，不填写或者填0为不限制时间">
                                    <div slot="reference">
                                        <el-input v-model="formData.AppendRemarkDelay" :disabled="formData.AppendRemarkType==0" size="mini" style="width:35px;padding:0 2px;"></el-input>
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
                                    <el-radio-group v-model="formData.LimitSubProd">
                                        <el-radio :label="0" border style="margin:0px 10px 0px 0px;">不启用</el-radio>
                                        <el-radio :label="1" border style="margin:0px 10px 0px 0px;">启用</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" class="tips">有多件下单需求的，请开启并填写副宝贝信息 （启用此项将收取 {{sCost.limitSubProd}} 金币/个 增值费）</el-col>s
                        </el-row>
                        <el-collapse-transition>
                            <el-card shadow="never" style="margin-top:10px;margin-bottom:20px;" v-if="formData.PlatformId!='3'&&formData.LimitSubProd!=0">
                                <div v-for="(item, index) in formData.LimitSubProds" :key="index">
                                    <el-row :gutter="10">
                                        <el-col :span="10">
                                            <el-form-item :label="'链接' + (index+1)+':'" :prop="'LimitSubProds.' + index +'.Url'" :rules="LimitSubProds.Url">
                                                <el-input v-model="item.Url" v-on:blur="getSubProdsInfo(index)" placeholder="请输入商品链接"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="7">
                                            <el-form-item label-width="0px" :prop="'LimitSubProds.' + index +'.Title'" :rules="LimitSubProds.Title">
                                                <el-input v-model="item.Title" placeholder="请输入商品标题"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="3">
                                            <el-form-item label-width="0px" :prop="'LimitSubProds.' + index +'.Price'" :rules="LimitSubProds.Price">
                                                <el-input v-model="item.Price" placeholder="商品价格"></el-input>
                                                
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="3">
                                            <el-button v-if="index==0" size="small" v-on:click.prevent="addLimitSubProd()">增加</el-button>
                                            <el-button v-if="index!=0" size="small" v-on:click.prevent="removeLimitSubProd(item)">删除</el-button>
                                        </el-col>

                                    </el-row>
                                    <el-row :gutter="10" style="margin-bottom:20px;">
                                        <el-col :span="2" style="margin-left:120px;">
                                            <el-form-item label-width="0px" :prop="'LimitSubProds.' + index +'.Pic'" :rules="LimitSubProds.Pic">
                                                <eku-upload v-on:uploaded="uploadLimitSubProds" :attr="'Pic_'+index" :src="item.Pic" path="Task"></eku-upload>
                                            </el-form-item>
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
                            <h2>5. 其他</h2>
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
export default {
    data(){
        return{
            formData:{},
            sCost:{},//金币
            rules:{},
            currRefundTypeCustomEnable:1,
            getShopList:{}, //店铺数
            tmplId:{},   //选择模板
            bindShopLink:[] //绑定店铺
        }
    }
}
</script>
<style scoped>

</style>