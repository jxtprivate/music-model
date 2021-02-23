<template lang="">
  <div class="container">
    <el-table :data="tableData" stripe style="width: 100%" @cell-dblclick="add">
      <el-table-column prop="title" label="音乐标题" width="400">
      </el-table-column>
      <el-table-column prop="name" label="歌手" width="250"> </el-table-column>
      <el-table-column prop="play" label="专辑" width="400"> </el-table-column>
      <el-table-column prop="time" label="时长" width="180"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState,mapActions} from "vuex";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    // ...mapMutations(['queryDateA']),
    ...mapActions(['queryDateA']),
    init() {
      // console.log(this.playLists);
    },
    add(row) {
      // console.log(row);
      this.queryDateA(row);
    },
    getSinger(arr) {
      // console.log(arr);
      var str = "";
      // var arr1 = arr.ar;
      for (var item in arr) {
        if (item < arr.length - 1) str = str + arr[item].name + " / ";
        else str = str + arr[item].name;
      }
      return str;
    },
    format(time) {
      let min = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
      let sec = parseInt((time % (1000 * 60)) / 1000);
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      const formatTime = min + ":" + sec;
      return formatTime;
    },
    packData() {
      // console.log(this.playLists);
      this.tableData = [];
      var arr = this.songList;
      for (var item in arr) {
        // console.log(item,arr[item]);
        this.tableData.push({
          title: arr[item].name,
          name: this.getSinger(arr[item].ar),
          play: arr[item].al.name,
          time: this.format(arr[item].dt),
          id:arr[item].id
        });
      }
    },
  },
  computed: {
    ...mapState(["songList",'curId']),
  },
  watch: {
    songList() {
      // this.init();
      this.packData();
    },
    curId(){
      this.packData();
    }
  },
  created() {
    this.packData();
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.container{
  margin: 0 20px;
  // width: 100%;
}
</style>
