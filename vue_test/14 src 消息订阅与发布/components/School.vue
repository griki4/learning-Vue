<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
  import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
    //接收消息的一方负责订阅消息
      this.pubid = pubsub.subscribe('hello', (megName, data) => {
        console.log(data)
      })

		},
		beforeDestroy() {
      //组件销毁时取消订阅
      pubsub.unsubscribe(this.pubid)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>