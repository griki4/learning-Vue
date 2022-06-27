<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handle(todo.id)"/>
<!--      双向数据绑定也能实现修改功能，但是会修改props中的数据，所以最好不要这样做-->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props:['todo','checkTodo','deleteTodo'],
  //修改函数接收到对应的id
  methods:{
    handle(id){
      this.checkTodo(id)
    },
    //定义一个方法通知App组件删除对应id的对象
    handleDelete(id) {
      if (confirm("确定删除吗？")) this.deleteTodo(id)
    }

  }
}
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: skyblue;
  }

  li:hover button {
    display: block;
  }
</style>