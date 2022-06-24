<template>
  <div class="demo">
    <h2 @click="showName">学校名字:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
import {mixin} from "../mixin";

export default {
  name: "School",
  data() {
    return {
      name:"HTI",
      address:'haerbin'
    }
  },
  //引入外部的JS中定义的数据和方法
  mixins:[mixin]
}
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>