<template>
	<view class="box-bg">
		<view class="bg">
			<image class="nav_bg" src="~@/static/img/nav_bg.png" mode="scaleToFill"></image>
		</view>
		<uni-nav-bar :statusBar="true" color="#333" :fixed="true" :border="false" @clickLeft="back" backgroundColor="transparent"
			height="64px" left-icon="left" title="购物车"> </uni-nav-bar>
	
	</view>
</template>

<script>
	export default {
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.box-bg {
		width: 100%;
		height: 282rpx;
		overflow: hidden;
		position: fixed;

		.bg {
			width: 100%;
			height: 282rpx;
			position: fixed;
			top: 0;
			left: 0;
			// z-index: -1;

			.nav_bg {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
