<template>
  <ul>
<!--    路由组件中接收父组件传递过来的参数-->
    <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Details"
}
</script>

<style scoped>

</style>