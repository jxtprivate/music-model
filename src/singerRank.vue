<template lang="">
  <div class="container">
    <div style="margin-left:20px">
      <h3>云音乐歌手榜</h3>
      <div class="tag">
        <ul>
          <el-link
            :underline="false"
            
            style="color:#333333"
            v-for="(item, i) in list"
            :key="i"
            @click.native="addClass(i)"
            :class="[{ active: i == selected ? true : false }]"
            ><li style="font-size:14px;font-weight:600;text-align:center">
              {{ item.name }}
            </li></el-link
          >
        </ul>
      </div>
    </div>

    <div class="box">
      <div v-for="(item, i) in artist" :key="item.id" class="boxs">
        <rank-box :item="item" :index="i"></rank-box>
      </div>
      <!-- <div class="mask"></div> -->
    </div>

    <div class="list">
      <ul>
          <el-link :underline="false" style="color:#333" :href="'#/home/singerdetail/'+item.id" v-for="(item, i) in artists" :key="item.id">
              <li >
          <p
            style="width:80px;height:100%;text-align:center;line-height:100px;color:#969697"
          >
            {{ i + 4 }}
          </p>
          <p style="width:80px;height:80px">
            <img
              :src="item.picUrl"
              alt=""
              style="width:100%;height:100%;border-radius:5px;margin-top:10px"
            />
          </p>
          <p
            style="margin:10px;width:500px;heigth:100%;line-height:80px;color:#343434;font-size:14px"
          >
            {{ item.name }}
          </p>
          <p
            style="margin:10px;width:100px;heigth:100%;line-height:80px;color:#969697;position:absolute;top:0;right:0;text-align:center;font-size:12px"
          >
            热度：{{ item.topicPerson }}
          </p>
        </li>
          </el-link>
        
      </ul>
    </div>
  </div>
</template>
<script>
import rankBox from "./components/common/rankBox";
export default {
  data() {
    return {
      list: [
        {
          name: "华语",
        },
        { name: "欧美" },
        { name: "韩国" },
        { name: "日本" },
      ],
      selected: 0,
      artist: [],
      artists: [],
    };
  },
  created() {
    this.getSingerRank({ type: 1 });
  },
  components: {
    rankBox,
  },
  methods: {
    addClass(index) {
      // console.log(index);
      this.selected = index;
      //   console.log(index);
      this.getSingerRank({ type: index + 1 });
    },

    async getSingerRank(param) {
      const res = await this.$api.getSingerRank(param);
      console.log(res.data.list.artists);
      this.artist = res.data.list.artists.slice(0, 3);
      this.artists = res.data.list.artists.slice(3);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin: 15px 10px;
  .tag {
    .el-link {
      font-size: 18px;
    }
    .active {
      color: #000 !important;
      font-weight: 750;
      font-size: 24px !important;
      border-bottom: 3px solid red;
    }
    ul {
      margin: 10px;
      margin-left: -10px;
      font-size: 18px;
      font-weight: 700;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      li {
        width: 50px;
        height: 35px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
  .box {
      position: relative;
    display: flex;
    width: 1280px;
    justify-content: space-between;
    margin-bottom: 10px;
    .boxs:hover .mask {
      display: block;
    }
   
  }
  .list {
    ul {
      margin: 0 10px;
      li {
        position: relative;
        width: 100%;
        height: 100px;

        display: flex;
        background-color: #fff;
      }
      li:nth-child(2n + 1) {
        background-color: #f9f9f9;
      }
      li:hover {
        background-color: #f0f1f2;
        transition: all linear 0.1s;

      }
        .el-link {
    display: block!important;
  }
    }
  }

}
</style>
