<template>
  <h1>x的值为:{{ x.y }}</h1>
  <button @click="x.y++">点击y+1</button>
  <hr>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>薪水:{{ job.j1.salary }}K</h1>
  <button @click="name += '~'">点击修改姓名</button>
  <br>
  <button @click="age++">点击修改年龄</button>
  <br>
  <button @click="job.j1.salary++">点击涨薪</button>
</template>

<script>
import {reactive, toRefs, shallowRef, shallowReactive} from "vue";

export default {
  name: 'App',
  setup() {
    //只监视对象第一层次属性的变化，浅响应式
    let person = shallowReactive({
      name: 'Tom',
      age: 25,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    //传入基本数据类型和ref功能一致
    //传入对象数据类型时不相应对象属性变化，只相应对象被整个替换
    let x = shallowRef({
      y: 0
    })

    return {
      x,
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>