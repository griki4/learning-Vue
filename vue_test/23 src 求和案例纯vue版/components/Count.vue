<template>
  <div>
    <h3>当前的和是：{{sum}}</h3>
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
  data(){
    return {
      n:1,
      sum:0
    }
  },
  methods:{
    increment(){
      this.sum += this.n
    },
    decrement(){
      this.sum -= this.n
    },
    incrementOdd(){
      if (this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementLater(){
      setTimeout(() => {
        this.sum += this.n
      },500)
    }
  }
}
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>