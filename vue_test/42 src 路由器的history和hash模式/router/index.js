// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from "@/pages/Details";

//创建并暴露一个路由器
const router = new VueRouter({
	mode:'history',
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About,
			meta:{isAuth:true,title:'关于'}
		},
		{
			name:'zhuye',
			path:'/home',
			component:Home,
			meta:{title:'主页'},
			children:[
				{
					name:'xinwen',
					path:'news',
					component:News,
					meta:{isAuth:true,title:'新闻'}
				},
				{
					name:'xiaoxi',
					path:'message',
					component:Message,
					meta:{isAuth:true,title:'消息'},
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


//全局前置守卫会在路由切换之前触发
/*
router.beforeEach((to,from,next) =>{
	//三个参数表示来自哪个路由，去往哪个路由，是否放行
	//1.首先判断要切换的路由是否需要校验
	if (to.meta.isAuth) {
		if (localStorage.getItem("school") === 'hit') {
			next()
		}
		else {
			alert('暂无权限')
		}
	}
	next()
})
*/

//全局后置守卫在路由切换后触发，可以用于切换页签名等工作
router.afterEach((to,from) =>{
	document.title = to.meta.title || '未知标签'
})


export default router
