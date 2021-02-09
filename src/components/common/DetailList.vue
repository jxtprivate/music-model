<template lang="">
  <div>
    <el-table :data="tableData" stripe style="width: 100%" @cell-dblclick="add">
      <el-table-column prop="title" label="音乐标题" width="600"> </el-table-column>
      <el-table-column prop="name" label="歌手" width="250"> </el-table-column>
      <el-table-column prop="play" label="专辑" width="400"> </el-table-column>
      <el-table-column prop="time" label="时长" width="180"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "2016-05-02",
          name: "王小虎",
          play: "上海市普陀区金沙江路 1518 弄",
          time:123
        },
        {
          title: "2016-05-04",
          name: "王小虎",
          play: "上海市普陀区金沙江路 1517 弄",
          time:123
        },
        {
          title: "2016-05-01",
          name: "王小虎",
          play: "上海市普陀区金沙江路 1519 弄",
          time:123
        },
        {
          title: "2016-05-03",
          name: "王小虎",
          play: "上海市普陀区金沙江路 1516 弄",
          time:123
        },
      ],
    };
  },
  methods:{
      add(row){
          console.log(row);
      }
  }
};
</script>

<style lang="scss" scoped></style>
