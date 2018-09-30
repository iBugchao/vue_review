<template>
	<div>
		<button @click="haha()">点击</button>
		{{text}}
		<ul>
			<li v-for="person in list" :class="{'a':'red','b':'green'}[person.color]">
				{{person.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				text:"hello vue",
				list:[{name:'jack',color:'a'},{name:'rose',color:'b'}],
				isTrue:true
			}
		},
		methods:{
			haha(){
				this.text = "wode tian"
			}
		}
	}
</script>

<style scoped="scoped">
	.red{
		color: red;
	}
	.green{
		color: green;
	}
</style>