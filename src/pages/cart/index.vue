<template>
	<view class="main">
		<!-- 自定义导航栏 -->
		<custom-bar></custom-bar>
		<!-- 地址 -->
		<view class="mgt9 addressText">
			<view class="">
				<image src="~@/static/img/address_icon.png" mode="scaleToFill" class="top_ico"> </image>
				<text class="name" @click="addressToggle('bottom')">安徽省蜀山区高新技术开发区</text>
				<image src="~@/static/img/right_icon.png" mode="scaleToFill" class="top_ico"> </image>
			</view>
			<view class="name" @click="openDel"> 删除 </view>
		</view>
		<!-- 内容区 -->
		<view class="info">
			<!-- 购物车为空 -->
			<template v-if="isEmpty">
				<view class="empty">
					<empty tip="您的购物车空空如也"></empty>
					<view class="jump" @click="goto('/pages/index/index')"> 去逛逛 </view>
				</view>
				<!-- 分割线 -->
				<view class="title-split">
					<view></view>
					<text>猜你喜欢</text>
					<view></view>
				</view>
				<!-- 商品列表组件 -->
				<list :list="PRODUCT_LIST"></list>
			</template>
			<!-- 不为空 -->
			<!-- 购物车列表 -->
			<template v-else>
				<view class="goods-list" v-for="(item,index) in goods" :key="index">
					<SwipeActionItem :rightOptions="rightOptions" style="width: 100%;">
						<view class="detail-left">	
							<view class="goods-left">
								<!-- 商品的选择框 -->
								<u-checkbox-group placement="column" @change="selected(item)">
									<u-checkbox :checked="checked" activeColor="#3A7BF5" iconSize="14" shape="circle">
									</u-checkbox>
								</u-checkbox-group>
								<view class="img">
									<image :src="item.goodsImage" mode="widthFix" style="width: 160rpx;"></image>
								</view>
							</view>
							<view class="size">
								<view class="font_title_14">
									{{item.name}}
								</view>
								<text class="font_sub_12">规格：{{item.size}}</text>
								<view class="yuan_box">
									<text class="goods-price">￥{{item.price}}</text>
									<view class="detail-right">
										<text class="subtract" @click="reduce(item)">-</text>
										<text class="num">{{item.num}}</text>
										<text @click="add(item)" class="add">+</text>
									</view>
								</view>
							</view>
						</view>
					</SwipeActionItem>
				</view>

				<!-- 全选总计 -->
				<view class="end">
					<view class="end-left">
						<u-checkbox-group @change="selectgoods()">
							<u-checkbox :checked="allchecked" activeColor="#3A7BF5" iconSize="14" shape="circle"
								label="全选">
							</u-checkbox>
						</u-checkbox-group>
						<view class="sum">
							合计：<text style="color:#EA3323;font-weight: bold;">{{totalPrice|addZero }}</text>
						</view>
					</view>
					<view class="end-right">
						结算
					</view>
				</view>

				<!-- 删除提示窗 -->
				<uni-popup ref="delDialog" type="dialog">
					<uni-popup-dialog type="error" cancelText="取消" confirmText="确定" content="确定要删除商品吗？"
						@confirm="delConfirm" @close="delClose"></uni-popup-dialog>
				</uni-popup>
			</template>

			<!-- 地址列表弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="addressPop">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
					<text class="text">popup 内容</text>
					<Address></Address>
				</view>
			</uni-popup>
		</view>

	</view>
</template>

<script>
	import List from '../../components/product/List.vue';
	import Address from '../../components/mine/address.vue';
	import SwipeActionItem from '../../components/common/SwipeActionItem.vue';
	export default {
		components: {
			List,
			Address,
			SwipeActionItem
		},
		data() {
			return {
				isEmpty: false, //是否为空
				allchecked: false, //全选是否选中
				checked: false,
				type: 'center', //默认从中间弹
				rightOptions: [{
					text: '删除商品',
					style: {
						backgroundColor: '#F56C6C'
					}
				}], //左滑删除商品
				PRODUCT_LIST: [{
					img_url: '../../static/img/pro.jpg',
					name: '镜特舒冲洗液',
					yuan: '29'
				}, {
					img_url: '../../static/img/pro.jpg',
					name: '镜特舒冲洗液',
					yuan: '29'
				}, {
					img_url: '../../static/img/pro.jpg',
					name: '镜特舒冲洗液',
					yuan: '29'
				}, {
					img_url: '../../static/img/pro.jpg',
					name: '镜特舒冲洗液',
					yuan: '29'
				}],
				goods: [{
						name: "镜特舒冲洗液（4瓶装）",
						size: '100ML',
						flag: false,
						num: 1,
						price: 149,
						goodsImage: "../../static/img/pro.jpg",
					},
					{
						name: "镜特舒冲洗液（4瓶装）",
						size: '100ML',
						flag: false,
						num: 1,
						price: 219,
						goodsImage: "../../static/img/pro.jpg",
					},
				],
			};
		},
		created() {},
		filters: {
			addZero: function(data) {
				return data.toFixed(2)
			}
		},
		computed: {
			// 计算总和
			// totalNum() {
			// 	let totalNum = 0;
			// 	this.goods.map(item => {
			// 		item.flag ? totalNum += item.num : totalNum += 0
			// 	})
			// 	return totalNum
			// },
			totalPrice() {
				let totalPrice = 0;
				this.goods.map(item => {
					item.flag ? totalPrice += item.num * item.price : totalPrice += 0
				})
				return totalPrice
			}
		},
		methods: {
			selected(item) {
				item.flag = !item.flag;
				if (!item.flag) {
					this.allchecked = false
				} else {
					const a = this.goods.forEach((item) => {
						return item.flag = true
					})
					if (a) {
						this.allchecked = true
					} else {
						this.allchecked = false
					}
				}
			},
			// 全选
			selectgoods() {
				this.allchecked = !this.allchecked
				if (this.allchecked) {
					this.goods.forEach(item => {
						this.checked = true
						item.flag = true
					})
					console.log("1111", this.goods)
				} else {
					this.checked = false
					this.goods.forEach(item => {
						item.flag = false
					})
				}
			},

			// 商品加减
			add(item) {
				let num = item.num
				item.num = num + 1
			},
			reduce(item) {
				let num = item.num
				if (num > 1) {
					num -= 1
				} else if (num = 1) {
					uni.showToast({
						title: "该宝贝不能减少了哟~"
					})
				}
				item.num = num
			},
			// 地址弹窗
			addressToggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			addressPop(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},

			openDel() {
				this.$refs.delDialog.open()
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
	};
</script>
<style lang="scss" scoped>
	
	/deep/ .uni-dialog-title{
		display: none;
	}
	/deep/ .uni-dialog-content-text{
		color: #333;
	}
	.info {
		height: calc(100% - 320rpx);
	}

	.addressText {
		padding: 0 32rpx;
		box-sizing: border-box;
		position: fixed;
		top: 128rpx;
		left: 0;
		width: 100%;
		padding-bottom: 18rpx;
		display: flex;
		justify-content: space-between;

		.name {
			margin: 0 8rpx;
			font-size: 26rpx;
			line-height: 38rpx;
			color: #666666;
		}

		.top_ico {
			width: 36rpx;
			height: 36rpx;
			vertical-align: middle;
		}
	}

	// 购物车/
	.empty {
		width: 100%;

		.jump {
			margin: 20rpx auto;
			width: 200rpx;
			height: 76rpx;
			background: #307EF4;
			border-radius: 40rpx;
			opacity: 1;
			text-align: center;
			color: $uni-text-color-inverse;
			line-height: 76rpx;
			font-size: $uni-font-size-base;
		}
	}

	// 分割线
	.title-split {
		margin: 34rpx 0 28rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;

		text {
			color: #999;
			font-weight: 500;
			font-size: 28rpx;
			padding: 0 28rpx;
		}

		view {
			width: 290rpx;
			height: 2rpx;

			&:first-of-type {
				background: linear-gradient(90deg, rgba(153, 153, 153, 0) 0%, #999999 100%);
			}

			&:last-of-type {
				background: linear-gradient(90deg, #999999 0%, rgba(153, 153, 153, 0) 100%);
			}
		}
	}

	// 购物车

	.goods-list {
		width: 100%;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;

		.detail-left {
			width: 100%;
			display: flex;
			padding: 30rpx 32rpx;
			box-sizing: border-box;

			.goods-left {
				display: flex;
				align-items: center;

				.img {
					margin: 0 18rpx;
					width: 160rpx;
					height: 160rpx;
					border-radius: 6rpx;
					overflow: hidden;
				}
			}
		}

		.size {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			flex: 1;

			.goods-price {
				font-size: 32rpx;
				color: #EA3323;
				font-family: D-DIN-Bold, D-DIN;
				font-weight: 700;
			}
		}

		.yuan_box {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.detail-right {
			display: flex;

			text {
				width: 50rpx;
				line-height: 50rpx;
				text-align: center;
				display: inline-block;
				background-color: #F7F7F7;
				margin-right: 10rpx;
			}

			.add {
				color: #FA4305;
				border-radius: 10rpx 30rpx 30rpx 10rpx;
				margin-right: 20rpx;
			}

			.subtract {
				border-radius: 30rpx 10rpx 10rpx 30rpx;
			}
		}
	}


	.end {
		width: 100%;
		height: 116rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding: 0 32rpx;
		box-sizing: border-box;
		justify-content: space-between;

		&-left {
			flex: 1;
			display: flex;
			justify-content: space-between;

			.sum {
				margin: 0 24rpx;
				color: #333333;

				text {
					color: #EA3323;
				}
			}

			.end-flex {
				display: flex;
				align-items: center;
			}
		}

		&-right {
			width: 160rpx;
			height: 70rpx;
			background: #4482F6;
			border-radius: 40rpx 40rpx 40rpx 40rpx;
			line-height: 70rpx;
			text-align: center;
			color: #fff;
		}
	}
</style>
