<template lang="">
  <div class="sideBar">
    <div>
      <ul class="music">
        <el-link
          :underline="false"
          style="color:#333333"
          v-for="(item, i) in list"
          :key="i"
          @click.native="addClass(i)"
          :class="[{ active: i == selected ? true : false }]" 
          :href="'#/home/'+item.url"
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
      list: [
        {
          name:"发现音乐",
          url:'findmusic'
        },
        {
          name:"视频",
          url:'findvideo'
        },
        {
          name:"直播",
          url:'findlive'
        },
        {
          name:"朋友",
          url:'findfriends'
        },
        {
          name:"私人FM",
          url:'findfm'
        }],
      selected: 0,
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
.sideBar {
  
  .active {
    li {
      font-weight: 700;
      background-color: #f6f6f7;
    }
  }
  // background-color: #f6f6f7;
  //   text-align: center;
  .music {
    margin-top: 15px;
    margin-left: 20px;
    float: left;
    box-sizing: border-box;
    li {
      box-sizing: border-box;
      height: 40px;
      width: 200px;
      //   background-color: red;
      font-size: 18px;
      margin: 4px;
      padding: 8px 10px;
      border-radius: 5px;
    }
    li:hover {
      background-color: #f6f6f7;
    }
  }
}
</style>
