<template lang="">
  <div class="header">
    <el-link :underline="false" href="#/home"><div class="backImg"></div></el-link>
    
    <div class="icon">
      <i class="el-icon-arrow-left" @click="back"></i>
      <i class="el-icon-arrow-right" @click="forward"></i>
    </div>
    <div style="height:50px;line-height:50px"><header-search></header-search></div>
    
    <div class="userphoto">
      <el-link :href="'#/home/userinfo/'+ userInfo.id"  :underline="false">
        <img :src="userInfo.avatarUrl" alt="" />
      </el-link>
    </div>

    <div class="nickname">{{ userInfo.nickname }}</div>
    <i
      class="el-icon-setting"
      style="color:#f8bbbb;font-size:20px;margin:15px 30px"
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
  methods: {
    back(){
      // console.log('back');
      this.$router.go(-1)
    },
    forward(){
      // console.log('forward');
      this.$router.go(1)
    }
  },
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
    width: 80px;
    height: 50px;
    margin-left: 50px;
    // margin-bottom: 20px;
    line-height: 50px;
    i {
      cursor: pointer;
      color: white;
      font-size: 16px;
    }
    i:nth-child(2) {
      margin-left: 20px;
    }
  }
  .userphoto {
    margin-left: 680px;
    // margin-top: 10px;
    width: 30px;
    height: 30px;
    border-radius: 17px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 17px;
    }
    line-height: 70px;
  }
  .nickname {
    // width: 100px;
    margin-left: 10px;
    line-height: 50px;
    color: #f8bbbb;
  }
}
</style>
