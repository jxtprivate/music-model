<template lang="">
  <div class="box" >
    <div class="box1">
      <login-detail @getUserInfo="getUserInfo"></login-detail>
    </div>
    
  </div>
</template>
<script>
import loginDetail from "../components/common/loginDetail";
export default {
  data() {
    return {};
  },
  methods: {
    async getUserInfo(data) {
      let param = { phone: data.phone, password: data.password };
      const res = await this.$api.login(param);
      if (res.data.code === 200) {
        this.$message({
          message: "登录成功！！",
          type: "success",
          duration: 1000,
          offset: 200,
        });
      
        // console.log(res.data.account.id);
        localStorage.setItem("id", res.data.account.id);

        setTimeout(() => {
          this.$router.push("/home");
        }, 1000);
      } else {
        this.$notify({
          title: "登录失败",
          message: "请重新登录",
          type: "warning",
        });
      }
      //   console.log(res.data.code);
      // console.log(data);
    },
   
  },
  components: {
    loginDetail,
  },
};
</script>
<style lang="scss" scoped>
.box{
  background:url("../assets/bgp.png") no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 721px;
  // margin-top: 0px!important;
  // padding-top: 0px!important;

}
</style>
