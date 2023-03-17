<template>
	<view class="search-bar">
		<uni-search-bar @confirm="confirm" 
		:class="{no_border: !border}"
		@input="input" 
		:radius="radius" 
		:maxlength="maxlength"
		:placeholder="placeholder" 
		:cancelButton="cancelButton"
		v-model="searchValue"
		:bgColor="bgColor">
		</uni-search-bar>
	</view>
</template>

<script>
	export default {
		name:"search-bar",
		props: {
			radius: {
				type: Number/String,
				default: function() {
					return 20
				}
			},
			placeholder: {
				type: String,
				default: function() {
					return '请输入搜索内容'
				}
			},
			bgColor: {
				type: String,
				default: function() {
					return '#ffffff'
				}
			},
			maxlength: {
				type: Number/String,
				default: function() {
					return 100
				}
			},
			cancelButton: { // always auto none
				type: String,
				default: function() {
					return 'none'
				}
			},
			border: {
				type: Boolean,
				default: true	
			},
			value: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				searchValue: ""
			}
		},
		watch: {
			value: {
				handler(newVal) {
					this.searchValue = newVal
				},
				immediate: true
			}
		},
		methods: {
			confirm(e) {
				this.$emit('confirm',e.value)
			},
			input(val) {
				this.$emit('input',val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
