<template>
  <div class="demo">
<!--    学生的信息是动态提供的，需要根据外部传入的数据进行修改-->
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: 'hello Vue',
    }
  },
  //props配置项用于接收外部使用组件时传给组件的数据
  //props中的数据的优先级是高于data配置项的，组件优先读取props中的数据放在模板中
  //props中的数据是只读的。若要修改则会报错。必要修改时可以在data中复制一份props中的数据

  //1.简单生命的props时，不会进行任何限制
  // props:['name','sex','age']

  /*//对传入数据的类型进行限制
    props: {
      name: String,
      age: Number,
      sex: String
    }*/

  props:{
    name:{
      type:String,
      required:true//表示这个参数是必须的
    },
    age:{
      type:Number,
      default:20//如果这个参数没有值传入，则将20设定为默认值
    },
    sex:{
      type:String,
      required: true
    }
  }


}
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>