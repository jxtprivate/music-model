<template lang="">
  <div>
      <top-tag></top-tag>
      <router-view></router-view>
  </div>
</template>
<script>
import topTag from '../../components/common/topTag'
export default {
  data() {
    return{}
  },
  methods: {
    
  },
  components:{
      topTag,
  }
};
</script>
<style lang="scss" scoped></style>
