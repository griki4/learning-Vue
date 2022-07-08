<template>
  <h1>人员信息</h1>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job.type}}</h2>
  <h2>{{person.job.salary}}</h2>
  <h2>{{person.hobby}}</h2>
  <button @click="change">点击修改信息</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: 'App',
  setup(){
    //reactive响应式函数
    let person = reactive({//通过代理对象去操作源对象的数据
      name:'Tom',
      age:18,
      //深度监视数据
      job:{
        type:'web开发',
        salary:'25K'
      },
      hobby:['抽烟','喝酒','烫头']

    })

    function change(){
      person.name = 'Jack'
      person.age = 25
      person.job.type = 'UI设计'
      person.job.salary = '20K'
      //通过索引修改数组数据的方法变得可行
      person.hobby[0] = '学习'
    }

    return {
      person,
      change
    }
  }
}
</script>


