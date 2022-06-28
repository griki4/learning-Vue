import Vue from "vue";
import App from "@/App";
Vue.config.productionTip = false



new Vue({
    el:'#app',
    render: h => h(App),
    mounted() {
        setTimeout(() => {
            this.$destroy()//销毁整个vm实例，则所有子组件和他们身上的自定义事件都不会触发
        },3000)
    }
})