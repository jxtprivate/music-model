<template lang="">
  <div class="container" ref="box">
    <div class="search">
      <ul>
        <li>
          <span>语种：</span>
          <el-tag
            v-for="(item, i) in area"
            :key="i"
            effect="plain"
            type="info"
            size="small"
            :class="[{ active: i == selected ? true : false }]"
            @click="addClass(i, item)"
            >{{ item }}</el-tag
          >
        </li>
        <li>
          <span>分类：</span>
          <el-tag
            v-for="(item, i) in type"
            :key="i + 10"
            effect="plain"
            type="info"
            size="small"
            :class="[{ active: i == s1 ? true : false }]"
            @click="addClass1(i, item)"
            >{{ item }}</el-tag
          >
        </li>
        <li>
          <span>筛选：</span>
          <el-tag
            v-for="(item, i) in alphabet"
            :key="i + 20"
            effect="plain"
            type="info"
            size="small"
            :class="[{ active: i == s2 ? true : false }]"
            @click="addClass2(i, item)"
            >{{ item }}</el-tag
          >
        </li>
      </ul>
    </div>
    <!-- 内容区域 -->
    <div>
      <div class="content">
        <div v-for="item in artists" :key="item.id">
          <singer-box :item="item"></singer-box>
        </div>
      </div>
      <div style="margin:20px auto;width:300px">
        <el-pagination background layout="prev, pager, next" :total="1000" :page-size="100"  >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import singerBox from "../../components/common/singerBox";
export default {
  data() {
    return {
      type: ["全部", "男歌手", "女歌手", "乐队"],
      area: ["全部", "华语", "欧美", "日本", "韩国", "其他"],
      alphabet: [],
      selected: 0,
      s1: 0,
      s2: 0,
      type1: -1,
      area1: -1,
      initial: -1,
      artists: [],
    //   currentPages:0,

      //   count: 10,
    };
  },
  computed: {},
  mounted() {
    // let box = this.$refs.box;
    // // console.log(box);
    // box.addEventListener("scroll", this.handleScroll,true);
    // console.log(box);
  },
  created() {
    this.formate();
    this.getSingerList({ type: -1, area: -1, initial: -1 ,limit:100});
  },
  methods: {

    
    formate() {
      this.alphabet = [...Array(26).keys()].map((i) =>
        String.fromCharCode(i + 97)
      );
      this.alphabet.unshift("热门");
      this.alphabet.push("#");
      //   console.log(this.alphabet);
    },
    async getSingerList(param) {
      const res = await this.$api.getSingerList(param);
        // console.log(res);
      this.artists = res.data.artists;
    },
    addClass(index, name) {
      this.selected = index;
      // console.log(name, this.type[this.s1], this.alphabet[this.s2]);

      switch (this.type[this.s1]) {
        case "全部":
          this.type1 = -1;
          break;
        case "男歌手":
          this.type1 = 1;
          break;
        case "女歌手":
          this.type1 = 2;
          break;
        case "乐队":
          this.type1 = 3;
          break;
        default:
          break;
      }
      switch (name) {
        case "全部":
          this.area1 = -1;
          break;
        case "华语":
          this.area1 = 7;
          break;
        case "欧美":
          this.area1 = 96;
          break;
        case "日本":
          this.area1 = 8;
          break;
        case "韩国":
          this.area1 = 16;
          break;
        case "其他":
          this.area1 = 0;
          break;
        default:
          break;
      }
      if (this.alphabet[this.s2] == "热门") {
        this.initial = -1;
      } else if (this.alphabet[this.s2] == "#") {
        this.initial = 0;
      } else this.initial = this.alphabet[this.s2];
      let param = {
        type: this.type1,
        area: this.area1,
        initial: this.initial,
        limit:100
      };
      //   console.log(param);
      this.getSingerList(param);
    },
    addClass1(index, name) {
      this.s1 = index;
      // console.log(name);
      switch (name) {
        case "全部":
          this.type1 = -1;
          break;
        case "男歌手":
          this.type1 = 1;
          break;
        case "女歌手":
          this.type1 = 2;
          break;
        case "乐队":
          this.type1 = 3;
          break;
        default:
          break;
      }
      switch (this.area[this.selected]) {
        case "全部":
          this.area1 = -1;
          break;
        case "华语":
          this.area1 = 7;
          break;
        case "欧美":
          this.area1 = 96;
          break;
        case "日本":
          this.area1 = 8;
          break;
        case "韩国":
          this.area1 = 16;
          break;
        case "其他":
          this.area1 = 0;
          break;
        default:
          break;
      }
      if (this.alphabet[this.s2] == "热门") {
        this.initial = -1;
      } else if (this.alphabet[this.s2] == "#") {
        this.initial = 0;
      } else this.initial = this.alphabet[this.s2];
      let param = {
        type: this.type1,
        area: this.area1,
        initial: this.initial,
        limit:100
      };
        // console.log(param);
      this.getSingerList(param);
    },
    addClass2(index, name) {
      this.s2 = index;
      // console.log(name);
      switch (this.type[this.selected]) {
        case "全部":
          this.type1 = -1;
          break;
        case "男歌手":
          this.type1 = 1;
          break;
        case "女歌手":
          this.type1 = 2;
          break;
        case "乐队":
          this.type1 = 3;
          break;
        default:
          break;
      }
      switch (this.area[this.s1]) {
        case "全部":
          this.area1 = -1;
          break;
        case "华语":
          this.area1 = 7;
          break;
        case "欧美":
          this.area1 = 96;
          break;
        case "日本":
          this.area1 = 8;
          break;
        case "韩国":
          this.area1 = 16;
          break;
        case "其他":
          this.area1 = 0;
          break;
        default:
          break;
      }
      if (name == "热门") {
        this.initial = -1;
      } else if (name == "#") {
        this.initial = 0;
      } else this.initial = name;
      let param = {
        type: this.type1,
        area: this.area1,
        initial: this.initial,
        limit:100
      };
      //   console.log(param);
      this.getSingerList(param);
    },
  },
  components: {
    singerBox,
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 1100px;
  //   height: 100%;
  //   overflow: scroll;
  margin: 20px auto;
  .active {
    color: red !important;
    // font-size: 18px;
    font-weight: 500;
    background-color: #eee !important;
  }
  .search {
    li {
      span {
        font-size: 12px;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // overflow: scroll;
    // height: 500px;
    div {
      margin-bottom: 10px;
    }
  }
}
</style>
