<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// 清除标签内部样式
html,
body,
p,
a,
div,
h1,
h2,
h3,
h4,
h5,
ul,
li {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: white;
  color: inherit;
  border: none;
}
i {
  font-style: normal;
}
li {
  list-style: none;
}
.el-link.el-link--default {
  color: #606266;

  border: none;
}
.el-slider__runway {
  width: 100%;
  height: 4px !important;
  margin: 10px 0 !important;
  background-color: #e4e7ed;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}
.el-slider__button {
  width: 12px !important;
  height: 12px !important;
  border: 0px solid #ec4141 !important;
  background-color: #ec4141 !important;
  border-radius: 50%;
  transition: 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.el-slider__bar {
  height: 4px !important;
  background-color: #ff4e4e !important;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
}
.el-tag {
  margin: 0px 10px !important;
  margin-bottom: 20px !important;
}


</style>
