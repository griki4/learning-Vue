<template>
  <div class="demo">
    <h2 @click="showName">学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{age}}</h2>
  </div>
</template>

<script>
import {mixin} from "@/mixin";

export default {
  name: "Student",
  data() {
    return {
      name:"张三",
      age:18,
      sex:"man"
    }
  },
  //组件中原有的数据和方法的优先级高于mixin引入的
  //对于生命周期钩子这种特殊的函数，在组件和mixin中的都会被应用
  mixins:[mixin]
}
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>