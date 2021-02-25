<template lang="">
  <div class="container">
    <div class="header">
      <el-tag plain type="danger">MV</el-tag>
      <h3>
        {{ detail.name }} <span>{{ detail.artistName }}</span>
      </h3>
    </div>
    <div class="box">
      <video
        width="550"
        height="230"
        controls
        style="width= 100%; height=100%; object-fit: cover"
        ref="video"
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
    <div class="commends">
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 4 }"
        placeholder="请输入内容..."
        resize="none"
        v-model="textarea"
      >
      </el-input>
      <h4 style="margin-top:20px">精彩评论</h4>
      <div v-for="item in hotCommends" :key="item.commentId">
        <users-box :item="item"></users-box>
      </div>
      <h4 style="margin-top:50px">最新评论({{ total }})</h4>
      <div v-for="item in commends" :key="item.commentId">
        <users-box :item="item"></users-box>
      </div>
    </div>
  </div>
</template>
<script>
import usersBox from "../../components/common/commendComponents/usersBox";
export default {
  data() {
    return {
      detail: {},
      textarea: "",
      hotCommends: [],
      commends: [],
      total: 10,
    };
  },
  created() {
    this.getMvUrl({ id: this.$route.params.id, r: 1080 });
    this.getMvDetail({ mvid: this.$route.params.id });
    this.getMvComments({ id: this.$route.params.id, limit: 100 });
  },
  mounted() {},
  methods: {
    async getMvUrl(param) {
      const res = await this.$api.getMvUrl(param);

      this.$refs.video.src = res.data.data.url;
    },
    async getMvDetail(param) {
      const res = await this.$api.getMvDetail(param);
      // console.log(res.data.data);
      this.detail = res.data.data;
    },
    async getMvComments(param) {
      const res = await this.$api.getMvComments(param);
      // console.log(res.data.comments);
      this.total = res.data.total;
      this.hotCommends = res.data.hotComments;
      this.commends =  res.data.comments
    },
  },
  components: {
    usersBox,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 600px;
  margin-top: 20px;
  margin-left: 50px;
  .header {
    display: flex;
    // margin-left: 50px;
  }
  .box {
    margin-left: 10px;
  }
  .commends {
    // margin-left: 10px;
    margin-top: 20px;
  }
}
</style>
