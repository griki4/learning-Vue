<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
<!--    使用transiton标签包裹需要动画的元素，该标签不会出现在最终结构中-->
    <transition name="hello">
      <h1 v-show="isShow" class="demo">Hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  .demo {
    background-color: skyblue;
  }

  /*进场动画和离场动画*/
  .hello-enter-active {
    animation: hit 1s;
  }

  .hello-leave-active{
    animation: hit 1s reverse;
  }


  @keyframes hit {
    from {
      transform: translateX(-100%);
    }
    to {
    transform: translateX(0px);
         }
  }
</style>