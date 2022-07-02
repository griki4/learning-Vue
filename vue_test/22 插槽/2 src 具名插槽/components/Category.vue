<template>
  <div class="category">
    <h3>{{title}}分类</h3>
<!--    定义多个插槽的时候，如果需要将元素放入对应的插槽则需要给插槽命名
具名插槽就是给插槽命名，组件内使用元素的时候也指定插槽名，实现将指定元素放入指定插槽的效果-->
    <slot name="main"></slot>
    <slot name="footer"></slot>
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