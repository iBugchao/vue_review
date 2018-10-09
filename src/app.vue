<template>
	<div>
		<!--<button @click="haha()">点击</button>
		{{text}}
		<ul>
			<li v-for="(item,index) in lis" :key="index" :class="{'A':'red','B':'green','C':'blue','D':'yellow'}[item.score]">
				{{item.name}}---{{item.age}}---{{item.score}}--<button @click="delStu(index)">删除</button>
			</li>
		</ul>
		姓名：<input type="text" v-model="name"/><br />
		年龄：<input type="text" v-model="age"/><br />
		成绩：<input type="text" v-model="score"/>
		<button @click="addStu()">添加学生</button>-->
		<!--<header-vue hello="hello world"></header-vue>
		<body-vue :you="str"></body-vue>
		<footer-vue></footer-vue>
		<button @click="listen">接收子组件的值</button>
		<input type="text" v-model="str1" />{{str1 | filter1}}-->
		<ul>
			<router-link :to="{name:'haha',query:{id:1}}">aaaa</router-link>
			<router-link :to="{name:'xixi',params:{age:12}}">bbbb</router-link>
			<router-link :to="{name:'haha',query:{id:1}}">cccc</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	import connector from './components/connect.js';
	export default {
		data(){
			return {
			/*	name:'',
				age:'',
				score:'',
				text:"hello vue",
				isTrue:true,
				lis:[
					{
						name:'张三',
						age:'18',
						score:'A'
					},
					{
						name:'张三2',
						age:'182',
						score:'B'
					},
					{
						name:'张三3',
						age:'418',
						score:'D'
					},
					{
						name:'张三4',
						age:'128',
						score:'C'
					}
				]*/
				str:"我的 天啊",
				str1:''
			}
		},
		methods:{
			/*haha(){
				this.text = "wode tian"
			},
			addStu(){
				this.lis.push({
					name:this.name,
					age:this.age,
					score:this.score
				})
				this.name = '';
				this.age = '';
				this.score = '';
			},
			delStu(index){
				this.lis.splice(index,1);
			}*/
			listen(){
				connector.$on('haha',function(data){
					console.log(data);
				})
			}
		},
		filters:{
			filter1:function(value){
				return value.split('').reverse().join('');
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
	.blue{
		color: blue;
	}
	.yellow{
		color: yellow;
	}
</style>