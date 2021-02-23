<template lang="">
  <div>
    <div class="box">
      <img :src="item.avatarUrl" alt="" />
      <div class="info">
        <p>{{item.nickname}}</p>
        <p>{{item.signature}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['item']
};
</script>
<style lang="scss" scoped>
.box {
  width: 400px;
  height: 130px;
  // border: 1px solid #aaa;
  display: flex;
  img {
    width: 110px;
    height: 100px;
    background-color: pink;
    border-radius: 55px;
    // align-items: center;
    margin-top: 15px;
    margin-left: 20px;
  }
  .info{
      margin-top: 30px;
      p{
          margin: 10px;
      }
   
  }
}
</style>
