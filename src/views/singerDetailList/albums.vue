<template lang="">
    <div>
        <detail-list></detail-list>
    </div>
</template>
<script>
import DetailList from '../../components/common/DetailList';
import {mapMutations} from 'vuex'
export default {
    data(){
        return{

        }
    },
    created(){
        this.getSingerTopSongs({id:this.$route.params.id})
        // this.init();
    },
    methods:{
        // init(){
        //     console.log(this.$route.params.id);
        // },
        ...mapMutations(['setSongsList']),
        async getSingerTopSongs(param){
            const res = await this.$api.getSingerTopSongs(param);
            // console.log(res.data.songs);
            this.setSongsList(res.data.songs);

        }
    },
    components:{
        DetailList
    },
}
</script>
<style lang="">
    
</style>