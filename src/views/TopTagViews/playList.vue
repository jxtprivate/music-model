<template lang="">
  <div class="container" @click="closeSel">
    <div class="hotlist" @click="$router.push('/home/findmusic/boutique')">
      <img :src="detail.coverImgUrl" alt="精品歌单" v-if="detail.coverImgUrl"/>
      <div class="siger">
        <el-button round style="margin-top:0px">精品歌单</el-button>
        <p style="font-size:18px">{{ detail.name }}</p>
        <p style="font-size:14px">{{ detail.copywriter }}</p>
      </div>
    </div>
    <!-- 分类列表 -->
    <div class="list">
      <el-button round @click.stop="tag"
        ><span ref="catalog">全部歌单</span
        ><span class="el-icon-arrow-right"></span
      ></el-button>
      <!-- 标签栏 -->
      <transition>
        <div class="box" v-if="flag" id="sellineName">
          <div class="all">
            <div @click="log">全部歌单</div>
          </div>
          <ul>
            <li>
              <div>语种</div>
              <el-tag
                type="info"
                effect="plain"
                size="medium"
                v-for="(item, i) in categroy.a"
                :key="i"
                @click="log"
                >{{ item }}</el-tag
              >
            </li>
            <li>
              <div>风格</div>
              <el-tag
                type="info"
                effect="plain"
                size="medium"
                v-for="(item, i) in categroy.b"
                :key="i"
                @click="log"
                >{{ item }}</el-tag
              >
            </li>
            <li>
              <div>场景</div>
              <el-tag
                type="info"
                effect="plain"
                size="medium"
                v-for="(item, i) in categroy.c"
                :key="i"
                @click="log"
                >{{ item }}</el-tag
              >
            </li>
            <li>
              <div>情感</div>
              <el-tag
                type="info"
                effect="plain"
                size="medium"
                v-for="(item, i) in categroy.d"
                :key="i"
                @click="log"
                >{{ item }}</el-tag
              >
            </li>
            <li>
              <div>主题</div>
              <el-tag
                type="info"
                effect="plain"
                size="medium"
                v-for="(item, i) in categroy.e"
                :key="i"
                @click="log"
                >{{ item }}</el-tag
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <div class="content">
      <container-box
        v-for="item in list"
        :key="item.id"
        :title="item.name"
        url="#/home/playlistdetail/"
        :src="item.coverImgUrl"
        :id="item.id"
      >
        <div slot="top-right" style="color:white;font-size:12px">
          <span
            class="el-icon-video-play"
            v-if="item.playCount"
            style="margin-right:5px"
          ></span
          >{{
            item.playCount ? (item.playCount / 10000).toFixed(2) + "万" : ""
          }}
        </div>
      </container-box>
    </div>
  </div>
</template>
<script>
// import {mapActions} from 'vuex';
import containerBox from "../../components/common/containerBox";
export default {
  components: {
    containerBox,
  },
  data() {
    return {
      detail: {},
      list: [],
      flag: false,
      categroy: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
      },
    };
  },
  created() {
    this.getPlayList();
    this.getRecommendPlay({ limit: 1000 });
    this.getPlayCatagroy();
  },
  methods: {
    closeSel(event) {
      var currentCli = document.getElementById("sellineName");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          //点击到了id为sellineName以外的区域，隐藏下拉框
          this.flag = false;
        }
      }
    },
    async log(text) {
      // console.log(text.toElement.innerText);
      // console.log(this.$refs.catalog);
      this.$refs.catalog.innerText = text.toElement.innerText;
      this.flag = !this.flag;
      const res = await this.$api.getRecommendPlay({
        cat: text.toElement.innerText,
        limit: 100,
      });
      // console.log(res);
      this.list = res.data.playlists;
    },
    tag() {
      // console.log(1);
      // console.log(this.$refss);
      this.flag = !this.flag;
    },
    async getPlayCatagroy() {
      const res = await this.$api.getPlayCatagroy();
      // console.log(res.data.sub);
      res.data.sub.forEach((item) => {
        switch (parseInt(item.category)) {
          case 0:
            this.categroy.a.push(item.name);
            break;
          case 1:
            this.categroy.b.push(item.name);
            break;
          case 2:
            this.categroy.c.push(item.name);
            break;
          case 3:
            this.categroy.d.push(item.name);
            break;
          case 4:
            this.categroy.e.push(item.name);
            break;
          default:
            break;
        }
      });
    },
    async getPlayList() {
      let param = {
        limit: 1,
      };
      const res = await this.$api.getjingpinplay(param);
      //  console.log(res);
      this.detail = res.data.playlists[0];
      //    console.log( res);
    },
    async getRecommendPlay(param) {
      const res = await this.$api.getRecommendPlay(param);
      // console.log(res.data.playlists);
      this.list = res.data.playlists;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all linear 0.2s;
}
.container {
  position: relative;
  width: 1100px;
  margin: 20px auto;
  .hotlist {
    background-color: rgba($color: #55494f, $alpha: 0.999);
    display: flex;

    width: 100%;
    height: 180px;
    // background-color: pink;
    border-radius: 10px;
    img {
      width: 150px;
      height: 150px;
      //   background-color: red;
      margin: 15px 15px;
      border-radius: 10px;
      overflow: hidden;
    }
    .siger {
      color: #ffffff;
      margin: 50px 15px;
      p {
        margin-top: 10px;
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
  }
  .list {
    margin-top: 15px;
    .box {
      // display: none;
      position: absolute;
      z-index: 999;
      width: 800px;
      // height: 200px;
      background-color: white;
      margin-top: 8px;
      border-radius: 5px;
      box-shadow: 3px 3px 8px #888888;
      .all {
        width: 100%;
        height: 60px;

        // background-color: #eee;
        border-bottom: 1px solid #ddd;
        div {
          width: 100px;
          height: 30px;
          background-color: #ddd;
          text-align: center;
          line-height: 30px;
          margin: 30px 30px;
          border-radius: 8px;
        }
      }
      ul {
        li {
          margin: 20px;
          padding: 10px;
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1px dotted #ddd;
          div {
            // margin:30px;
            width: 100px;
            // height: 80px;
            background-color: #eee;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-radius: 10px;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
