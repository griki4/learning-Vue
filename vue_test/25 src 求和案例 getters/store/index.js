//引入Vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
//使用Vuex
Vue.use(Vuex)

//1.创建actions 响应组件的动作
const actions = {
    //参数是上下文和接收到的数据，上下文中包含commit方法负责提交给mutations
    jia(context, value) {
        //没有业务逻辑的时候直接将行为和数据提交给mutations
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },

    //包含业务逻辑（比如定时器或者数据判断时，将逻辑写在actions中）
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        },500)
    }

}

//2.创建mutations 操作数据
const mutations = {
    //真正负责修改数据的位置
    //state即为存储数据的位置，value为外部传入的值
    JIA(state, value){
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    }
}

//3.创建state 存储数据
const state = {
    sum:0
}

//4.创建getters 用于加工处理state中的数据
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}

//创建store
//创建store的时候会使用Vuex，所以应该在index中创建store，main中只需要负责引入即可
export default new Vuex.Store({
    //将所有对象传入Store
    actions,
    mutations,
    state,
    getters
})