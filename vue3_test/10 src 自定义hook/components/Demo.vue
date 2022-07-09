<template>
  <h1>当前和:{{ sum }}</h1>
  <button @click="sum++">点击+1</button>
  <h1>鼠标坐标x:{{ point.x }}， y:{{ point.y }}</h1>
</template>

<script>
import {ref} from "vue";
import usePoint from "@/hooks/usePoint";

export default {
  name: 'App',
  setup() {
    let sum = ref(0)
    //hook的用法类似于mixin，将一套完整的业务逻辑进行提取放入到hook中，让组件中的setup逻辑更加清晰
    let point = usePoint()
    return {
      sum,
      point
    }
  }
}
</script>

<style scoped>

</style>