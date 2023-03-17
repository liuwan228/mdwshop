<template>
	<view class="empty-wrapper">
		<image class="empty-img" src="~@/static/img/icon-empty.png"></image>
		<text class="empty-text">{{tip}}</text>
	</view>
</template>

<script>
	export default {
		name:"empty",
		props: {
			tip: {
				type: String,
				default: function() {
					return "暂无数据"
				}
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.empty-wrapper {
		min-height: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.empty-img {
		width: 260rpx;
		height: 260rpx;
		margin-bottom: 32rpx;
		margin-top: 48rpx;
	}
	.empty-text {
		font-size: $uni-font-size-base;
		color:#3D3D3D;
		line-height: 40rpx;
	}
</style>
