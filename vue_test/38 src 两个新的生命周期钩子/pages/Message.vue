<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
<!--将参数传递给params而不是query，使用params参数的时候不能使用对象形式的path写法，必须写成name方法-->
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`"></router-link>-->
				<router-link :to="{
          name:'xiangqing',
          query:{
            id:m.id,
            title:m.title,
          }
				}">
          {{m.title}}
        </router-link>&nbsp;&nbsp;
        <button @click="push(m)">push查看</button>
        <button @click="replace(m)">replace查看</button>
			</li>
		</ul>
    <hr>
    <router-view></router-view>
	</div>
</template>

<script>
	export default {
    name: 'Message',
    data() {
      return {
        messageList: [
          {id: '001', title: "消息001"},
          {id: '002', title: "消息002"},
          {id: '003', title: "消息003"}
        ]
      }
    },
    methods: {
      push(m) {
        this.$router.push({
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        })
      },
      replace(m){
        //使用路由器上的API同样可以实现路由跳转
        this.$router.replace({
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        })
      }
    }
  }
</script>