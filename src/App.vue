<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import url("@/static/styles/index.scss");
		uni-checkbox .uni-checkbox-input {
		border-radius: 80rpx !important;
	}

	uni-checkbox.checked .uni-checkbox-input {
		background-color: #347CED !important;
		border-color: #347CED !important;
	}

</style>
