<template>
  <h1>当前和:{{ sum }}</h1>
  <button @click="sum++">点击+1</button>
  <hr>
  <h1>{{ msg }}</h1>
  <button @click="msg += '!'">点击加！</button>
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <h1>薪水:{{ person.job.j1.salary }}</h1>
  <button @click="person.name += '~'">点击修改姓名</button>
  <br>
  <button @click="person.age++">点击修改年龄</button>
  <br>
  <button @click="person.job.j1.salary++">点击涨薪</button>
</template>

<script>
import {ref, watch, reactive} from "vue";

export default {
  name: 'App',
  setup() {
    //基本类型的数据值直接被包裹在ref函数生成的对象中，所以监视的时候不用加上.value
    let sum = ref(0)
    let msg = ref('hello')
    //对象类型的数据如果使用ref定义，整个对象也是被包裹在ref对象中并成为一个属性，因此必须使用.value才能获取到该对象
    let person = reactive({
      name: 'Tom',
      age: 25,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    //一、监视一个数据变化,三个参数：1.监视属性名 2.属性变化时执行的回调函数 3.监视配置（是否立刻执行，是否开启深度监视）
    /*    watch(sum, (newValue, oldValue) => {
          console.log(newValue, oldValue)
        },{immediate:true,deep:true})*/

    //二、监视多个属性，写成数组形式
    /*    watch([sum, msg], (newValue, oldValue) => {
          console.log(newValue, oldValue)
        })*/

    /* 三、监视使用reactive配置的对象
    *     1.无法正确获取到oldValue
    *     2.强制开启深度监视，即使配置deep项也无法关闭*/
    /*    watch(person, (newValue, oldValue) => {
          console.log(newValue, oldValue)
        })*/

    //四、监视使用reactive配置的对象的某个属性的时候必须采用函数写法
    /*    watch(() => person.age, (newValue, oldValue) => {
          console.log(newValue, oldValue)
        })*/

    //五、监视reactive配置对象的多个属性的时候
    /*    watch([() => person.name, () => person.age], (newValue, oldValue) => {
          console.log(newValue, oldValue)
        })*/


    //特殊情况，如果监视的reactive配置对象中的属性仍是一个对象，则此时对该对象的深度监视需要手动开启
    watch(() => person.job, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {deep: true})

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped>

</style>