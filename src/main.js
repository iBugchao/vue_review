import Vue from 'vue';
//引入路由
import VueRouter from 'vue-router';
//引入mint-ui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
//引入APP
import App from './app.vue';
//引入子组件对象 
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';
import a from './components/a.vue';
import b from './components/b.vue';
import c from './components/c.vue';
import notFoundVue from './components/404.vue';

Vue.use(VueRouter);
Vue.use(MintUi);

//配置路由规则
let router = new VueRouter({
	//routers
	routes:[
		{
			path:'/',
			redirect:'/a'
		},
		{
			path:'*',
			component:notFoundVue
		},
		{	
			name:'haha',
			path:'/a',
			component:a
		},
		{
			name:'xixi',
			path:'/b/:age',
			component:b
		},
		{
			path:'/c',
			component:c
		}
	]
})


//声明全局组件
Vue.component('headerVue',headerVue);
Vue.component('bodyVue',bodyVue);
Vue.component('footerVue',footerVue);

//声明全局过滤器
Vue.filter('filters',function(value){
	return value.toUpperCase();
})

new Vue({
	el:'#app',
	//让vue知道我们的路由规则
	router:router,
	render:function(c){
		return c(App);
	}
})
