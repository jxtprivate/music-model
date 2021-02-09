<template>
  <div class="home">
    <el-container>
      <el-header height="70px"
        ><Header :userInfo="userInfo"></Header
      ></el-header>
      <el-container style="height:660px">
        <el-aside width="245px">
            <Asider></Asider>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer height="70px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./HomeComponents/Header";
import Asider from "./HomeComponents/Asider";
import {mapMutations, mapState} from 'vuex'
export default {
  data() {
    return {
      userInfo:{}
    };
  },
  computed:{
    ...mapState(['userDetail'])
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    computedUserInfo(data) {
      return {
        nickname: data.profile.nickname,
        id: data.profile.userId,
        avatarUrl: data.profile.avatarUrl,
        backgroundUrl: data.profile.backgroundUrl,
        level:data.level,
        signature:data.profile.signature,
        gender:data.profile.gender,
        birthday:data.profile.birthday,
        province:data.profile.province,
        city:data.profile.city
      };
    },
    async getUserInfo() {
      // const json = JSON.parse(localStorage.getItem("id"))
      let param = { uid: localStorage.getItem("id") };
      const res = await this.$api.getUserInfo(param);
      // console.log(res);
      // console.log(res.data.profile);
      const newValue = this.computedUserInfo(res.data);
      this.userInfo = newValue;
      // console.log(this.userInfo);
      this.setUserInfo(newValue);
    },
  },

  components: {
    Header,
    Asider,
  },
};
</script>

<style lang="scss" scoped>
.home {
  // margin: 20px 50px;

  .el-header,
  .el-footer {
    padding: 0;
    margin: 0;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #ffffff;
    color: #333;
    border-right: 1px solid #e1e1e1;
    // text-align: center;
    // line-height: 200px;
  }

  .el-main {
    padding: 0;
    background-color: #ffffff;
    color: #333;
    // text-align: center;
    // line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
}
</style>
