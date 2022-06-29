<template>
	<div id="root">
    <button @click="getStudents">点击请求学生信息</button>
    <button @click="getCars">点击请求汽车信息</button>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
    name: 'App',
    methods:{
      getStudents() {
        //axios请求的结果是一个Promise
        //请求地址改为代理服务器的地址
        axios.get('http://localhost:8080/hit/students').then(
          response => {
            console.log('请求成功', response.data)
          },
          error => {
            console.log('请求失败', error.message)
          }
        )
      },
      getCars() {
        //请求地址改为代理服务器的地址
        axios.get('http://localhost:8080/demo/cars').then(
            response => {
              console.log('请求成功', response.data)
            },
            error => {
              console.log('请求失败', error.message)
            }
        )
      }
    }
  }
</script>

<style>

</style>
