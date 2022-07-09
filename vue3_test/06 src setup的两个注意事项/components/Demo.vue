<template>
  <h1>人员信息</h1>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <slot></slot>
  <button @click="sayhi">点击触发自定义事件</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: 'App',
  props: ['msg', 'gender'],
  emits: ['sayhai'],
  /*  beforeCreate() {
      console.log('beforeCreate')
    },*/
//setup的执行时机在beforeCreate生命周期钩子之前，此时setup中的this是undefined
  setup(prop, context) {
    // console.log('setup')

    // console.log(prop)//prop参数用于接收外部传入给组件的数据

    console.log(context.attrs)//接收外部传入但组件未声明接收的函数
    console.log(context.slots)//接收外部传入的插槽中的内容
    console.log(context.emit)//分发自定义事件的函数


    let person = reactive({
      name: 'Tom',
      age: 18,
    })

    function sayhi() {
      context.emit('sayhai', 666)
    }

    return {
      person,
      sayhi
    }
  }
}
</script>

<style scoped>

</style>