<template lang="">
  <div class="info">
    <el-link :underline="false" style="color:#333333">
      <div class="box">
        <img :src="src" alt="" />
      </div>
      <h4>{{ title }}</h4>
      <div class="slot"><slot name="top-right"></slot></div
    ></el-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "src"],
};
</script>
<style lang="scss" scoped>
.info {
//   margin: 10px;
margin-bottom: 10px;
  position: relative;
  width: 220px;
  .box {
    width: 100%;
    height: 225px;
    border-radius: 10px;
    background-color: rgba($color: #38667d, $alpha: 1);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h4 {
    margin-top: 10px;
    margin-left: 5px;
    font-weight: 400;
  }
  .slot {
    position: absolute;
    top: 5px;
    right: 8px;
    // color: red;
  }
}
</style>
