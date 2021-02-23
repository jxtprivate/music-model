<template lang="">
  <div class="userInfo">
    <div class="userDetail">
      <div class="photo">
        <img :src="userDetail.avatarUrl" alt="" />
      </div>
      <div>
        <h2 class="name">{{ userDetail.nickname }}</h2>
        
        <div class="level"><i>Lv{{userDetail.level}}</i></div>
        <el-link :underline="false" href="#/home/useredit"><div class="eidt">编辑个人信息</div></el-link> 
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {},
  created() {},
  computed: {
    ...mapState(["userDetail"]),
  },
};
</script>
<style lang="scss" scoped>
.userInfo {
  .userDetail {
      display: flex;
    height: 280px;
    background-color: #ffffff;
    .photo {
      width: 160px;
      height: 160px;
      padding: 30px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 110px;
      }
    }
    .name{
        padding-top: 0;
        // line-height: 100px;
        margin-top: 40px;
        font-size: 18px;
    }
    .level{
        font-size: 12px;
        width: 25px;
        height: 16px;
        background-color: #f0f0f0;
        border-radius: 5px;
        text-align: center;
        margin-top: 10px;
        border-bottom: 1px dashed #f2f2f2;
    }
    .eidt{
        width: 150px;
        height: 25px;
        background-color: white;
        font-size: 16px;
        border-radius: 14px;
        text-align: center;
        margin-top: 20px;
        border:1px solid #d3dce6;
        // cursor: pointer;
        

    }

  }
}
</style>
