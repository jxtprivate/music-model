<template lang="">
  <div class="container">
    <div class="img"></div>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="danger"
          size="medium"
          @click="submitForm"
          style="width:100%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      // console.log(this.ruleForm);
      this.$emit('getUserInfo',this.ruleForm);
      
    },
     
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 500px;
  margin: 200px auto;
  // border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 30px;
  padding-top: 80px;
  padding-right: 100px;
  background-color: #c0c4cc;
  .img {
    position: absolute;
    top: 15px;
    left: 220px;
    width: 180px;
    height: 50px;
    background: url("../../assets/logo.png") no-repeat 10px -10px;
    // border: 1px solid red;
  }
}
</style>
