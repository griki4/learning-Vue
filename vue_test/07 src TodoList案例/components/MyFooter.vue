<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
    </label>
    <span>
          <span>已完成{{doneTodo}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todo','checkAllTodo','clearAllTodo'],

  computed:{
    doneTodo(){
      //reduce方法负责进行条件统计
      //最终返回的是符合条件的数组项的个数
      return this.todo.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    total(){
      return this.todo.length
    },
    isAll() {
      return this.doneTodo === this.total
    }
  },
  methods:{
    checkAll(e){
      this.checkAllTodo(e.target.checked)
    },
    clearAll(){
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>