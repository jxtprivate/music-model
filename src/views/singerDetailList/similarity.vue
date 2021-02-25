<template lang="">
    <div class="container">
        <div v-for="item in list" :key="item.id" style="margin:10px 20px">
            <singer-box :item="item"></singer-box>
        </div>
       
    </div>
</template>
<script>
import singerBox from '../../components/common/singerBox'
export default {
    data(){
        return{
            list:[],
        }
    },
    created(){
        this.getSimpleSinger({id:this.$route.params.id})
    },
    methods:{
        async getSimpleSinger(param){
            const res = await this.$api.getSimpleSinger(param);
            // console.log(res.data.artists);
            this.list = res.data.artists;
        }
    },
    components:{
        singerBox,
    },
}
</script>
<style lang="scss" scoped>
 .container{
     width: 1200px;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
 }   
</style>