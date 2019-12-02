<template>
<div>
    <div>index</div> 
    <mfilter></mfilter>
    <div @click="enterTest()">路由跳转测试</div> 
    <div @click="setData()">存VUEX</div>
    <div @click="getData()">取vuex</div>
    <p>{{name}}</p>
    <p @click="toCart()"></p>
    <input type="text" v-model="name">
    
    
</div>

</template>
<script>
import mfilter from './filter'
export default {
    data(){
        return{
            name:'张三'
        }
    },
    methods:{
        enterTest(){
             this.$router.push({
                path: '/test'
            })
            // this.comeRouter('/test');
        },
        setData(){
            this.comeRouter('/set');
        },
        getData(){
            this.comeRouter('/get');
        },
        toCart(){
            this.comeRouter('/cart');
        }
    },
    components:{
        mfilter
    }
}
</script>
