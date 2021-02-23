<template lang="">
  <div class="container">
    <div class="box">
      <div class="img" v-if="item.user">
        <img :src="item.user.avatarUrl" alt="" />
      </div>
      <div class="info">
        <p style="color:#0b58b7">
          {{ item.user.nickname }}：<span style="color:#222;font-size:12px">{{
            item.content
          }}</span>
        </p>
        <div v-if="item.beReplied">
          <be-replied :bp="item.beReplied"></be-replied>
        </div>

        <p style="color:#9f9f9f;font-size:12px">{{ publishTime }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import beReplied from "../commendComponents/beReplied";
export default {
  components: {
    beReplied,
  },
  props: ["item"],

  computed: {
    publishTime() {
      return this.getYMDHMS(this.item.time);
    },
  },
  methods: {
    getYMDHMS(timestamp) {
      let time = new Date(timestamp);
      let year = time.getFullYear();
      const month = (time.getMonth() + 1).toString().padStart(2, "0");
      const date = time
        .getDate()
        .toString()
        .padStart(2, "0");
      const hours = time
        .getHours()
        .toString()
        .padStart(2, "0");
      const minute = time
        .getMinutes()
        .toString()
        .padStart(2, "0");
    //   const second = time
    //     .getSeconds()
    //     .toString()
    //     .padStart(2, "0");

      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hours +
        ":" +
        minute 
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  .box {
    display: flex;
    width: 100%;
    //   height: 80px;
    border-bottom: 1px solid #ddd;
    padding-top: 20px;
    box-sizing: border-box;
    // text-align: center;
    //   vertical-align:baseline;
    .img {
      margin-top: 5px;
      width: 35px;
      height: 35px;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        background-color: red;

        //   vertical-align: middle;
      }
    }
    .info {
      width: 100%;
      margin: 0px 15px;
      p {
        // height: 30px;
        font-size: 13px;
        margin-bottom: 5px;
        line-height: 30px;
        width: 100%;
      }
      div {
        width: 100%;
      }
    }
  }
}
</style>
