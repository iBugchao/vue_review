import Vue from 'vue';
import App from './app.vue';

//引入子组件对象 
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';

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
	render:function(c){
		return c(App);
	}
})
