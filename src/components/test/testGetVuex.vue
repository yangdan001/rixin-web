<template>
<div>
    <div>取</div>
    <div @click="getInfo()"></div>
    <p>{{name}}</p>
</div>
    
</template>
<script>
import { mapGetters } from "vuex";//引入vuex
export default {
    data(){
        return {
          obj:{},//定义用于接收store的值
          string:'',
          arr:[],
          name:''
        }
    },
    created(){
        this.getStore();
    },
    computed: {
        ...mapGetters(['testObj','testString','testArr','_compName'])//在computed计算属性中获取 已经存在store的值
    },
    methods:{
        getStore(){
           this.obj = this.testObj; //将store的值赋给本实例变量
           this.string = this.testString;
           this.arr = this.testArr;
           this.name = this._compName;
        //    console.log('取this.obj',this.obj)
        //    console.log('取this.string',this.string)
        //    console.log('取this.arr',this.arr)
           console.log('取name-----',this.name)
        },
        getInfo(){
            // this.$axios.get('url',{}).then( res => {
            //     console.log(123)
            // })
        }
    }
}
</script>

