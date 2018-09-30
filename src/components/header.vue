<template>
	<div id="header">
		头部{{hello}}
	</div>
</template>

<script>
	export default{
		props:['hello'],
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped="scoped">
	#header{
		height: 100px;
		background-color: #FF0000;
	}
</style>