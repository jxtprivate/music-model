<template lang="">
  <div class="container">
    <div v-if="introduction[0]">
      <div class="content" v-for="(item, i) in introduction" :key="i">
        <h5>{{ item.ti }}</h5>
        <p>{{ item.txt }}</p>
      </div>
    </div>

    <div v-else style="font-size:16px">暂无该歌手描述~</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      introduction: [],
    };
  },
  created() {
    this.getSingerDescribes({ id: this.$route.params.id });
  },
  methods: {
    async getSingerDescribes(param) {
      const res = await this.$api.getSingerDescribes(param);
      // console.log(res);
      this.introduction = res.data.introduction;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  .content:nth-child(n + 2) {
    margin-top: 50px;
    h5 {
      font-size: 16px;
      color: #373737;
    }

    p {
      font-size: 14px;
      // text-indent: 2em;
      color: #888;
      margin-top: 10px;
      line-height: 25px;
      white-space: pre-wrap;
    }
  }
}
</style>
