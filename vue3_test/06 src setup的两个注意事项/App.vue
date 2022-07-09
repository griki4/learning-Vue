<template>
  <Demo msg="hello" gender="man" @sayhai="say">
    <span>HIT</span>
  </Demo>
</template>

<script>
import Demo from "@/components/Demo";

export default {
  name: 'App',
  components: {Demo},
  setup() {
    function say(value) {
      alert(`hello, ${value}`)
    }

    return {
      say
    }
  }
}
</script>


