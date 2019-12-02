<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <!-- <div class="collapse-btn" @click="collapseChage">
    </div> -->
    <div class="header-right">
      <div class="header-user-con">
        <div class="user-avator">
          <img src="static/img/img.jpg" alt="">
        </div>
        <div class="username">{{username}}</div>
        <div class="loginoutBtn" @click='loginout'>
          <i class="el-icon-switch-button"></i>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapse: true,
      activeIndex: "0",
      username: "admin"
    };
  },
  computed: {},
  methods: {
  
     loginout() {
        localStorage.removeItem("");
        // this.SET_TOKENSTATUS(true);  // 当用户主动点击时, tokenStaus设置为true
        this.$router.push("/login");
      },
   
  },
  mounted() {
    
  },
  computed: {
  }
};
</script>
<style lang="scss" scoped src='./Header.scss'>

</style>

