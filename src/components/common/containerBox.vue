<template lang="">
  <div class="info">
    <el-link :underline="false" style="color:#333333"  :href="id?url+id:url">
      <div class="box">
        <el-image :src="src" alt="" lazy class="img"/>
      </div>
      <h4 v-if="title">{{ title }}</h4>
      <div class="slot"><slot name="top-right"></slot></div
    ></el-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "src",'id','url'],
  methods:{
      
  }
};
</script>
<style lang="scss" scoped>
.info {
//   margin: 10px;
margin-bottom: 10px;
  position: relative;
  width: 205px;
  .box {
    width: 205px;
    height: 205px;
    border-radius: 10px;
    // background-color: rgba($color: black, $alpha: 1);
    
    // border: 5px solid black;
    // background-size: cover;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      background: url("../../assets/rankbg.png") no-repeat;
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
