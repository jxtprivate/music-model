<template lang="">
  <div class="container">
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
</template>
<script>
import usersBox from "../../components/common/commendComponents/usersBox";
// import beReplied from '../../components/common/commendComponents/beReplied';
export default {
  data() {
    return {
      textarea: "",
      hotCommends: [],
      commends: [],
      total: 10,
    };
  },
  created() {
    this.getAlbumCommends({ id: this.$route.params.id, limit: 100 });
  },

  methods: {
    async getAlbumCommends(param) {
      const res = await this.$api.getAlbumCommends(param);
      console.log(res);
      this.total = res.data.total;
      this.hotCommends = res.data.hotComments;
      this.commends = res.data.comments;
    },
  },
  components: {
    usersBox,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1240px;
  margin: 0 auto;
}
</style>
