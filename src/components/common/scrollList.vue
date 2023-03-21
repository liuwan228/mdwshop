<template>
		
	<scroll-view ref='scroll-view' class="scroll-view-ui" :scroll-x="scrollType=='x'" :scroll-y="scrollType=='y'"  @scrolltolower='scrolltolower'>
		<list ref="list" :isComplete="isComplete" :isLoading="isLoading" :finished="finished" :empty="empty">
			<slot></slot>
		</list>
	</scroll-view>
</template>

<script>
	export default {
		name:"scroll-list",
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
			},
			scrollType:{
				type: String,
				default: function() {
					return 'y'
				}
			}
		},
		computed: {
		},
		data() {
			return {
				
			}
		},
		mounted() {
			this.$nextTick(()=>{
			})
		},
		methods: {
			scrolltolower(){
				this.$emit('scrolltolower')
			},
			isover(){
				if((this.$refs["scroll-view"].$el.offsetHeight - this.$refs.list.$el.offsetHeight)>0){
					this.$emit('scrolltolower')
				}
			}
		},
		components: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-view-ui,.scroll-view-body{
		width: 100%;
		height: 100%;
	}
</style>