<template>
  <div>
    <School></School>
  </div>
</template>

<script>
import Student from "@/components/Student";
export default {
  name: "App",
  components:{Student},
  methods:{
    showDOM(){
      //ref标签属性的作用是代替id
      //可以用于获取HTML标签或者是组件，如果用id去标记组件只会得到组件的HTML结构
      console.log(this.$refs.title)
      console.log(this.$refs.com)
    }
  }
}
</script>

<style scoped>

</style>