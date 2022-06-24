<template>
  <div class="demo">
    <h2>学校名字:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name:"HTI",
      address:'haerbin'
    }
  }
}
</script>


<!--scoped属性让样式只服务于当前组件，即使两个组件拥有相同的CSS样式，scoped的存在让他们不会冲突
负责就会按照引入的顺序来覆盖层叠样式-->
<style scoped>
.demo {
  background-color: skyblue;
}
</style>