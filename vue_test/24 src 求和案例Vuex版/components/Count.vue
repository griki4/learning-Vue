<template>
  <div>
<!--    展示state中的数据时需要从store身上读取-->
    <h3>当前的和是：{{$store.state.sum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当和为奇数的时候再加</button>
    <button @click="incrementLater">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  methods:{
    increment(){
      //将行为和数据提交给actions
      this.$store.dispatch('jia', this.n)
    },
    decrement(){
      this.$store.dispatch('jian', this.n)
    },
    incrementOdd(){
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementLater(){
      this.$store.dispatch('jiaWait', this.n)
    }
  }
}
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>