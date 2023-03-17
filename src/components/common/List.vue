<template>
	<view class="list" v-if="isComplete">
		<template v-if="empty">
			<empty />
		</template>
		
		<template v-else>
			<!-- 内容插槽 -->
			<slot></slot>
			
			<!-- 加载提示 -->
			<view class="load-more">
				<uni-load-more :status="getStatus"></uni-load-more>
			</view>	
		</template>
	</view>
</template>

<script>
	export default {
		name:"list",
		props: {
			isComplete: { // 是否加载完成开始渲染模板
				type: Boolean,
				default: function() {
					return false
				}
			},
			isLoading: { // 是否加载中
				type: Boolean,
				default: function() {
					return false
				}
			},
			finished: { // 数据加载是否已完成
				type: Boolean,
				default: function() {
					return false
				} 
			},
			empty: { // 是否空数据
				type: Boolean,
				default: function() {
					return false
				}
			}
		},
		computed: {
			getStatus() {
				if(this.finished === true) {
					return 'noMore'
				} 
				
				return this.isLoading === true ? 'loading' : 'more'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {

		},
		components: {
		}
	}
</script>

<style lang="scss" scoped>
	.load-more {
		padding: 20rpx;
	}
</style>
