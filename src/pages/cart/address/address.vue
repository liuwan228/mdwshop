<!-- 地址列表 -->
<template>
	<view class="info">
		<view class="title">
			<text class="name1">收货地址</text>
			<view class="name2 font_sub_12">
				<view class="box" @click="isEdit=!isEdit">
					<image src="~@/static/img/edit.png" mode="" class="editBut">
					</image> {{isEdit?'完成':'管理'}}
				</view>
				<view class="box">
					<image src="~@/static/img/add.png" mode="" class="editBut">
					</image> 新增
				</view>
			</view>
		</view>
		<view v-for="(item,index) in addressList" class="addressBox" :key="index" :class="{'default':item.isdefault,'editDefault':isEdit}">
			<view class="userInfo">
				<view class="headerImg">
					<image src="~@/static/img/headerImg.png" mode="scaleToFill" style="width: 100%;height: 100%;">
					</image>
				</view>
				<view class="sub">
					<view class="font_title_14 title1">
						<view class=""> {{item.username}} </view>
						<view class="font_sub_12 mgl6">{{item.phone}}</view>
						<view class="default-cont">默认</view>
					</view>
					<view class="font_title_12">
						{{item.city}}
						{{item.region}}
						{{item.detail}}
					</view>
				</view>
			</view>
			<template v-if="isEdit">
				<u-line color="#666" solid></u-line>
				<view class="setBox font_sub_12">
					<view class="radioBox">
						<radio-group @change="addressDefaultMut">
							<label class="uni-list-cell">
								<radio style="transform:scale(0.7)" color="#3A7BF5" :value="item.username" :checked="index === current"></radio>
							</label>
						</radio-group>
						<text class="mgl6">默认地址</text>
					</view>
					<view class="">
						删除
					</view>
				</view>
			</template>
		</view>
		<!-- 删除提示窗 -->
		<uni-popup ref="delDialog" type="dialog">
			<uni-popup-dialog type="error" cancelText="取消" confirmText="确定" content="确定要删除商品吗？"
				@confirm="delConfirm" @close="delClose"></uni-popup-dialog>
		</uni-popup>
	</view>

</template>

<script>
	export default {
		name: '',
		data() {
			return {
				current: 0,
				isEdit: false, //是否是管理状态
				addressList: [{
					username: '曹国舅',
					phone: '13010101010',
					city: '北京',
					region: '朝阳区',
					detail: '朝阳路周家井',
					isdefault: true
				}, {
					username: '何仙姑',
					phone: '13010101010',
					city: '北京',
					region: '海淀区',
					detail: '中关村二街',
					isdefault: false
				}, {
					username: '吕洞宾',
					phone: '13010101010',
					city: '北京',
					region: '门头沟',
					detail: '黑山大街',
					isdefault: false
				}],
			}
		},
		onLoad() {

		},
		methods: {
			// 设置默认
			addressDefaultMut(evt) {
				// console.log(evt,"kkkk")
				this.addressList.forEach((item, i) => {
					if (item.username === evt.detail.value) {
						this.current = i;
						item.isdefault = true;
						// break;
					} else {
						item.isdefault = false
					}
				})

				console.log(this.addressList, "this.addressList")
			},
			// 删除
			delConfirm() {
				console.log('点击确认')
				this.$refs.delDialog.close()
			},
			delClose() {
				console.log('点击关闭')
				this.$refs.delDialog.close()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.info{
		background-color: #D4DFF5;
	}
	.title {
		height: 110rpx;
		width: 100%;
		background-color: #D4DFF5;
		padding: 0 32rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 20rpx 20rpx 0rpx 0rpx;

		.name1 {
			font-size: 36rpx;
			color: #3D3D3D;
		}

		.name2 {
			display: flex;

			.editBut {
				width: 40rpx;
				height: 40rpx;
				margin-right: 8rpx;
				vertical-align: text-bottom;
			}

			.box {
				margin-left: 60rpx;
			}
		}
	}
.editDefault{
	margin-bottom: 40rpx;
}
	.addressBox {
		background: #F3F4F8;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
		// padding: 8rpx 48rpx 12rpx 48rpx;
		width: 100%;

		.userInfo {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			padding: 24rpx 48rpx;
			box-sizing: border-box;
			align-items: center;
		}

		.headerImg {
			width: 48rpx;
			height: 48rpx;
			border-radius: 24rpx;
			margin-right: 26rpx;
		}

		.sub {
			display: flex;
			flex-direction: column;
			height: 88rpx;

			.title1 {
				display: flex;
				line-height: 50rpx;
			}
		}

		.setBox {
			width: 100%;
			padding: 0 48rpx;
			margin-right: 26rpx;
			box-sizing: border-box;
			display: flex;
			height: 64rpx;
			align-items: center;
			justify-content: space-between;
			.radioBox{
				display: flex;
				align-items: center;
			}
		}
	}


	.default {
		position: relative;
		overflow: hidden;

		.default-cont {
			width: 64rpx;
			height: 30rpx;
			border: 1rpx solid #3A7BF6;
			font-size: 20rpx;
			text-align: center;
			color: #3A7BF6;
			line-height: 30rpx;
			display: block;
			border-radius: 4rpx;
			margin-left: 24rpx;
		}
	}

	.default-cont {
		display: none;
	}
</style>
