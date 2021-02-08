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
        <container-box
          :title="item.name"
          :src="item.picUrl"
          v-for="item in playlists"
          :key="item.id"
        >
          <div slot="top-right">123</div>
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
      list: [],
      playlists: [],
    };
  },
  created() {
    this.getLunbo();
    this.getPlayLists();
  },
  methods: {
    // ...mapMutations(["setPlayLists"]),
    async getLunbo() {
      const res = await this.$http.get("/homepage/block/page");
      // console.log(res.data.data.blocks[0].extInfo.banners);
      if (res.data.code === 200) {
        this.list = res.data.data.blocks[0].extInfo.banners;
      }
    },
    async getPlayLists() {
      const res = await this.$http.get("/recommend/resource");

      if (res.data.code === 200) {
        //   console.log(res);
        //   this.getPlayLists(res.data.playlists)
        this.playlists = res.data.recommend.slice(0, 9);
        this.playlists.unshift({
          name: "每日歌曲推荐",
          picUrl:
            "https://p2.music.126.net/4T5Q3F9n-AngI39Uh7AH_g==/109951164399406487.jpg",
          id: 0,
        });
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
  margin: 20px auto;
  width: 1200px;
  .lunbo {
    width: 1200px;
    // height: 00px;
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
