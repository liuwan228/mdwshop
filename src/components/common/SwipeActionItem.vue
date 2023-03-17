<template>
  <view class="">
    <uni-swipe-action>
    	<uni-swipe-action-item :left-options="options2" :right-options="options1" @click="bindClick">
    		<view class="content-box"><text>使用数据填充</text></view>
    	</uni-swipe-action-item>
    </uni-swipe-action>
  </view>
</template>

<script>


export default {
  name: '',
  data () {
    return {
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
    },
		methods:{
			bindClick(e) {
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			}
		}
  }
}
</script>

<style lang="scss" scoped>
	.content-box {
		flex: 1;
		height: 44px;
		line-height: 44px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		border: 1px solid #f5f5f5;
	}

	.navBarBox {}

	.navBarBox .statusBar {}

	.navBarBox .navBar {
		height: 120rpx;
		padding: 3rpx 50rpx;
		padding-bottom: 8rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.navBarBox .navBar .logo {
		width: 82rpx;
		height: 82rpx;
		margin-right: 10rpx;
	}
</style>
