<template>
	<view>
		<!-- 自定义导航栏 -->
		<view class="navBarBox">
			<!-- 状态栏占位 -->
			<view class="statusBar" :style="{ paddingTop: statusBarHeight + 'px' }"></view>
			<!-- 真正的导航栏内容 -->
			<view class="navBar">
				<!-- <image class="logo" src="/static/logo.png" mode="scaleToFill"></image> -->
				<view>我是导航栏标题</view>
			</view>
		</view>
		<uni-swipe-action>
			<uni-swipe-action-item :left-options="options2" :right-options="options1" @click="bindClick">
				<view class="content-box"><text>使用数据填充</text></view>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				// 状态栏高度
				statusBarHeight: 0,
				// 导航栏高度
				navBarHeight: 82 + 11,
				options1: [{
					text: '取消置顶'
				}],
				options2: [{
						text: '取消',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '确认',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			};
		},
		created() {
			//获取手机状态栏高度
			            this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
		methods: {
			bindClick(e) {
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			}
		}
	};
</script>
<style>
	.content-box {
		flex: 1;
		height: 44px;
		line-height: 44px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		border: 1px solid #f5f5f5;
	}
	.navBarBox{}
	.navBarBox .statusBar {}
	.navBarBox .navBar {
		height: 120rpx;
	    padding: 3rpx 50rpx;
	    padding-bottom: 8rpx;
	    display: flex;
	    flex-direction: row;
	    justify-content: center;
	    align-items: center;
			background-image: url(../../static/img/logo.png);
	}
	.navBarBox .navBar .logo {
	    width: 82rpx;
	    height: 82rpx;
	    margin-right: 10rpx;
	}
</style>
