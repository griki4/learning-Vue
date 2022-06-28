<template>
  <div class="student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{age}}</h2>
    <button @click="sendName">点击提交学生姓名</button>
    <button @click="offevent">点击解绑自定义事件</button>
    <button @click="death">点击销毁student组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name:"张三",
      age:18,
      sex:"man"
    }
  },
  methods:{
    sendName() {
      //两个参数分别使要触发的事件的名字和需要传递给这个事件的参数
      this.$emit('hit', this.name)
    },
    offevent(){
      this.$off('hit')//解绑单个事件
      //解绑多个事件的时候将事件名写成一个数组并作为参数传递
      // this.$off() //不写参数表示解绑所有的自定义事件
    },
    death(){
      this.$destroy()//组件销毁后，原生DOM事件能触发但是页面数据不更新。自定义事件则无法触发
    }
  }

}
</script>

<style scoped>
  .student {
    background-color: orange;
  }
</style>