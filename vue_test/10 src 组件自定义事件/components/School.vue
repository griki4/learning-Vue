<template>
  <div class="school">
    <h2>学校名字:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="send">点击将数据交给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data() {
    return {
      name:"HTI",
      address:'haerbin'
    }
  },
  methods:{
    send() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
  .school {
    background-color: skyblue;
  }
</style>