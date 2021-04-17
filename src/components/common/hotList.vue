<template lang="">
  <div class="content">
    <div class="numbox">{{index}}</div>
    <div class="fontbox">
      <h5>
        {{title}}<span class="iconType" v-if="iconType">HOT</span
        ><span class="count">{{score}}</span>
      </h5>
      <p>{{scribes}}</p>
    </div>
  </div>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    props:['title','scribes','searchWord','content','score','iconType','index']
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  height: 65px;
//   background-color: skyblue;
  .numbox {
    flex: 2;
    height: 60px;
    // background-color: pink;
    line-height: 60px;
    color: red;
  }
  .fontbox {
    flex: 9;
    // display: block;
    height: 60px;
    padding: 10px;
    text-align: start;
    h5 {
      line-height: 20px;
      color: #333333;
    }
    p {
      line-height: 25px;
      font-size: 10px;
      color: #999999;
    }
    .iconType {
      font-size: 5px;
      padding-left: 10px;
      color: red;
      font-style: italic;
      // transform: scale(.1);
      font-weight: 500;
    }
    .count {
      font-size: 5px;
      padding-left: 10px;
      color: #d3d3d3;
    //   font-style: italic;
      // transform: scale(.1);
      font-weight: 400;
    }
  }
}
.content:hover{
    background-color: #f2f2f2;
    cursor: pointer;
}
</style>
