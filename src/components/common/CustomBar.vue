<template>
  <view class="custom_status_bar">
		<uni-nav-bar 
			backgroundColor="transparent"
			:statusBar="true"
		>
		<view slot="left">
			<image class="logo_images" src="~@/static/img/logo.png" mode="widthFix" />
		</view>
		</uni-nav-bar>
	</view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo_images {
	width: 172rpx;
	height: 54rpx;
	margin-left: 40rpx;
}
</style>