//插件中我们可以定义很多功能
//比如定义全局过滤器，使用自定义方法等等。插件加载后在整个Vue中都可以使用插件定义的功能
export default {
    install(Vue) {
        console.log('Hello World', Vue)
    }
}