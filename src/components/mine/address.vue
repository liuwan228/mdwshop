<!-- 地址列表 -->
<template>
	<view class="">
		<view v-for="(item,index) in addressList" class="addressBox" :class="{'default':item.isdefault}">
			<view class="default-cont">默</view>
			<view class="flex justify-between">
				<view class="flex align-center">
					<text class="iconfont icon-checkbox-xuanzhong margin-right"></text>
					<view class="">
						{{item.username}},{{item.phone}}
						<view class="">
							{{item.city}}
							{{item.region}}
							{{item.detail}}
						</view>
					</view>
				</view>
				<view class="edit margin-bottom-sm">
					<text class="iconfont icon-bianjishuru"></text>
				</view>
			</view>
			<view class="flex justify-around align-center margin-top">
				<view v-if="item.isdefault" class="">
					默认地址
				</view>
				<view v-else class="" @click="handleDefault(index)">
					设为默认
				</view>
				<u-line length="15" direction="col"></u-line>
				<view class="">
					删除地址
				</view>
			</view>
		</view>
		<view class="text-center">
			<button class="cu-btn bg-brown">新增地址</button>
		</view>
	</view>

</template>

<script>
	export default {
		name: '',
		data() {
			return {
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
			addressDefaultMut(state, idx) { //设为默认
				this.addressList.forEach((item, i) => {
					if (i == idx) {
						item.isdefault = true
					} else {
						item.isdefault = false
					}
				})

			},
		}
	}
</script>

<style lang="scss" scoped>
	.addressBox{
		
	}
	.edit {
		width: 80upx;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		background-color: #e6e6e6;
		border-radius: 50%;
	}

	.cu-btn.lg {
		width: 50%;
	}

	.fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, 0.2);
	}

	.icon-checkbox-xuanzhong {
		width: 50upx;
		height: 50upx;
		font-size: 50upx;
		text-align: center;
		line-height: 50upx;
		// color: #e6e6e6;
		background-color: #e6e6e6;
		border-radius: 20%;
	}

	.default {
		position: relative;
		overflow: hidden;

		.default-cont {
			padding: 20upx 10upx 10upx;
			width: 100upx;
			background-color: #fae456;
			font-size: 12upx;
			text-align: center;
			position: absolute;
			top: -20upx;
			right: -40upx;
			transform: rotate(45deg);
			display: block;
		}
	}

	.default-cont {
		display: none;
	}
</style>
