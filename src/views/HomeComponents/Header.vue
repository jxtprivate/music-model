<template lang="">
  <div class="header">
    <el-link :underline="false" href="#/home"
      ><div class="backImg"></div
    ></el-link>

    <div class="icon">
      <i class="el-icon-arrow-left" @click="back"></i>
      <i class="el-icon-arrow-right" @click="forward"></i>
    </div>
    <div style="height:50px;line-height:50px">
      <header-search></header-search>
    </div>
    <!-- 搜索列表 -->
    <transition name="fade">
      <div class="searchBox" v-if="flag">
        <h5>热搜榜</h5>
        <div class="lists">
          <hot-list
            v-for="(item, i) in hotSeachList"
            :title="item.searchWord"
            :scribes="item.content"
            :score="item.score"
            :iconType="item.iconType"
            :index="i + 1"
            :key="i"
          ></hot-list>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="searchBox1" v-if="flag1">
        <p class="tips">搜"{{ keywords }}"相关的结果></p>
        <div class="singleSongs">
          <p class="title" v-if="result.songs"><i class="el-icon-service"></i> 单曲</p>
          <el-link :underline="false" v-for="item in result.songs" :key="item.id" @click.native="play(item.id)">{{item.name}} - {{item.artists[0].name}}</el-link>
          
        </div>
        <div class="singleSongs">
          <p class="title" v-if="result.artists"><i class="el-icon-s-custom"></i> 歌手</p>
          <el-link :underline="false" v-for="item in result.artists" :key="item.id" :href="'#/home/singerdetail/'+ item.id">{{item.name}}</el-link>
          
        </div>
        <div class="singleSongs">
          <p class="title" v-if="result.albums"><i class="el-icon-s-help"></i> 专辑</p>
          <el-link :underline="false" v-for="item in result.albums" :key="item.id" :href="'#/home/albumsdetail/'+ item.id">{{item.name}} - {{item.artist.name}}</el-link>
        </div>
        <div class="singleSongs">
          <p class="title" v-if="result.playlists"><i class="el-icon-loading"></i> 歌单</p>
          <el-link :underline="false" v-for="item in result.playlists" :key="item.id" :href="'#/home/playlistdetail/'+item.id">{{item.name}}</el-link>
        </div>
      </div>
    </transition>

    <!-- 搜索列表 -->
    <div class="userphoto">
      <el-link :href="'#/home/userinfo/' + userInfo.id" :underline="false">
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
import hotList from "../../components/common/hotList";
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["userInfo", "id"],
  computed: {
    ...mapState(["flag", "hotSeachList", "flag1", "keywords","result"]),
  },
  components: {
    HeaderSearch,
    hotList,
  },
  mounted() {},
  methods: {
    back() {
      // console.log('back');
      this.$router.go(-1);
    },
    forward() {
      // console.log('forward');
      this.$router.go(1);
    },
    play(id){
      // let url = this.getSongUrls(id);
console.log(id);
      this.setCurrentId(id);
    },
   
    ...mapMutations(['setCurrentId']),
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.header {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ec4141;
  .searchBox {
    // display: none;
    position: absolute;
    top: 45px;
    left: 280px;
    width: 350px;
    height: 400px;
    overflow: auto;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    z-index: 9999;
    border-radius: 5px;
    h5 {
      padding-top: 0px;
      line-height: 40px;
    }
  }
  .searchBox1 {
    // box-sizing:content-box;
    .el-link {
      // width: 100%;
      height: 26px;
      background-color: #fff;
      line-height: 26px;
      font-size: 12px;
      color: #333;
      padding-left: 25px;
      // text-align: start!important;
      justify-content: left;
    }
    .el-link:hover {
  background-color: #f5f5f7 !important;
}
    overflow: scroll;
    position: absolute;
    top: 45px;
    left: 280px;
    width: 350px;
    height: 400px;
    overflow: auto;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    z-index: 9999;
    border-radius: 5px;
    .tips {
      font-size: 13px;
      color: #878787;
      line-height: 10px;
      text-align: start;
      padding: 10px;
    }
    .singleSongs {
      width: 100%;
      display: flex;
      flex-direction: column;
      .title {
        // width: 100%;
        height: 26px;
        background-color: #f5f5f7;
        padding-left: 10px;
        line-height: 26px;
        font-size: 12px;
        text-align: start;
      }
    }
  }
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
