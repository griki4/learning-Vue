<template>
	<ul>
    <li :style="{opacity}">Hello, Vue</li>
		<li>news001 <input></li>
		<li>news002 <input></li>
		<li>news003 <input></li>
	</ul>
</template>

<script>
	export default {
		name:'News',
    data(){
      return {
        opacity: 1
      }
    },

    //组件被激活时触发的生命周期函数
    activated() {
      this.timer = setInterval(() => {
        this.opacity -= 0.1
        if(this.opacity <= 0) this.opacity = 1
      },16)
    },

    //组件失活（也即是不在页面中展示的时候）时触发的声明周期函数
    deactivated() {
      clearInterval(this.timer)
    }
  }
</script>