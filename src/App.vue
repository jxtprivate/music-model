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

</style>
