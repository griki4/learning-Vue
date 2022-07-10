<template>
  <input type="text" v-model="text">
  <h3>{{ text }}</h3>
</template>

<script>
import {customRef} from "vue";

export default {
  name: 'App',
  //一个防抖的实现
  setup() {
    function myRef(value) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track()//让Vue跟踪return返回的数据的变化
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()//触发Vue重新解析模板
            }, 500)
          }
        }
      })
    }

    //自定义ref
    let text = myRef('hello')
    return {
      text
    }
  }
}
</script>

<style scoped>

</style>