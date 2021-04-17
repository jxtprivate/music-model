<template lang="">
    <div class="content">
        <h3>专辑详情</h3>
        <p>{{albums.briefDesc}}</p>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['albums'])
    }
}
</script>
<style lang="scss" scoped>
.content{
    width: 1280px;
    margin: 0 auto;
    h3{
        font-size: 16px;
    }
    p{
        font-size: 14px;
        color: #aaa;
        // text-indent: 2em;
        margin-top: 10px;
        line-height: 26px;
    }
}
    
</style>