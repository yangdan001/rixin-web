import * as types from './mutation-types';
const mutations = {
    //测试
    [types.TESTOBJ](state, obj) {
        state.testObj = obj // 把方法传递过来的参数，赋值给state中的KDobj
    },
    //测试
    [types.TESTARR](state, arr) {
        state.testArr = arr // 把方法传递过来的参数，赋值给state中的KDobj
    },
    //测试
    [types.TESTSTRING](state, string) {
        state.testString = string // 把方法传递过来的参数，赋值给state中的KDobj
    },
    [types.COMPNAME](state, string) {
        state.compName = string // 把方法传递过来的参数，赋值给state中的KDobj
    },
}
export default mutations;
