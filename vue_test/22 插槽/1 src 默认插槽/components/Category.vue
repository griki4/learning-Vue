<template>
  <div class="category">
    <h3>{{title}}分类</h3>
<!--    定义一个插槽等待接收数据，当App中组件标签内写入内容的时候就会被放置在插槽所在位置-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title']
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