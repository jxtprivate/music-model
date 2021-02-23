<template lang="">
  <div class="container">
    <div class="header">
      <div class="albumbox">
        <div class="firstBox" v-if="detail.album">
          <img :src="detail.album.picUrl" alt="" />
        </div>
        <div class="xiao"></div>
        <div class="bottomBox"></div>
      </div>

      <div class="info">
        <div class="title">
          <el-tag plain type="danger">专辑</el-tag>
          <h2 v-if="detail.album">{{ detail.album.name }}</h2>
        </div>
        <div>
          <p style="font-size:13px;margin:10px 0" v-if="detail.album">
            歌手：{{ detail.album.artist.name }}
          </p>
          <p style="font-size:14px">发行时间：{{getTime}}</p>
        </div>
        <div style="margin-top:20px">
          <el-button round
            ><span class="el-icon-video-play"></span> 播放</el-button
          >
          <el-button round
            ><span class="el-icon-folder-add"></span> 收藏</el-button
          >
          <el-button round
            ><span class="el-icon-s-promotion"></span> 转发</el-button
          >
          <el-button round
            ><span class="el-icon-download"></span> 下载</el-button
          >
          <el-button round
            ><span class="el-icon-chat-line-square"></span> 评论</el-button
          >
        </div>
      </div>
    </div>
    <div class="list">
      <top-tag :list="list" :size="15" :hrefhead="'#/home/albumsdetail/'+$route.params.id+'/'"></top-tag>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import topTag from "../../components/common/topTag";
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      list: [
        {
          name: "歌曲列表",
          url: "songslist",
        },
        {
          name: "评论",
          url: "commends",
        },
        {
          name: "专辑详情",
          url: "describes",
        },
      ],
      detail: "",
    };
  },
  components: {
    topTag,
  },
  computed: {
    getTime() {
        if(this.detail.album){return this.formate(this.detail.album.publishTime);}
        return ''
      
    },
  },
  created() {
    this.getSingerAlbumsDetail({ id: this.$route.params.id });
  },
  methods: {
    ...mapMutations(['setSongsList','setAlbumsInformation']),
    
    async getSingerAlbumsDetail(param) {
      const res = await this.$api.getSingerAlbumsDetail(param);
    //   console.log(res.data);
      this.detail = res.data;
      this.detail = res.data;
      this.setSongsList(res.data.songs);
      this.setAlbumsInformation(res.data.album);
    },
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    formate(t) {
      var time = new Date(t);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();

      return y + "-" + this.add0(m) + "-" + this.add0(d);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  .header {
    display: flex;
    margin: 20px 10px;

    .albumbox {
      width: 280px;
      height: 230px;
      position: relative;
      margin: 5px 30px;
      // z-index:-1;
      .firstBox {
        position: absolute;
        width: 220px;
        height: 220px;
        background-color: pink;
        z-index: 999;
        img {
          width: 100%;
          height: 100%;
        }
        box-shadow: 1px 0px 4px 0px #383434;
      }
      .xiao {
        // content: "";
        // display: block;
        width: 15px;
        height: 195px;
        background-color: rgba($color: #ffffff, $alpha: 0.4);
        position: absolute;
        top: 12px;
        right: 45px;
        z-index: 99;
        border: 1px solid #bbb;
        box-shadow: -2px 0px 5px 0px #383434;
      }
      .xiao:after {
        content: "";
        position: absolute;
        top: 84px;
        right: -13px;
        display: block;
        width: 20px;
        height: 20px;
        //   background-color: #0d0d0d;
        background-color: rgba($color: #0d0d0d, $alpha: 1);
        border-radius: 50%;
      }
      .bottomBox {
        position: absolute;
        top: 15px;
        right: 22px;
        width: 190px;
        height: 190px;
        border-radius: 50%;
        background-color: #0d0d0d;
        z-index: 1;
      }
    }
    .title {
      display: flex;
      .el-tag {
        margin: 4px 0px !important;
        margin-right: 20px !important;
      }
    }
  }
}
</style>
