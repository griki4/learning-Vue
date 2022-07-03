<template>
  <div>
<!--    展示state中的数据时需要从store身上读取-->
    <h3>当前的和是：{{sum}}</h3>
    <h4>当前的和是：{{$store.getters.bigSum}}</h4>
    <h4>我在{{school}}，学习{{subject}}</h4>
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
import {mapState, mapGetters} from 'vuex'
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
  },
  computed:{
    //需要从state或者getters中读取多个数据的时候，使用map前缀的辅助函数可以更加方便
    //key表示属性最终的名字，value则是state中对应的数据
    // ...mapState({sum:'sum', school:'school', subject:'subject'}),
    //计算属性名和读取的数据名字一致的时候还可以采用简写形式
    ...mapState(['sum', 'school', 'subject']),

    //同理getters中的数据也可以这样获取
    // ...mapGetters({bigSum:'bigSum'}),
    ...mapGetters(['bigSum'])
  }
}
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>