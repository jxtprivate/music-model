<template lang="">
  <div class="container">
    <div style="margin-left:70px">
      <top-tag :list="list" hrefhead="#/home/findmusic/" :size="17"></top-tag>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import topTag from "../../components/common/topTag";
export default {
  data() {
    return {
      list: [
        {
          name: "推荐",
          url: "recommend",
          pick:'/home/findmusic/recommend'
        },
        {
          name: "排行榜",
          url: "ranklist",
          pick:'/home/findmusic/ranklist'

        },
        {
          name: "歌单",
          url: "playlist",
          pick:'/home/findmusic/playlist'
        },
        {
          name: "歌手",
          url: "singerlist",
          pick:'/home/findmusic/singerlist'
        },
        {
          name: "最新音乐",
          url: "broatcast",
          pick:'#/home/findmusic/broatcast'
        },
      ],
    };
  },
  created(){
 
  },
  methods: {},
  components: {
    topTag,
  },
};
</script>
<style lang="scss" scoped>
.container{
  overflow: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
  
}
// .v-enter-to{
//   opacity: 1;
//   transform: translateY(100%);
// }
// .v-leave{
//   opacity: 1;
//   transform: translateX(100px);
// }
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
  
}
.v-enter-active,.v-leave-active{
  position: absolute;
  transition: all .1s ease;
}
</style>
