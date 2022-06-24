//多个组件包含相同的数据和方法时，可以提取出来写到另一个JS文件中
//在组件中通过mixin这个配置项引入外部的JS
export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    }
}