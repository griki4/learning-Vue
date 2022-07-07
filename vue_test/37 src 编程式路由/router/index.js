// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from "@/pages/Details";

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							name:'xiangqing',
							path:'details/:id/:title',
							component:Details,

							//props配置项可以向路由组件中传递数据，
							//1.对象写法，直接将数据以props的形式传入
							/*props:{
								a:900,
								b:800
							}*/

							//2.布尔值写法，将接收到的params参数以props的形式传递给路由组件
							// props:true

							//3.函数写法，可以简化在路由组件中接收参数的写法
							props($route){
								return{
									id:$route.query.id,
									title:$route.query.title
								}
							}

						}
					]
				}
			]
		}
	]
})
