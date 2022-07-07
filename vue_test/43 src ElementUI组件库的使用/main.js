//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'


//完整引入
/*import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';*/


//按需引入
import {Button,Row,DatePicker} from "element-ui";
//关闭Vue的生产提示
Vue.config.productionTip = false


//直接引入会将UI组件库中所有的样式文件都引入，这是非必要的
/*Vue.use(ElementUI)*/
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)


//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})
