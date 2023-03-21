<template>
	<view class="product_list">
		<view class="product_item" v-for="(item,index) in list" :key="index">
			<view class="img_box">
				<image :src="item.img_url" mode="scaleToFill" class="img"></image>
			</view>
			<view class="title">
				<view class="name">{{item.name}}</view>
				<view class="yuan">￥{{item.yuan}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: '',
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	.product_list {
		width: 100%;
		padding: 0 32rpx;
		box-sizing: border-box;
		display: grid;
		justify-content: space-evenly;
		grid-template-columns: repeat(auto-fill, 328rpx);
		grid-gap: 24rpx;
		margin-bottom: 32rpx;

		.product_item {
			position: relative;
			width: 328rpx;

			// height: 426rpx;	
			.img_box {
				width: 328rpx;
				height: 324rpx;
				border: 4rpx solid #4776CB;
				border-radius: 10rpx 10rpx 0rpx 0rpx;
				border-bottom: none;
				box-sizing: border-box;
				overflow: hidden;

				.img {
					width: 100%;
					height: 100%;
				}
			}

			.title {
				width: 100%;
				// height: 124rpx;
				background: #FFFFFF;
				padding: 12rpx;
				border: 4rpx solid #FFFFFF;
				border-radius: 0rpx 0rpx 10rpx 10rpx;
				box-sizing: border-box;

				.name {
					font-size: 28rpx;
					color: #333333;
					line-height: 40rpx;
					margin-bottom: 12rpx;
				}

				.yuan {
					font-weight: 700;
					color: #EA3323;
					line-height: 34rpx;
					font-size: 36rpx;
					font-family: D-DIN-Bold, D-DIN;
				}
			}
		}
	}
</style>
