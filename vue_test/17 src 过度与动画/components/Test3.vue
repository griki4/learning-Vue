<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
<!--多个元素需要相同的动画时，使用transition-group标签并且给每个元素加上key标识-->
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutDown"
    >
      <h1 v-show="isShow" key="1">Hello</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Test2",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1 {
    background-color: skyblue;
  }


</style>