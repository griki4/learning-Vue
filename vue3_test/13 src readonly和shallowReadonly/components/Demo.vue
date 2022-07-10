<template>
  <h1>当前的值和为:{{ sum }}</h1>
  <button @click="sum++">点击y+1</button>
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
import {reactive, toRefs, ref, readonly, shallowReadonly} from "vue";

export default {
  name: 'App',
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: 'Tom',
      age: 25,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    //无论层次，对象中的所有数据均不能修改
    // person = readonly(person)

    //对象第一层次的数据不能修改，更深层次的可以
    person = shallowReadonly(person)
    sum = readonly(sum)
    return {
      sum,
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>