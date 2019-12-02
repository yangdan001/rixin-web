<template>
    <div >
        <div>{{name}}</div>
        <div>{{age}}</div>
        <div>{{sex}}</div>
        <input type="text" v-model="sex">
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            name:'jack',
            age:'19',
            sex:'man',
        }
    },
}
</script> 
<style ></style>