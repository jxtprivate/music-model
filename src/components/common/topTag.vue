<template lang="">
  <div>
    <div class="tag">
      <ul >
        <el-link
          :underline="false"
          style="color:#333333"
          v-for="(item, i) in list"
          :key="i"
          @click.native="addClass(i)"
          :class="[{ active: i == selected ? true : false }]"
          :href="hrefhead + item.url"
          
          ><li :style="'font-size:'+ size +'px!important'">{{ item.name }}</li></el-link          
        >
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 0,

    };
  },
 created(){
  this.getPath()
 },
 watch:{
   '$route':'getPath'
 },
  methods: {
    getPath(){
      console.log(this.$route.path);
      this.list.forEach((item,index)=>{
        // console.log(item,index);
        if(item.pick == this.$route.path){
          console.log(index);
          this.selected = index;
        }
      })
    },
    addClass(index) {
      // console.log(index);
      this.selected = index;
     
      
    },
  },
  props:['list','size','hrefhead'],
  
};
</script>
<style lang="scss" scoped>
.tag {
    .el-link{
        font-size:18px
    }
  .active {
    color: #000 !important;
    font-weight: 700;
    font-size: 24px !important;
    border-bottom: 3px solid red;
  }
  ul {
      margin: 20px;
      margin-left: 30px;
    font-size: 18px;
    li {
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
