<template>
  <button @click="isShow = true">点击弹窗</button>
  <!--  将其包裹的HTML结构传送到指定的位置-->
  <Teleport to="body">
    <div v-if="isShow" class="mask">
      <div class="dialog">
        <h1>内容</h1>
        <h1>内容</h1>
        <h1>内容</h1>
        <button @click="isShow = false">关闭弹窗</button>
      </div>
    </div>
  </Teleport>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false)

    return {isShow}
  }
}
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: green;
}
</style>