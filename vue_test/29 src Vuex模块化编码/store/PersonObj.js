
const PersonObj = {
    namespaced: true,
    actions: {},
    mutations: {
        ADD(state, value) {
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001', name:'张三'}
        ]
    },
    getters: {}
}
export default PersonObj