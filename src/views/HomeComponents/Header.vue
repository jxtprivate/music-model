<template lang="">
  <div class="header">
    <el-link :underline="false" href="#/home"><div class="backImg"></div></el-link>
    
    <div class="icon">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
    </div>
    <header-search></header-search>
    <div class="userphoto">
      <el-link :href="'#/home/userinfo/'+ userInfo.id"  :underline="false">
        <img :src="userInfo.avatarUrl" alt="" />
      </el-link>
    </div>

    <div class="nickname">{{ userInfo.nickname }}</div>
    <i
      class="el-icon-setting"
      style="color:#f8bbbb;font-size:20px;margin:25px 30px"
    ></i>
  </div>
</template>
<script>
import HeaderSearch from "../../components/common/HeaderSearch";
export default {
  props: ["userInfo",'id'],
  components: {
    HeaderSearch,
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ec4141;
  .backImg {
    width: 200px;
    height: 60px;
    // border:2px solid #ccc;
    background: url("../../assets/logo.png") no-repeat 32px -4px;
  }
  .icon {
    margin-left: 80px;
    margin-top: 3px;
    i {
      cursor: pointer;
      color: white;
      font-size: 18px;
    }
    i:nth-child(2) {
      margin-left: 20px;
    }
  }
  .userphoto {
    margin-left: 850px;
    margin-top: 15px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 17px;
    }
  }
  .nickname {
    margin-left: 10px;
    line-height: 70px;
    color: #f8bbbb;
  }
}
</style>
