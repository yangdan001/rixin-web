<template>
  <div class="login-wrap">
    <div class="mark"> </div>
      <div class="ms-title">后台管理系统</div>
      <div class="ms-login">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="demo-ruleForm"
        >
          <el-form-item prop="accountName">
            <el-input v-model="ruleForm.accountName" placeholder="accountName"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="password"
              v-model="ruleForm.password"
              @keyup.enter.native="submitForm('ruleForm')"
            ></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      ruleForm: {
        accountName: "admin",
        password: "Admin1"
      },
      rules: {
        accountName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("ms_username", this.ruleForm.username);
          this.$router.push("/");
        //
          // let newObj = Object.assign({}, this.ruleForm);//Object.assign es6属性 用于对象的合并 将源对象所有可枚举属性全部赋值到目标对象;
          // newObj.password = this.$md5(newObj.password);
          // this.$axios
          //   .post("/empi/login", newObj)
          //   .then(res => {
          //     let data = res.data;
          //     if (res.success) {
          //       this.$router.push("/");
          //       localStorage.setItem("token", data.token);
          //       this.$notify({
          //         type: "success",
          //         message: "欢迎你," + this.ruleForm.accountName,
          //         duration: 3000
          //       });
          //     } else {
          //       this.$message({
          //         type: "warning",
          //         message: res.message,
          //         showClose: true
          //       });
          //     }
          //   })
          //   .catch(err => {
          //     console.log(err);
          //   });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
    // ...mapMutations({
    //   setItems: "SET_ASIDEDATA"
    // })
  }
};
</script>

<style >
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/loginBg.jpg");
  background-size: 100% 100%;
}
.mark{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top:0;
  background: #000000;
  opacity: 0.7;
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
</style>