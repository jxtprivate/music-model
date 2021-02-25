<template lang="">
  <div class="container" @click="closeSel">
    <div class="tag">
      <h3 style="font-size:20px">
        精品歌单<span class="el-icon-arrow-right"></span>
      </h3>
      <el-button plain round size="mini" @click.stop="tag"
        ><span class="el-icon-place"></span> 全部歌单</el-button
      >
      <transition>
        <div class="box" v-if="flag" id="sellineName">
          <div
            style="width:100%;height:80px;font-size:17px;line-height:80px;border-bottom:1px solid #bbb;padding-left:30px;"
          >
            全部歌单
          </div>
          <div style="margin:20px 20px">
            <span
              v-for="item in tags"
              :key="item.id"
              style=""
              @click="taglist(item.name)"
            >
              <el-tag type="info" color="#ffffff">{{ item.name }}</el-tag>
            </span>
          </div>
        </div>
      </transition>
    </div>

    <div class="content">
      <boutique-box
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></boutique-box>
    </div>
  </div>
</template>
<script>
import boutiqueBox from "../../components/common/BoutiqueBox";
export default {
  data() {
    return {
      list: [],
      flag: false,
      tags: [],
    };
  },
  created() {
    this.getjingpinplay({ limit: 1000 });
    this.getPlayCategoryTag();
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
    taglist(name) {
      //   console.log(id);
      let param = { limit: 1000, cat: name };
      this.getjingpinplay(param);
      this.flag = false;
    },
    tag() {
      this.flag = !this.flag;
    },
    async getjingpinplay(param) {
      const res = await this.$api.getjingpinplay(param);
      //   console.log(res);
      this.list = res.data.playlists;
    },
    async getPlayCategoryTag() {
      const res = await this.$api.getPlayCategoryTag();
      // console.log(res);
      this.tags = res.data.tags;
    },
  },
  components: {
    boutiqueBox,
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
  width: 1280px;
  // background-color: red;
  .tag {
    position: relative;
    width: 1380px;
    height: 30px;
    h3 {
      float: left;
    }
    .el-button {
      float: right;
    }
    .box {
      box-sizing: border-box;
      position: absolute;
      box-shadow: 0px 0px 5px rgba($color: #888, $alpha: 0.5);
      top: 40px;
      right: 0px;
      width: 600px;
      //   height: 500px;
      background-color: #fff;
      z-index: 999;
      overflow: hidden;
    }
  }
  margin: 30px 30px;
  h3:hover {
    cursor: default;
  }
  .content {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
