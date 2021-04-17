<template lang="">
    <div class="container">
        <albums-box :item="item" v-for="item in albums" :key="item.id"></albums-box>
        
    </div>
</template>
<script>
import albumsBox from '../../views/singerDetailList/albumsBox'
export default {
    data(){
        return{
            albums:[],
        }
    },
    created(){
        this.getSingerAlbums({id:this.$route.params.id});
    },
    methods:{
        async getSingerAlbums(param){
            const res = await this.$api.getSingerAlbums(param);
            // console.log(res.data.hotAlbums);
            this.albums = res.data.hotAlbums;
        },
    },
    components:{
        albumsBox,
    },
}
</script>
<style lang="scss" scoped>
.container{
    width: 1300px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    
}
    
</style>