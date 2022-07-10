<template>
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
import {reactive, toRef, toRefs} from "vue";

export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: 'Tom',
      age: 25,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    return {
      person,
      //将对象中的某个属性作为响应式数据提交给外部使用。参数一为对象，参数二为对象中的属性名
      /*      name: toRef(person, 'name'),
            age: toRef(person, 'age'),
            salary: toRef(person.job.j1, 'salary')*/

      //将一个对象中的所有属性作为响应式数据交出去
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>