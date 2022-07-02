<template>
  <div class="category">
    <h3>{{title}}分类</h3>
<!--    数据绑定，效果是将绑定的数据传递给使用插槽的组件标签内容
另一种父子组件传值的方式-->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
    data(){
  return {
    games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
  }
}
}
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  video{
    width: 100%;
  }
  img{
    width: 100%;
  }
</style>