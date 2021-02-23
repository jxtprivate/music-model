<template lang="">
  <div>
    <div class="box">
      <el-link :underline="false" :href="'#/home/singerdetail/'+ item.id">
        <img :src="item.img1v1Url" alt="" />
        <div class="icon">
          <p>
            {{ item.name }}
          </p>
          <span class="el-icon-user-solid"></span>
        </div>
      </el-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.box {
  width: 170px;
  height: 210px;
  // background-color: pink;

  overflow: hidden;
  img {
    width: 170px;
    height: 170px;
    // background-color: red;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .icon {
      // padding: 0px 5px;
      // margin: 10px 2px;
      display: flex;
      justify-content: space-between;
    p {
        float: left;
        width: 100px;
        height: 20px;
        
    }
    span{
        // float:right
        padding: 2px 2px;

    }
  }
}
</style>
