<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todo="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyList from "@/components/MyList";
import MyFooter from "@/components/MyFooter";
export default {
  name: "App",
  components: {MyList, MyHeader, MyFooter},
  data(){
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    addTodo(obj){
      this.todos.unshift(obj)
    },
    checkTodo(id){
      this.todos.forEach((item) => {
        if (item.id === id) item.done = !item.done
      })
    },
    deleteTodo(id){
      this.todos = this.todos.filter((item) => item.id !== id)
    },
    checkAllTodo(done){
      this.todos.forEach((item) => {
        item.done = done
      })
    },
    clearAllTodo() {
      this.todos = this.todos.filter((item) => !item.done)
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }

}
</script>

<style scoped>
    /*base*/
    body {
      background: #fff;
    }

    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }

    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }

    .btn:focus {
      outline: none;
    }

    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>