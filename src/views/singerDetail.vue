<template lang="">
  <div class="container">
    <div class="top">
      <div class="img">
        <img :src="artist.cover" alt="" />
      </div>
      <div class="info">
        <h2 style="margin-bottom:10px">{{ artist.name }}</h2>
        <p
          style="margin-bottom:30px;font-size:14px;font-weight:400"
          v-if="artist.transNames"
        >
          {{ artist.transNames[0] }}
        </p>
        <el-button plain round
          ><span class="el-icon-folder-add" style="margin-right:5px"></span
          >收藏</el-button
        >
        <el-button plain round
          ><span class="el-icon-s-custom" style="margin-right:5px"></span
          >个人主页</el-button
        >
        <div class="line">
          <span>单曲数：{{ artist.musicSize }}</span>
          <span>专辑数：{{ artist.albumSize }}</span>
          <span v-if="artist.mvSize !== 0">MV数：{{ artist.mvSize }}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div v-if="list">
        <top-tag
          :list="list"
          size="15"
          :hrefhead="'#/home/singerdetail/' + id + '/'"
        ></top-tag>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import topTag from "../components/common/topTag";
export default {
  data() {
    return {
      artist: {},
      list: [
        {
          name: "热门作品",
          url: "albums",
        },
        {
          name: "专辑",
          url: "albums1",
        },
        {
          name: "MV",
          url: "mv",
        },
        {
          name: "歌手详情",
          url: "description",
        },
        {
          name: "相似歌手",
          url: "similarity",
        },
      ],
    };
  },
  created() {
    this.getSingerDetail({ id: this.id });
  },
  watch:{
    '$route':'updata'
  },
  methods: {
    updata(){
      this.getSingerDetail({ id: this.id });
    },
    async getSingerDetail(param) {
      const res = await this.$api.getSingerDetail(param);
      // console.log(res.data.data.artist);
      this.artist = res.data.data.artist;
    },
  },
  props: ["id"],
  components: {
    topTag,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1300px;
  margin: 20px 10px;
  .top {
    .img {
      width: 210px;
      height: 200px;
      // background-color: pink;
      background: url("../assets/rankbg.png") no-repeat;
      background-size: cover;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .line {
      margin-top: 20px;
      font-size: 14px;
      span {
        margin-right: 20px;
      }
    }
  }
}
</style>
