<template>
    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        doPostBusData(){
            this.$root.bus.$emit('postBus','123')
        }
    }
}
</script>