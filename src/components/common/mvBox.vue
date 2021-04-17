<template lang="">
  <div class="container">
    <el-link :underline="false" :href="'#/home/mvdetail/'+item.id">
      <div class="content">
        <div class="box">
          <span class="el-icon-video-play">
            {{
              item.playCount ? (item.playCount / 10000).toFixed(2) + "万" : ""
            }}</span
          >
          <span>{{ timelength }}</span>
          <el-image :src="item.imgurl" alt="" class="img" lazy/>
        </div>
        <p
          style="margin-top: 5px;padding: 1px 3px;overflow: hidden!important;text-overflow: ellipsis!important;white-space:nowrap!important;color: #666;font-size: 15px;width:230px"
        >
          {{ item.name }}
        </p>
      </div>
    </el-link>
  </div>
</template>
<script>
export default {
  props: ["item"],
  computed: {
    timelength() {
      return this.format(this.item.duration);
    },
  },
  methods: {
    format(time) {
      let min = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
      let sec = parseInt((time % (1000 * 60)) / 1000);
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      const formatTime = min + ":" + sec;
      return formatTime;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-bottom: 30px;
  width: 230px;
  height: 160px;
  .content {
    .box {
      border: 1px solid #eee;

      position: relative;
      width: 230px;
      height: 140px;
      // background-color: pink;
      overflow: hidden;
      border-radius: 5px;
      .img {
        width: 100%;
        max-width: 100%;
        height: auto;
        // background-color: red!important;
      }
      span:nth-child(1) {
        width: 100%;
        height: 20px;
        position: absolute;
        line-height: 20px;
        //   margin-right: 5px;
        padding-right: 5px;
        box-sizing: border-box;
        font-size: 12px;
        color: white;
        text-align: end;
        //   background-color: rgba($color: #000000, $alpha: 0.3);
        // background-image: linear-gradient( rgba(9, 9, 9,0.1),rgba(255, 255, 255,0.1));

        // box-shadow: 3px 3px 3px rgba($color: #888, $alpha: 0.5);;
      }
      span:nth-child(2) {
        position: absolute;
        bottom: 8px;
        right: 8px;
        font-size: 12px;
        color: white;
      }
     
    }
  }
}
</style>
