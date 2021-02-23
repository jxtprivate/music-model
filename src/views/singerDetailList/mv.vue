<template lang="">
<div>
    <div class="mvbox">
        <mv-box :item="item" v-for="item in mvs" :key="item.id"></mv-box>
    </div>
</div>
    
</template>
<script>
import mvBox from '../../components/common/mvBox';
export default {
    data(){
        return{
            mvs:[]
        }
    },
    created(){
        this.getSingerMv({id:this.$route.params.id,limit:100})
    },
    methods:{
        async getSingerMv(param){
            const res = await this.$api.getSingerMv(param);
            console.log(res);
            this.mvs = res.data.mvs;
        }
    },
    components:{
        mvBox,
    }
}
</script>
<style lang="scss" scoped>
.mvbox{
    width: 1230px;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
    
</style>