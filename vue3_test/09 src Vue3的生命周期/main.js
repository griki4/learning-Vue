//引入一个createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'


//app的作用类似Vue2中的vm，但是比vm更加轻量化
createApp(App).mount('#app')
