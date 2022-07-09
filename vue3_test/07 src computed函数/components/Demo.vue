<template>
  <h1>人员信息</h1>
  姓：<input type="text" v-model="person.firstName">
  <hr>
  名：<input type="text" v-model="person.lastName">
  <hr>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {reactive, computed} from "vue";

export default {
  name: 'App',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })

    //简写形式，不考虑计算属性被修改
    /*person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })*/

    //完整写法，考虑计算属性被修改的情况
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        value = value.split('-')
        person.firstName = value[0]
        person.lastName = value[1]
      }
    })
    return {
      person
    }
  }
}
</script>

<style scoped>

</style>