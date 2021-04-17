<template lang="">
  <div class="container">
    <el-link :underline="false" style="color:#333" :href="'#/home/singerdetail/'+item.id">
      <div class="box">
        <div class="img">
          <img :src="item.picUrl" alt="" />
        </div>
      </div>
      <div class="box_first">{{ index + 1 }}</div>
      <div class="box_second"></div>
      <div class="info">
        <p style="font-weight:200;margin-top:5px">{{ item.name }}</p>
        <p style="font-weight:200;color:#c2c2c2;font-size:10px;margin-top:5px">
          热度：{{ item.topicPerson }}
        </p>
      </div>

    </el-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["item", "index"],
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 380px;
  .box {
    position: relative;
    width: 380px;
    height: 110px;
    background-color: #fafafa;
    z-index: 1;
    border-radius: 5px;
    overflow: hidden;
    .img {
      float: right;
      width: 120px;
      height: 110px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .box_first {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50px;
    height: 50px;
    font-size: 40px;
    padding-left: 5px;
    box-sizing: border-box;
    background-color: #fff;
    color: #94d7fd;
    // text-align: center;
    line-height: 35px;
    z-index: 2;
  }
  .box_second {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-right: 25px solid #fafafa;
    border-bottom: 25px solid #fafafa;
    border-left: 25px solid transparent;
    z-index: 3;
  }
  .info {
    position: absolute;
    top: 31px;
    left: 34px;
    width: 200px;
    height: 50px;
    // background-color: pink;
    z-index: 999;
  }

  
  
}
</style>
