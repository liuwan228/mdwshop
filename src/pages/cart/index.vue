<template>
	<view class="main">
		<!-- 自定义导航栏 -->
		<custom-bar></custom-bar>
		<!-- 内容区 -->
		<view class="info">
			<!-- 地址 -->
			<view class="mgt9 addressText">
				<image src="~@/static/img/address_icon.png" mode="scaleToFill" class="top_ico"> </image>
				<text class="name">安徽省蜀山区高新技术开发区</text>
				<image src="~@/static/img/right_icon.png" mode="scaleToFill" class="top_ico"> </image>
			</view>
			<!-- 购物车为空 -->
			<view class="empty">
				<empty tip="您的购物车空空如也"></empty>
				<view class="jump" @click="goto('/pages/index/index')"> 去逛逛 </view>
			</view>
			<!-- 分割线 -->
			<view class="title-split">
				<view></view>
				<text>猜你喜欢</text>
				<view></view>
			</view>
			<!-- 商品列表组件 -->
			<list></list>
		</view>

	</view>
</template>

<script>
	import List from '../../components/product/List.vue';
	export default {
		components: {
			List
		},
		data() {
			return {};
		},
		created() {},
		methods: {

		}
	};
</script>
<style lang="scss" scoped>
	.addressText {
		padding: 0 32rpx;
		box-sizing: border-box;

		.name {
			margin: 0 8rpx;
			font-size: 26rpx;
			line-height: 38rpx;
			color: #666666;
		}

		.top_ico {
			width: 36rpx;
			height: 36rpx;
			vertical-align: middle;
		}
	}

	// 购物车/
	.empty {
		width: 100%;

		.jump {
			margin: 20rpx auto;
			width: 200rpx;
			height: 76rpx;
			background: #307EF4;
			border-radius: 40rpx;
			opacity: 1;
			text-align: center;
			color: $uni-text-color-inverse;
			line-height: 76rpx;
			font-size: $uni-font-size-base;
		}
	}

	// 分割线
	.title-split {
		margin: 34rpx 0 28rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;

		text {
			color: #999;
			font-weight: 500;
			font-size: 28rpx;
			padding: 0 28rpx;
		}

		view {
			width: 290rpx;
			height: 2rpx;

			&:first-of-type {
				background: linear-gradient(90deg, rgba(153, 153, 153, 0) 0%, #999999 100%);
			}

			&:last-of-type {
				background: linear-gradient(90deg, #999999 0%, rgba(153, 153, 153, 0) 100%);
			}
		}
	}
	
</style>
