<template lang="">
  <div class="container">
    <div class="lunbo">
      <lun-bo :list="list"></lun-bo>
    </div>
    <div class="recommendList">
      <el-link
        style="font-size:20px;font-weight:700;margin:15px 0"
        :underline="false"
        
        >推荐歌单 ></el-link
      >
      <div class="box">
        <container-box title="每日歌曲推荐" src="https://p2.music.126.net/4T5Q3F9n-AngI39Uh7AH_g==/109951164399406487.jpg" url="#/home/" id="daylyrecommend"></container-box>
        <container-box
          :title="item.name"
          :src="item.picUrl"
          v-for="item in playlists"
          :key="item.id"
          :id="item.id"
          :url="url"
        >
          <div slot="top-right" style="color:white;font-size:12px" ><span class="el-icon-video-play" v-if="item.playCount" style="margin-right:5px"></span>{{ item.playCount?(item.playCount/10000).toFixed(2) + '万':''}}</div>
        </container-box>
      </div>
    </div>
  </div>
</template>
<script>
import LunBo from "../../components/common/LunBo";
import containerBox from "../../components/common/containerBox";
// import { mapMutations } from "vuex";
export default {
  data() {
    return {
      url: "#/home/playlistdetail/",
      list: [],
      playlists: [],
    };
  },
  created() {
    this.getLunbo();
    this.getPlayLists();
  },
  watch: {
    $route() {
      this.getLunbo();
      this.getPlayLists();
    },
  },
  methods: {
    // ...mapMutations(["setPlayLists"]),
    goto(){
      console.log(this.$refs);
    },
    async getLunbo() {
      let activeList = localStorage.getItem("banner");
      if (activeList) {
        activeList = JSON.parse(activeList);
        if (new Date().getTime() - activeList.time <= 30 * 60 * 1000) {
          this.list = activeList.list;
          return;
        }
      }
      let param = { type: 0 };
      const res = await this.$api.getLunbo(param);
      //   console.log(res);
      // console.log(res.data.data.blocks[0].extInfo.banners);
      if (res.data.code === 200) {
        this.list = res.data.banners;
        localStorage.setItem(
          "banner",
          JSON.stringify({
            time: new Date().getTime(),
            list: res.data.banners,
          })
        );
      }
    },
    async getPlayLists() {
      let activeList = localStorage.getItem("playlist");
      if (activeList) {
        activeList = JSON.parse(activeList);
        if (new Date().getTime() - activeList.time <= 30 * 60 * 1000) {
          this.playlists = activeList.playlists;
          return;
        }
      }
      const res = await this.$api.getPlayLists();

      if (res.data.code === 200) {
        //   console.log(res);
        //   this.getPlayLists(res.data.playlists)
        this.playlists = res.data.result.slice(0, 9);
        // this.playlists.unshift({
        //   name: "每日歌曲推荐",
        //   picUrl:
        //     "https://p2.music.126.net/4T5Q3F9n-AngI39Uh7AH_g==/109951164399406487.jpg",
        //   id: 0,
        //   playCount:''
        // });
        localStorage.setItem(
          "plays",
          JSON.stringify({
            time: new Date().getTime(),
            playlists: this.playlists,
          })
        );
        // console.log(this.playlists);
      }
    },
  },
  components: {
    LunBo,
    containerBox,
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  margin: 20px auto;
  width: 1100px;
  .lunbo {
    width: 1100px;
    // height: 00px;
    margin: 0 auto;
  }
  .el-link.el-link--default {
    color: #000;
  }
  .recommendList {
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
