<template lang="">
  <div>
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
        },
        {
          name: "排行榜",
          url: "ranklist",
        },
        {
          name: "歌单",
          url: "playlist",
        },
        {
          name: "歌手",
          url: "singerlist",
        },
        {
          name: "主播电台",
          url: "broatcast",
        },
      ],
    };
  },

  methods: {},
  components: {
    topTag,
  },
};
</script>
<style lang="scss" scoped>
.v-enter {
  opacity: 0;
  transform: translateX(-100%);
  
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
  
}
.v-enter-active,.v-leave-active{
  position: absolute;
  transition: all 0.1s ease;
}
</style>
