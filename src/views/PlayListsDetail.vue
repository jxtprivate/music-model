<template lang="">
  <div class="container">
    <div class="top">
      <div class="img">
        <img :src="playLists.coverImgUrl" alt="" />
      </div>
      <div class="info">
        <p>{{ playLists.name }}</p>
        <div class="userInfo" v-if="playLists.creator">
          <img :src="playLists.creator.avatarUrl" alt="" />
          <h5>{{ playLists.creator.nickname }}</h5>
          <h5>{{ getLocalTime }}</h5>
        </div>
        <div style="margin: 10px 0px">
          <el-button round>播放全部</el-button>
          <el-button round>收藏</el-button>
          <el-button round>分享</el-button>
          <el-button round>下载全部</el-button>
        </div>
        <div v-if="playLists.tags">
          <p style="font-size:13px;font-weight:400;margin-bottom:5px">
            标签：<span v-for="(item, i) in playLists.tags" :key="i"
              >{{ item }} <span v-if="i < playLists.tags.length - 1"> / </span>
            </span>
            <!-- 标签：{{
              detail.tags[0] + " / " + detail.tags[1] + " / " + detail.tags[2]
            }} -->
          </p>
        </div>
        <span style="font-size:13px;font-weight:400;margin-right:20px"
          >歌曲：{{ playLists.trackCount }}</span
        >
        <span style="font-size:13px;font-weight:400"
          >播放：{{ this.updatePlayCount }}</span
        >
        <!-- <p style="font-size:13px;font-weight:400;margin-top:5px">简介：{{ detail.description }}</p> -->
        <el-collapse v-model="activeName" accordion
          ><el-collapse-item title="简介" name="1">
            <p
              style="font-size:13px;font-weight:400;margin-top:5px;width:800px"
            >
              {{
                playLists.description
                  ? playLists.description
                  : "本人很懒，什么都没留下~"
              }}
            </p>
          </el-collapse-item></el-collapse
        >
      </div>
    </div>

    <div v-if="id">
      <top-tag
        :list="list"
        :size="15"
        :hrefhead="'#/home/playlistdetail/' + id + '/'"
      ></top-tag>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import DetailList from "../components/common/DetailList";
import { mapMutations, mapState } from "vuex";
import topTag from "../components/common/topTag.vue";
export default {
  data() {
    return {
      detail: {},
      time: "",
      playCount: "",
      activeName: "",
      list: [
        {
          name: "歌曲列表",
          url: "songlist",
        },
        {
          name: "评论",
          url: "commend",
        },
        {
          name: "收藏者",
          url: "subscribs",
        },
      ],
      id: "",
      
    };
  },
  created() {
    this.init();
    this.getPlayListDetail();
  },
  mounted() {},
  watch: {
    id() {
      this.init();
    },
  },
  methods: {
    getIDs() {},
    ...mapMutations(["setPlayLists",'setSongsList','setSongs']),
    init() {
      this.id = this.$route.params.id;
    },
    async getPlayListDetail() {
      let param = {
        id: this.id,
      };
      const res = await this.$api.getPlayListDetail(param);
      if (res.data.code === 200) {
        this.detail = res.data.playlist;
        // this.getLocalTime(this.detail.updateTime)
        this.setPlayLists(res.data.playlist);
        this.time = this.playLists.updateTime;
        this.playCount = this.playLists.playCount;
        // console.log(this.detail);
        // console.log(res.daplaylist);
        let ids = "";
        res.data.playlist.trackIds.forEach((item) => {
          ids = ids + item.id + ",";
        });
        ids = ids.substr(0, ids.length - 1);
        const res1 = await this.$api.getAllSongs(ids);
        this.setSongsList(res1.data.songs);
        
        // console.log(res1.data.songs);
        
      }
    },
  },
  computed: {
    ...mapState(["playLists"]),
    getLocalTime() {
      // console.log(this.time);
      var date = new Date(this.time);
      const Y = date.getFullYear() + "-";
      const M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      const D = date.getDate() + " ";
      return Y + M + D;
    },
    updatePlayCount() {
      if (this.playCount > 10000) {
        return (this.playCount / 10000).toFixed(2) + "万";
      }
      return this.playCount;
    },
  },
  components: {
    // DetailList,
    topTag,
  },
};
</script>
<style lang="scss">
.el-table td,
.el-table th {
  padding: 8px 0 !important;
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
}
.el-collapse {
  border-top: none !important;
}
.el-collapse-item__header {
  display: flex;
  width: 800px;
  align-items: center;
  height: 30px !important;
  line-height: 30px !important;
  background-color: #fff;
  color: #303133;
  cursor: pointer;
  border-bottom: 1px solid #ebeef5;
  font-size: 13px;
  font-weight: 500;
  transition: border-bottom-color 0.3s;
  outline: 0;
}
.container {
  .top {
    display: flex;
    margin: 30px;
    .img {
      width: 205px;
      height: 205px;
      //   background-color: pink;
      overflow: hidden;
      border-radius: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      p {
        font-size: 24px;
        font-weight: 700;
      }
      margin-left: 20px;
      .userInfo {
        display: flex;
        height: 35px;
        line-height: 10px;
        margin-top: 10px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 30px;
          // background-color: red;
          // border: 1px solid red;
          overflow: hidden;
        }
        h5 {
          font-size: 12px;
          font-weight: 250;
          padding: 10px 10px;
        }
      }
    }
  }
}
</style>
