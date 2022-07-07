<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:'About',
		/* beforeDestroy() {
			console.log('About组件即将被销毁了')
		},*/
		/* mounted() {
			console.log('About组件挂载完毕了',this)
			window.aboutRoute = this.$route
			window.aboutRouter = this.$router
		},  */
    beforeRouteEnter(to,from,next){
      console.log('come!')
      if(to.meta.isAuth) { //判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
          next()
        } else {
          alert('学校名不对，无权限查看！')
        }
      }else {
        next()
      }
    },
    beforeRouteLeave(to,from,next){
      console.log('Leave!')
      next()
    }
	}
</script>