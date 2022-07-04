<template>
  <div>
<!--    展示state中的数据时需要从store身上读取-->
    <h3>当前的和是：{{sum}}</h3>
    <h4>当前的和放大10倍是：{{bigSum}}</h4>
    <h4>我在{{school}}，学习{{subject}}</h4>
<!--    <h4>Person组件的人员总数是{{$store.state.personList.length}}</h4>-->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当和为奇数的时候再加</button>
    <button @click="incrementLater(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "Count",
  methods:{

    ...mapMutations('CountObj',{increment:'JIA', decrement:'JIAN'}),

    ...mapActions('CountObj',{incrementOdd:'jiaOdd', incrementLater:'jiaWait'})
  },

  /*两者都有对应的简写形式，也就是数组形式但是最终的方法名和读取的方法名字必须一致*/
  computed:{

    ...mapState('CountObj',['sum', 'school', 'subject']),

    ...mapGetters('CountObj',['bigSum'])
  }
}
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>