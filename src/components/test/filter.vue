<template>
<div>
     <ul>
        <!--添加两个过滤器,注意不要冲突,注意先后顺序-->
        <!-- 过滤器函数总接收表达式的值 (item.id) filterFun1 过滤器函数将会收到 item.id 的值作为第一个参数-->
        <!-- filterFun1 被定义为接收单个参数的过滤器函数，表达式 item.id  的值将作为参数传入到函数中。
        然后继续调用同样被定义为接收单个参数的过滤器函数 filterFun2，将 filterFun1 的结果传递到 filterFun2 中。 -->
        <li v-for="item in list" :key="item.id">{{item.id | filterFun1(item.name,item.age) | filterFun2}}</li>
    </ul>
</div>

</template>
<script>
export default {
    data(){
        return{
            list:[
                {"id":0,"name":"张三","age":"18",'address':'北京市'},
                {"id":1,"name":"李四","age":"19",'address':'南京市'},
                {"id":2,"name":"王五","age":"20",'address':'东京市'},
            ]
        }
    },
    methods:{
       
    }
}
</script>
<style lang="scss">
ul{
    li{
        list-style: none;
    }
}
</style>>
