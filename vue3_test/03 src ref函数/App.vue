<template>
  <h1>人员信息</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.salary}}</h2>
  <button @click="change">点击修改信息</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',
  setup(){
    //响应式的数据需要包含在ref函数中，才能够被Vue捕捉并解析到模板中
    let name = ref('Tom')
    let age = ref(18)
    //对象类型的数据只需要读取对象的名字加上.value然后就能读取对应的属性
    let job = ref({
      type:'web开发',
      salary:'25K'
    })
    function change(){
      name.value = 'Jack'
      age.value = 25
      job.value.type = 'UI设计'
      job.value.salary = '20K'
    }

    return {
      name,
      age,
      job,
      change
    }

    // return () => h('h1','你好')
  }
}
</script>


