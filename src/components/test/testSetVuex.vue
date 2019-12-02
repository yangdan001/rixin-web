<template>
    <div>存</div>
</template>
<script>
import { mapMutations  } from "vuex";//引入vuex  
export default {
    data(){
        return {
            //定义待存变量
            myvab:'jingxi',
            testStoreObj:{name:'jack'},
            testStoreArr:['arr1','arr2'],
        }
    },
    created(){
        this.doStore();
    },
    methods:{
        //获取store中的 提前定义好的 用于接收待存变量的 变量
        ...mapMutations({
            aaa: "COMPNAME",// 健：指向本实例的方法this.setDataString  值 ：提前定义在mutation中的变量
            setDataObj: "TESTOBJ",
            setDataArr: "TESTARR",
        }),
        //在所需的方法中 存
        doStore(){
            console.log('存')
            this.aaa(this.myvab);//存字符串
            this.setDataObj(this.testStoreObj);//存对象
            this.setDataArr(this.testStoreArr);//存数组
        }
    }
}
</script>

