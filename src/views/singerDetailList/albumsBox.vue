<template lang="">
  <div>
    <el-link :underline="false" :href="'#/home/albumsdetail/'+ item.id">
      <div class="content">
        <div class="firstBox">
          <el-image :src="item.picUrl" alt="" class="img" lazy/>
        </div>
        <div class="xiao"></div>
        <div class="bottomBox"></div>
        <div class="info">
          <p>{{ item.name }}</p>
          <p>{{ getTime }}</p>
        </div>
      </div>
    </el-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["item"],
  computed: {
    getTime() {
      return this.formate(this.item.publishTime);
    },
  },
  methods: {
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    formate(t) {
      var time = new Date(t);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();

      return y + "-" + this.add0(m) + "-" + this.add0(d);
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 200px;
  height: 210px;
  position: relative;
  margin: 5px 30px;
  // z-index:-1;
  .firstBox {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: white;
    z-index: 999;
    .img {
      width: 100%;
      height: 100%;
      
      
    }
    box-shadow: 1px 0px 4px 0px #383434;
  }
  .xiao {
    // content: "";
    // display: block;
    width: 15px;
    height: 130px;
    background-color: rgba($color: #ffffff, $alpha: 0.4);
    position: absolute;
    top: 10px;
    right: 40px;
    z-index: 99;
    border: 1px solid #bbb;
    box-shadow: -2px 0px 5px 0px #383434;
  }
  .xiao:after {
    content: "";
    position: absolute;
    top: 55px;
    right: -9px;
    display: block;
    width: 15px;
    height: 15px;
    //   background-color: #0d0d0d;
    background-color: rgba($color: #0d0d0d, $alpha: 1);
    border-radius: 50%;
  }
  .bottomBox {
    position: absolute;
    top: 6px;
    right: 22px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #0d0d0d;
    z-index: 1;
  }
  .info {
    position: absolute;
    bottom: 10px;
    p:nth-child(1) {
      font-size: 16px;
      //   margin-bottom: 5px;
    }
    p:nth-child(2) {
      font-size: 12px;
      //   margin-top: 5px;
      padding-top: 5px;
    }
  }
}
</style>
