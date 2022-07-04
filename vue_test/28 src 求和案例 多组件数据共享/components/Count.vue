<template>
  <div>
<!--    展示state中的数据时需要从store身上读取-->
    <h3>当前的和是：{{sum}}</h3>
    <h4>当前的和是：{{$store.getters.bigSum}}</h4>
    <h4>我在{{school}}，学习{{subject}}</h4>
    <h4>Person组件的人员总数是{{$store.state.personList.length}}</h4>
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
    /*类似mapState和mapGetters，方法也有对应的简写形式
    * 作用是前往Actions或者Mutations中读取对应的方法并添加到methods中
    * 因为这里commit是联系Mutations才会使用的，所以使用mapMutations*/
    /*increment(){
      this.$store.commit('JIA', this.n)
    },
    decrement(){
      this.$store.commit('JIAN', this.n)
    },*/
    ...mapMutations({increment:'JIA', decrement:'JIAN'}),


    /*incrementOdd(){
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementLater(){
      this.$store.dispatch('jiaWait', this.n)
    }*/
    ...mapActions({incrementOdd:'jiaOdd', incrementLater:'jiaWait'})
  },

  /*两者都有对应的简写形式，也就是数组形式但是最终的方法名和读取的方法名字必须一致*/
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