//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入stroe
import store from "@/store";
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	//使用store
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})