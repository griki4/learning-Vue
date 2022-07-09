<template>
  <h1>当前和:{{ sum }}</h1>
  <button @click="sum++">点击+1</button>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";

export default {
  name: 'App',
  //还支持在组合式API中使用生命周期钩子，并且其优先级要高于在外部书写的生命周期钩子
  //前两个生命周期钩子不提供支持
  setup() {
    let sum = ref(0)
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    return {
      sum
    }
  },
  //Vue3中销毁前和销毁两个声明周期钩子进行了更名，其余不变

  /*  beforeCreate() {
      console.log('---beforeCreate---')
    },
    created() {
      console.log('---created---')
    },
    beforeMount() {
      console.log('---beforeMount---')
    },
    mounted() {
      console.log('---mounted---')
    },
    beforeUpdate() {
      console.log('---beforeUpdate---')
    },
    updated() {
      console.log('---updated---')
    },
    beforeUnmount() {
      console.log('---beforeUnmount---')
    },
    unmounted() {
      console.log('---unmounted---')
    }*/
}
</script>

<style scoped>

</style>