<template>
	<view class="empty-wrapper">
		<image class="empty-img" src="~@/static/imgs/icon-empty.png"></image>
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
		width: 160rpx;
		height: 160rpx;
		margin-bottom: 24rpx;
	}
	.empty-text {
		font-size: $uni-font-size-base;
		color: $uni-text-color-grey;
	}
</style>
