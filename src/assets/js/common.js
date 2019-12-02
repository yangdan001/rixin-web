import Vue from 'vue'
import router from '@/router/index.js'
export default {
    install(Vue, options) {
        //此处封装全局公共方法 全局使用 this.functionName();即可
        //路由跳转
        Vue.prototype.comeRouter = function (params) {
            if (params.constructor == Object) {
                router.push({
                    path: params.path,
                    query: params.query
                })
            } else {
                router.push({
                    path: params
                })
            }
        }
    }
}