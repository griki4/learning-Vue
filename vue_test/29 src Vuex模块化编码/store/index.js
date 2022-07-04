//引入Vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
//使用Vuex
Vue.use(Vuex)

//模块化编码的思想，将属于不同类型的数据放入不同的模块
//模块中各自配置自己的actions,mutations,state,getters配置并且开启命名空间
import CountObj from "@/store/CountObj";
import PersonObj from "@/store/PersonObj";

export default new Vuex.Store({
    modules:{
        CountObj,
        PersonObj
    }
})