<template>
  <div>
<!--    绑定自定义事件，绑定了一个名为hit的事件，事件触发的时候就调用等号右侧的回调函数-->
    <Student v-on:hit="getStudentName"></Student>
    <hr>
<!--    给组件绑定自定义事件的时候需要添加native修饰符-->
    <School :getSchoolName="getSchoolName" @click.native="show"></School>
<!--    <School ref="student"></School>-->
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";


export default {
  name: "App",
  components:{Student, School},
  methods:{
    getSchoolName(name) {
      console.log(name)
    },
    getStudentName(name) {
      console.log(name)
    },
    show() {
      console.log('show')
    }
  },

/*  mounted() {
    //绑定自定义事件的另一种写法，参数分别是事件名和事件对应的回调函数
    //这种写法更加灵活，可以实现添加定时器等操作
    this.$refs.student.$on('hit', this.getStudentName)
    /!*使用这个方法绑定自定义事件的时候，回调函数必须配置在methods中或者写成箭头函数的形式
    * 因为写成普通函数的形式的时候，回调函数中的this就是组件实例对象而不是父组件*!/
  }*/
}
</script>

<style scoped>

</style>