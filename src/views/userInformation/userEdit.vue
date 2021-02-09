<template lang="">
  <div class="edit">
    <h2>编辑个人信息</h2>
    <div>
      昵称：<el-input
        v-model="information.nickname"
        placeholder="请输入内容"
        style="width:500px"
      ></el-input>
    </div>
    <div style="line-height: 100px;">
      介绍：<el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="information.signature"
        style="width:500px"
      >
      </el-input>
    </div>
    <div>
      性别： <el-radio v-model="information.gender" label="0">保密</el-radio>
      <el-radio v-model="information.radio" label="1">男</el-radio>
      <el-radio v-model="information.radio" label="2">女</el-radio>
    </div>
    <div>
      <div class="block">
        <span class="demonstration">生日：</span>
        <el-date-picker
          v-model="information.birthday"
          type="date"
          placeholder="选择日期"
          value-format="timestamp"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      地区：<el-input
        v-model="information.province"
        placeholder="请输入内容"
        style="width:250px"
      ></el-input
      ><el-input
        v-model="information.city"
        placeholder="请输入内容"
        style="width:250px"
      ></el-input>
    </div>
    <div>
      <el-button
        type="success"
        plain
        style="background-color:#f6a0a0;color:#ffffff"
        @click="submit"
        >保存</el-button
      >
      <el-button
        type="success"
        plain
        style="background-color:#fff;color:#232834"
        >取消</el-button
      >
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      information: {
        nickname: "",
        gender: "",
        signature: "",
        birthday: "",
        province: "440000",
        city: "440100",
      },
    };
  },
  computed: {
    ...mapState(["userDetail"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    open1() {
     this.$message({
          message: '修改信息已保存！',
          type: 'success',
          duration:1000,
          offset:200,
          
        });
    },
    async submit() {
      console.log(this.information);
      const res = await this.$api.updateUserInfo(this.information);
      console.log(res);
      if(res.data.code === 200){
          this.open1();
      }
    },
    init() {
      this.information.nickname = this.userDetail.nickname;
      this.information.gender = this.userDetail.gender;
      this.information.signature = this.userDetail.signature;
      this.information.birthday = this.userDetail.birthday;
      this.information.province = this.userDetail.province;
      this.information.city = this.userDetail.city;
    },
  },
};
</script>
<style lang="scss" scoped>
.edit {
  //   width: 550px;
  margin: 50px;
  // display: inline-block;
  div {
    margin-bottom: 15px;
  }
  div:nth-child(7) {
    margin-left: 50px;
  }
  h2 {
    margin-bottom: 40px;
  }
}
</style>
