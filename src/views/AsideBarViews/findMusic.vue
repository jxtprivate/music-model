<template lang="">
  <div>
      <top-tag :list="list" hrefhead="#/home/findmusic/"></top-tag>
      <router-view></router-view>
  </div>
</template>
<script>
import topTag from '../../components/common/topTag'
export default {
  data() {
    return{
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
    }
  },
  methods: {
     
  },
  components:{
      topTag,
  }
};
</script>
<style lang="scss" scoped></style>
