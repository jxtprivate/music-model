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
          url: "findmusic",
        },
        {
          name: "歌单",
          url: "findmusic",
        },
        {
          name: "歌手",
          url: "findmusic",
        },
        {
          name: "主播电台",
          url: "findmusic",
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
