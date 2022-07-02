<template>
	<div class="container">
		<Category :title="美食">
      <img slot="main" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
      <a slot="footer" href="#">更多</a>
    </Category>

    <Category :title="游戏">
      <ul slot="main">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <template v-slot:footer>
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </template>
    </Category>

    <Category :title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
	</div>
</template>

<script>
  import Category from "@/components/Category";
	export default {
		name:'App',
		components:{Category},
    data(){
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
      }
    }
	}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
