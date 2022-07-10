<template>
  <h1>当前的值和为:{{ sum }}</h1>
  <button @click="sum++">点击y+1</button>
  <hr>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>薪水:{{ job.j1.salary }}K</h1>
  <h1 v-show="person.car">{{ person.car }}</h1>
  <button @click="name += '~'">点击修改姓名</button>
  <br>
  <button @click="age++">点击修改年龄</button>
  <br>
  <button @click="job.j1.salary++">点击涨薪</button>
  <br>
  <button @click="showRaw">点击打印原始对象</button>
  <br>
  <button @click="addCar">点击加车</button>
</template>

<script>
import {reactive, toRefs, ref, toRaw, markRaw} from "vue";

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

    function showRaw() {
      //建一个响应式对象变为普通对象
      let p = toRaw(person)
      console.log(p)
    }

    function addCar() {
      //建一个对象标记为普通对象，不可修改为响应式对象。对象的数据可以修改但是页面数据不会更新
      let car = markRaw({name: '奔驰', price: 40})
      person.car = car
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRaw,
      addCar
    }
  }
}
</script>

<style scoped>

</style>