<template>
	<view class="box-bg">
		<uni-nav-bar :statusBar="true" color="#333" :border="false" @clickLeft="back" backgroundColor="transparent"
			height="64px" left-icon="left" title="自定义高度">
		</uni-nav-bar>
		<view class="bg">
			<image class="nav_bg" src="~@/static/img/nav_bg.png" mode="scaleToFill"></image>
		</view>
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
		position: relative;

		.bg {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;

			.nav_bg {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
