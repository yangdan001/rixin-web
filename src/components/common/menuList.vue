
<template>
    <div>
      <template v-for="list in this.menuList" >  
        <el-submenu  v-if="list.children.length>0" :key="list.id" :index="list.index"  > 
          <template slot="title"  style="padding-left:10px" >
            <i class="el-icon-menu"></i>
            <span slot="title">{{ list.name}}</span>
          </template>
          <Menu :menuList="list.children"></Menu> 
        </el-submenu>
        <el-menu-item v-else :index="list.index"  :key="list.id" style="padding-left: 20px;">
          <i class="el-icon-menu"></i>
          <span>{{list.name}}</span>
        </el-menu-item>
      </template>
    </div>
</template>

<script>
    export default{
        name:'Menu',//模板名称
        props:['menuList'],
        data(){
            return {
                mmenuList:[],
            }
        },
        beforeMount(){},
        mounted(){
            this.mmenuList = this.menuList;
        }
    }
</script>

<style>
  .el-menu--collapse  span,
  .el-menu--collapse  i.el-submenu__icon-arrow
  {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
</style>