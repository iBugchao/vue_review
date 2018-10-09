<template>
	<div id="a">
		aaaaaaaaaaaaaaaaaaaa
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		created(){
			console.log(this.$route.query.id);
		}
	}
</script>

<style>
</style>