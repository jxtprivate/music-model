<template lang="">
  <div>
    <div class="boxs">
      <sub-box
        :subscribes="subscribes"
        v-for="(item, i) in subscribes"
        :item="item"
        :key="i"
      ></sub-box>
    </div>
    <div class="bottom">
      <el-pagination background layout="prev, pager, next" :total="length" :page-size="21" @current-change="change">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import subBox from "./subcribBox";
export default {
  data() {
    return {
      subscribes: [],
      length: 7,
    //   currentPage
    };
  },
  created() {
    this.getSubscribes();
  },
  methods: {
    async getSubscribes() {
      let param = {
        id: this.$route.params.id,
        limit: 9999999,
        // offset: 0,
      };
      const res = await this.$api.getSubscribes(param);
    //   console.log(res.data.subscribers);
      this.length = res.data.subscribers.length;
      this.subscribes = res.data.subscribers.slice(0, 21);
    //   console.log(this.length);
    },
    async change(a){
        // console.log(a);
        let param = {
            id:this.$route.params.id,
            limit:21,
            offset : a-1
        };
        const res = await this.$api.getSubscribes(param);
        // console.log(this.length);
        this.subscribes = res.data.subscribers;
    }
  },
  components: {
    subBox,
  },
};
</script>
<style lang="scss" scoped>
.boxs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.bottom {
    width: 500px;
  margin: 10px auto;
  //   display: block;
}
</style>
