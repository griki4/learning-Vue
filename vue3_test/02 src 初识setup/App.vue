<template>
  <h1>人员信息</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <button @click="sayHello">点击显示信息</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = 'Tom'
    let age = 18
    function sayHello(){
      alert(`姓名${name}，年龄${age}`)
    }
    return {
      name,
      age,
      sayHello
    }

    // return () => h('h1','你好')
  }
}
</script>


