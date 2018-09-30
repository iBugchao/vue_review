<template>
	<div id="body">
		身体{{you}}
		<button @click="sendToPar">发送到父组件</button>
		<input type="text" v-model="str" />
		{{str|filters}}
	</div>
</template>

<script>
	import connector from './connect.js'
	export default{
		props:['you'],
		data(){
			return {
				str:''
			}
		},
		methods:{
			sendToPar(){
				connector.$emit('haha','啊啊啊啊啊啊啊啊啊啊啊啊啊');
			}
		}
	}
</script>

<style scoped>
	#body{
		height: 100px;
		background-color: gold;
	}
</style>