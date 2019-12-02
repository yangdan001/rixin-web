<template>
    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$root.bus.$on('getBus',function(data){
            //最好加上判断信息
            console.log('此处增加监听',data)
        })
    },
    methods:{
        doGetBusData(){
            
        }
    }
}
</script>