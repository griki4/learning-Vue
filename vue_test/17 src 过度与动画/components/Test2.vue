<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
<!--多个元素需要相同的动画时，使用transition-group标签并且给每个元素加上key标识-->
    <transition-group name="hello">
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">Hello</h1>
    </transition-group>
  </div>
</template>

<script>
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

/*  使用过渡来实现相同的效果*/

  /*进入的起点，离开的终点*/
  .hello-enter,
  .hello-leave-to {
    transform: translateX(-100%);
  }

  .hello-enter-active,
  .hello-leave-active{
    transition: 1s linear;
  }

  /*离开的起点，进入的终点*/
  .hello-leave,
  .hello-enter-to{
    transform: translateX(0px);
  }
</style>