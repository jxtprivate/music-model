<template lang="">
  <div>
    <el-link :underline="false" style="color:#333333" :href="'#/home/playlistdetail/'+ item.id">
      <div class="box">
        <img :src="item.coverImgUrl" alt="" />
        <div class="info">
          <p>{{ item.name }}</p>
          <p>{{ "by " + item.creator.nickname }}</p>
          <p>
            <span style="color:red;border:1px solid red;margin:0 4px">{{
              item.tag
            }}</span>
            {{ item.copywriter }}
          </p>
        </div>
        <div style="position:absolute;top:3px;right:295px;color:#fff;font-size:12px"><span class="el-icon-video-play" v-if="item.playCount" style="margin-right:5px"></span>{{ item.playCount?(item.playCount/10000).toFixed(2) + '万':''}}</div>
      </div>
    </el-link>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.box {
    position: relative;
  display: flex;
  width: 450px;
  height: 160px;
  // background-color: pink;
  margin-bottom: 20px;
  img {
    width: 160px;
    height: 160px;
    // background-color: red;
    border-radius: 8px;
    overflow: hidden;
  }
  .info {
    color: #444;
    margin-top: 20px;
    p:nth-child(1) {
      margin-bottom: 15px;
      margin-left: 10px;
    }
    p:nth-child(2) {
      margin-bottom: 20px;
      margin-left: 10px;
      font-size: 12px;
      color: #9f9fcf;
      font-weight: 300;
    }
    p:nth-child(3) {
      width: 280px;
      height: 20px;
      font-size: 12px;
      color: #ccc;
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 20px;
    }
  }
  
}
</style>
