<template>
<div>
  <school></school>
  <student></student>
</div>
</template>

<script>
import Student from "./Student";
import School from "./School"
export default {
  name: "App",
  components: {},

  component:{
    School,
    Student
  }
}
</script>

<style>

</style>