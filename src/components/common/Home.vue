<template>
<div class='wrap'>
    <div class="menuWrap">
        <div class='logoWrap'>
        </div>
        <NavMenu></NavMenu>
    </div>
    <TitleHead></TitleHead>
    <div class="content">
        <div>
            <keep-alive >
            <!-- 子路由出口 -->
                <router-view></router-view>
            </keep-alive>
        </div>
        
    </div>
    
</div>

</template>
<script>
import TitleHead from "./Header.vue";
import NavMenu from "./NavMenu.vue";
export default {
    data(){
        return{
           
        }
    },
    methods:{
       
    },
    components:{
        TitleHead,
        NavMenu
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    width: 100%;
    height:100%;
    margin:0;
    padding:0;
    .menuWrap{
        width: 200px;
        height: 100%;
        background-color: #242f42;
        float: left;
        overflow: hidden;
        .logoWrap{
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #cccccc;
        }
    }
    .content{
        width: calc(100% - 200px);
        float: left;
        height: 100%;
        background: #ffffff;
        padding:15px; 
        float: left;
        div{
            background: #F5F5F5;
            height: 100%;
        }
    }
}
</style>
