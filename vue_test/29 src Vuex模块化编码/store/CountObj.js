const CountObj = {
    namespaced:true,//开启命名空间，让外部能够认识改模块的名字
    actions:{
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
    },
    mutations:{
        //真正负责修改数据的位置
        //state即为存储数据的位置，value为外部传入的值
        JIA(state, value){
            state.sum += value
        },
        JIAN(state, value){
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'HIT',
        subject:'前端',
    },
    getters:{
        bigSum(state) {
            return state.sum*10
        }
    }
}

export default CountObj