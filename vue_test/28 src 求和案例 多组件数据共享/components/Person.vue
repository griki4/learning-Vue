<template>
<div>
  <h3>人员列表</h3>
  <input type="text" placeholder="请输入名字" v-model="name">
  <button @click="add">点击添加人员</button>
  <ul>
    <li v-for="p in personList" :key="p.id">{{p.name}}</li>
  </ul>
  <h4>Count组件的和是{{$store.state.sum}}</h4>
</div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data(){
    return {
      name:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personList
    }
  },
  methods:{
    add(){
      const personObj = {id:nanoid(), name:this.name}
      this.$store.commit('ADD', personObj)
      this.name = ''
    }
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>