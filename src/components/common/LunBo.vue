<template lang="">
  <div>
    <el-carousel :interval="4000" type="card" height="220px">
      <el-carousel-item v-for="item in list" :key="item.bannerId">
        <h3 class="medium">
          <img :src="item.imageUrl" alt="" style="width:100%;">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props:['list']
};
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  border-radius: 10px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  border-radius: 10px;
}
</style>
