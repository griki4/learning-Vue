<template>
  <button @click="isTrue = !isTrue">显示/隐藏</button>
  <Demo v-if="isTrue"></Demo>
</template>

<script>
import Demo from "@/components/Demo";
import {ref} from "vue";

export default {
  name: 'App',
  components: {Demo},
  setup() {
    let isTrue = ref(true)
    return {
      isTrue
    }
  }

}
</script>


