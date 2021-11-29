<template>
	<div class="home">
		<div ref="homeSlider" class="home--contain-slider">
			<div class="slider-header">
				<div class="slider-header-icon">
					<img src="../assets/logo.png" alt="" />
				</div>
				<div class="slider-header-title">FREEUI</div>
			</div>
			<div class="slider-nav">
				<div tag="div" :to="l1.link"  v-for="(l1, i1) in slide_navs" :key="i1">
					<div class="nav-item nav-level-1">
						<i :class="l1.icon" class="nav-item-icon"></i>
						<span class="nav-item-text">{{ l1.key }}</span>
						<span v-if="l1.sub_navs && l1.sub_navs.length" 
							class="nav-item-collapse-btn" 
							:class="{'is-collapse': l1.iscollapse}"
							@click="l1.iscollapse = !l1.iscollapse"
							style="font-size: 18px;font-style: normal;font-weight: normal;">&#708;</span>
					</div>
					<div v-if="l1.sub_navs && l1.sub_navs.length" v-show="l1.iscollapse" class="nav-level-2-list">
						<router-link tag="div" :to="l2.link" v-for="(l2, i2) in l1.sub_navs" :key="i2">
							<div class="nav-item nav-level-2">
								<i :class="l2.icon" class="nav-item-icon"></i>
								<span>{{ l2.key }}</span>
								<span v-if="l2.sub_navs && l2.sub_navs.length" 
									class="nav-item-collapse-btn"
									:class="{'is-collapse': l2.iscollapse}" 
									@click="l2.iscollapse = !l2.iscollapse"
									style="font-size: 18px;font-style: normal;font-weight: normal; ">&#708;</span>
							</div>
							<div v-if="l2.sub_navs && l2.sub_navs.length" v-show="l2.iscollapse" class="nav-level-3-list">
								<router-link tag="div" :to="l3.link" v-for="(l3, i3) in l2.sub_navs" :key="i3">
									<div class="nav-item nav-level-3">
										<span>{{ l3.key }}</span>
									</div>
								</router-link>
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<div class="slider-footer">
				<div class="collapse-btn">
					<i class="fa fa-bars slider-collapse-btn" @click="isSliderCollapse = !isSliderCollapse"></i>
				</div>
			</div>
		</div>
		<div class="home--contain-main">
			<div class="main-header">{{navTitle}}</div>
			<div class="main-contain">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		components: {},
		data() {
			return {
				navTitle: '',
				isSliderCollapse: false,
				slide_navs: [
					// 按钮
					{
						key: "组件",
						link: "/",
						iscollapse: false,
						isToolTip: false,
						icon: "fa fa-map-o",
						sub_navs: [
						    {
								key: "按钮",
								link: "button-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "气泡",
								link: "bubble-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
						],
					},
					// 导航分类
					{
						key: "导航分类",
						link: "/",
						iscollapse: false,
						isToolTip: false,
						icon: "fa fa-opera",
						sub_navs: [
							{
								key: "分页",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "步骤条",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "选项卡",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "下拉导航",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "锚定位",
								link: "anchor-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
						],
					},
					// 表单
					{
						key: "表单",
						link: "/",
						iscollapse: false,
						isToolTip: false,
						icon: "fa fa-internet-explorer",
						sub_navs: [
							{
								key: "表单汇总",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "验证器",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
						],
					},
					// 数据展示
					{
						key: "数据展示",
						link: "/",
						iscollapse: false,
						isToolTip: false,
						icon: "fa fa-chrome",
						sub_navs: [
							{
								key: "轮播",
								link: "swiper-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "树",
								link: "tree-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "标签",
								link: "label-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "徽章",
								link: "badge-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "文字提示",
								link: "tooltip-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "气泡卡片",
								link: "bubble-card-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "表格",
								link: "table-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "块引用",
								link: "block-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "分割线",
								link: "separator-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "列表",
								link: "list-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "折叠面板",
								link: "accordion-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "卡片",
								link: "card-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
						],
					},
					// 反馈交互
					{
						key: "反馈交互",
						link: "/",
						iscollapse: false,
						isToolTip: false,
						icon: "fa fa-firefox",
						sub_navs: [
							{
								key: "通知",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "提示",
								link: "toast-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "加载中",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "对话框",
								link: "dialog-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "底部弹窗",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "气泡确认框",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "消息提示",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "警告反馈",
								link: "/warntip-demo",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "进度条",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
							{
								key: "抽屉",
								link: "/",
								iscollapse: false,
								icon: "fa fa-external-link-square",
								sub_navs: [
								],
							},
						],
					},
					// 测试菜单
					{
						key: "一级菜单",
						link: "/",
						iscollapse: false,
						isToolTip: false,
						icon: "fa fa-telegram",
						sub_navs: [
							{
								key: "二级菜单",
								link: "/",
								iscollapse: true,
								icon: "fa fa-check-circle",
							},
							{
								key: "二级菜单",
								link: "/",
								iscollapse: true,
								icon: "fa fa-check-circle",
							},
							{
								key: "二级菜单",
								link: "/",
								iscollapse: true,
								icon: "fa fa-check-circle",
							},
							{
								key: "二级菜单",
								link: "/",
								iscollapse: true,
								icon: "fa fa-check-circle",
								sub_navs: [],
							},
						],
					},
					{
						key: "一级菜单",
						link: "/",
						iscollapse: false,
						isToolTip: false,
						icon: "fa fa-picture-o",
						sub_navs: [
							{
								key: "二级菜单",
								link: "/",
								iscollapse: true,
								icon: "fa fa-envelope",
								sub_navs: [
									{ key: "三级菜单", link: "/", icon: "fa fa-ravelry" },
									{ key: "三级菜单", link: "/", icon: "fa fa-ravelry" },
									{ key: "三级菜单", link: "/", icon: "fa fa-ravelry" },
									{ key: "三级菜单", link: "/", icon: "fa fa-ravelry" },
								],
							},
						],
					},
				],
			};
		},
		watch:{
			isSliderCollapse(newV,oldV){
				let stylesheet = document.createElement('style');
				let styleStr = '';
				if(newV){
					styleStr = 
						`.home--contain-slider *:not(i){
							font-size: 0px;
						}
						span.nav-item-collapse-btn{
							display: none;
						}
						.home .home--contain-slider,
						.home--contain-slider .slider-header {
							width: 60px;
						}
						.home--contain-slider .slider-footer {
							width: calc(60px - 20px - 20px);
						}
						`;
				}else{
					styleStr = 
						`.home--contain-slider *:not(i){
							font-size: 16px;
						}
						span.nav-item-collapse-btn{
							display: block;
						}
						.home .home--contain-slider,
						.home--contain-slider .slider-header {
							width: 230px;
						}
						.home--contain-slider .slider-footer {
							width: calc(230px - 20px - 20px);
						}
						`;
				}
				stylesheet.innerHTML = styleStr;
				document.head.appendChild(stylesheet)
			}
		}
	};
</script>
<style>
	*{
		text-decoration: none;
		font-size: 16px;
	}

	.home{
		width: 100%;
		height: 100vh;
		display: flex;
		/* grid-template-columns: 230px calc(100% - 230px); */
	}


	.home .home--contain-slider {
		width: 230px;
		height: 100%;
		background-color: rgb(36,37,38);
		color: rgb(176,176,176);
		display: flex;
		flex-direction: column;
		/* position: fixed; */
	}

	.home--contain-slider i,.nav-item-collapse-btn{
		font-size: 18px !important;
	}

	.home--contain-slider .slider-header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		width: 230px;
		position: fixed;
		top: 0;
		background-color: rgb(36,37,38);
	}

	.slider-header .slider-header-icon img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}

	.slider-header .slider-header-icon{
		background-color: #fff;
		height: 35px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.slider-header .slider-header-icon,.slider-header .slider-header-title{
		display: inline-block;
	}

	.slider-header .slider-header-title {
	}

	.home--contain-slider .slider-nav {
		height: calc(100% - 40px - 60px);
		position: relative;
		top: 60px;
		overflow-y: scroll;
	}

	.home--contain-slider .slider-nav::-webkit-scrollbar {
            width: 4px;    
            /*height: 4px;*/
    }
    .home--contain-slider .slider-nav::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
    }
    .home--contain-slider .slider-nav::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);

    }

	.home--contain-slider .slider-footer {
		position: fixed;
		bottom: 0;
		height: 20px;
		font-size: 20px !important;
		width: calc(230px - 20px - 20px);
		background-color: rgb(36,37,38);
		padding: 10px 20px;
	}

	.home .home--contain-main {
		flex: 1;
		height: 100%;
		max-height: 100%;
		background-color: #eee;
		/* margin-left: 230px; */
		
	}

	.home--contain-main .main-header{
		width: 100%;
		height: 60px;
		background: rgba(48,49,54);
		position: fixed;
		top: 0;
	}

	.home--contain-main .main-contain{
		height: calc(100% - 60px - 30px);
		background: rgba(34,34,35);
		padding: 15px;
		margin-top: 60px;
		overflow-y: auto;
		color: #fff;
	}

	.slider-nav {
		display: flex;
		flex-direction: column;
	}

	.nav-item {
		display: flex;
		align-items: center;
		padding: 15px 15px;
		width: calc(100% - 30px - 4px);
		position: relative;
		transition: all 1s ease;
	}

	.nav-item:active{
		border-right: 4px solid #fff;
	}

	.nav-level-2-list{
		width: calc(100% - 30px -30px);
		padding-left: 20px;
	}

	.nav-level-3-list{
		width: calc(100% - 30px -30px - 30px);
		padding-left: 20px;
	}

	.nav-item-icon {
		margin-right: 10px;
	}

	.nav-item-text {
		/* width: 120px; */
	}

	.nav-item-collapse-btn {
		position: absolute;
		right: 10px;
	}

	.nav-item-collapse-btn.is-collapse{
		animation: collapse .5s ease forwards;
	}

	@keyframes collapse {
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(180deg);
		}
	}

	
</style>