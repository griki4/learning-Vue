<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  created() {
    /*    //全局配置，会应用于所有的axios请求
        axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
        axios.defaults.timeout = 5000
        //axios发送并发请求
        axios.all([
            axios.get('/recommend'),
            axios.get('/category')
        ]).then(axios.spread((res1 ,res2) => {
          console.log(res1)
          console.log(res2)
        }))*/

    //创建axios实例进行网络请求
    const instance = axios.create({
      baseURL:'http://152.136.185.210:7878/api/hy66',
      timeout:5000
    })

    instance({
      url:'/recommend'
    }).then(res => console.log(res))
  }
}
</script>

<style>

</style>