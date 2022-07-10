<template>

</template>

<script>
import {reactive, readonly, ref, isReactive, isRef, isProxy, isReadonly} from "vue";

export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: 'Tom',
      age: 20
    })

    let p2 = readonly(person)
    let sum = ref(0)


    console.log(isReactive(person))
    console.log(isRef(sum))
    console.log(isReadonly(p2))

    console.log(isProxy(p2))//readonly返回的数据也是一个代理对象而非普通对象，只是数据不可修改而已
    console.log(isProxy(person))

    return {
      person,
      p2,
      sum,
    }
  }
}
</script>


