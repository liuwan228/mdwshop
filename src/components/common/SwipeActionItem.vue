<template >
		<uni-swipe-action>
			<uni-swipe-action-item :left-options="leftOptions" :right-options="rightOptions" @click="bindClick">
				<!-- 内容插槽 -->
				<slot></slot>
			</uni-swipe-action-item>
		</uni-swipe-action>
</template>

<script>
	export default {
		name: '',
		props: {
			rightOptions: {
				type: Array,
				default: () => []
			},
			leftOptions: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				// options1: [{
				// 	text: '取消置顶'
				// }],
				// options2: [{
				// 		text: '取消',
				// 		style: {
				// 			backgroundColor: '#007aff'
				// 		}
				// 	},
				// 	{
				// 		text: '确认',
				// 		style: {
				// 			backgroundColor: '#dd524d'
				// 		}
				// 	}
				// ]
			}
		},
		methods: {
			bindClick(e) {
				console.log(e,"eeeee")
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
