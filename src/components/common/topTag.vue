<template lang="">
  <div>
    <div class="tag">
      <ul>
        <el-link
          :underline="false"
          style="color:#333333"
          v-for="(item, i) in list"
          :key="i"
          @click.native="addClass(i)"
          :class="[{ active: i == selected ? true : false }]"
          :href="'#/home/findmusic/'+item.url"
          ><li>{{ item.name }}</li></el-link          
        >
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 0,
      list: [
        {
          name: "推荐",
          url: "recommend",
        },
        {
          name: "排行榜",
          url: "findmusic",
        },
        {
          name: "歌单",
          url: "findmusic",
        },
        {
          name: "歌手",
          url: "findmusic",
        },
        {
          name: "主播电台",
          url: "findmusic",
        },
      ],
    };
  },
  methods: {
    addClass(index) {
      // console.log(index);
      this.selected = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.tag {
    .el-link{
        font-size:18px
    }
  .active {
    color: #000 !important;
    font-weight: 700;
    font-size: 24px !important;
    border-bottom: 3px solid red;
  }
  ul {
      margin: 20px;
      margin-left: 30px;
    font-size: 18px;
    li {
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
