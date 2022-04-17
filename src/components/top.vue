<template>
    <div class="head" style="height:100px; background-color: white;box-shadow: 0,2,0 rgba(0,0,0,1);margin-bottom: 10px;">
		<div id="" style="display:flex; margin:0 auto;max-width:1200px;padding-top: 30px;">
			<div class="logo layui-col-md3 " style="height: 55px; width: 180px;   display: inline-block;">
				<img src="@/assets/images/logo.png" style="width: 100%;height: 100%;">
			</div>
			<div class="tabbar_ layui-col-md6" style="display: flex;flex:1;display:inline; text-align: center;padding:0px 50px 0px 80px;">
				<ul class="flex "   >
					<li><router-link to="/merchant/home">首页用户</router-link></li>
					<li>增流提升</li>
					<li>电商工具</li>
					<li>电商学堂</li>
					<li>电商咨询</li>	
				</ul>
			</div>
			<el-dropdown>
				<el-button type="primary" >
				<i class="el-icon-user-solid"></i>	115505665656<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>金币</el-dropdown-item>
					<el-dropdown-item>个人中心</el-dropdown-item>
				<router-link to="/login"><el-dropdown-item>退出登陆</el-dropdown-item></router-link>	
				</el-dropdown-menu> 
			</el-dropdown>
		</div>	
	</div>
	
</template>
<script>

</script>

<style >
 	body{
		background-color:#efefef;
		margin: 0px;
	}
	a{
		text-decoration: none;
		color: black;
	}
	.text_c{
		color:  rgb(64, 158, 255);
	}
	.tabbar_ li{
	flex: 1;
/* 	width: 20%; */
	font-size: 17px;
	font-weight: bold;
	list-style: none;
	}

	.el-dropdown {
		vertical-align: top;
	}
	.el-dropdown + .el-dropdown {
		margin-left: 0px;
	}
	.el-icon-arrow-down {
		font-size: 12px;
	}
	.head .el-button--primary{
		width: 150px;
		height: 30px;
		line-height: 30px;
		padding: 0px;
		background-color: #e5414f;
		border: #e5414f;
	}
 	.head  .el-button--primary:hover{
		background-color: #e5414f;
	}
	.el-dropdown-menu {
		width: 150px;
		top: 55px!important;
	}
</style>