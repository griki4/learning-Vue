<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>

<!--      真正需要展示给用户的组件-->
      <template v-slot:default>
        <Child/>
      </template>

<!--      组件未加载时展示给用户的内容-->
      <template v-slot:fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

//异步引入组件
const Child = defineAsyncComponent(() => import('./components/Child'))
export default {
  name: 'App',
  components: {Child},
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>