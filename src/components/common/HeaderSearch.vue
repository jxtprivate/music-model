<template lang="">
  <div class="search">
    <el-input
      v-model="state"
      placeholder="请输入内容"
      size="mini"
      prefix-icon="el-icon-search"
      @input="input"
      @focus="focus"
      @blur="blur"
    ></el-input>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
let timer1 = null;//防抖操作
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
    };
  },
  methods: {
    input() {
      if(timer1 != null) clearTimeout(timer1);//防抖/节流
      
      timer1 = setTimeout(() => {
        console.log(this.state);
        this.setKeywords(this.state);
        this.getKeywordSearch(this.state);
      }, 1000);
      if (this.state === "") {
        this.setFlag1F();
        this.setFlagT();
      } else {
        this.setFlagF();
        this.setFlag1T();
      }
    },
    blur(){
      this.setFlagF();
      this.setFlag1F();
    },
    focus(){
      if(this.state === ''){
        this.restriveHotList()
      }
      else{
        // console.log(this.state);//待修改------------------------------------
        this.setFlag1T();
      }
    },
    ...mapMutations([
      "setFlagT",
      "setFlagF",
      "setHotList",
      "setFlag1T",
      "setFlag1F",
      "setKeywords",
      "setResult",
      "setSongsList"
    ]),

    async restriveHotList() {
      
      this.setFlagT();
      const res = await this.$api.getHotSearchList();
      // console.log(res.data.data);
      this.setHotList(res.data.data);
    },
    async getKeywordSearch(param){
      const res = await this.$api.getKeywordSearch({keywords:param});
      console.log(res.data.result);
      let ids = '';
      res.data.result.songs.forEach((item)=>{
        if(ids == ''){
          ids=item.id;
        }
        else{
          ids+=','+item.id
        }
        
      })
      // console.log(ids);
      const res1 = await this.$api.getAllSongs(ids);
      console.log(res1);
      this.setResult(res.data.result);
      this.setSongsList(res1.data.songs);
    }

  },
  created(){
    this.setKeywords(this.state);
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.search {
  margin-left: 10px;
  margin-bottom: 15px;
}
</style>
