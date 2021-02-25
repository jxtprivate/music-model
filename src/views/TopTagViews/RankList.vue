<template lang="">
    <div class="container">
        <div>
           <p style="font-size:18px;font-weight:700;margin-bottom:10px">云音乐特色榜</p> 
           <div class="first">
               <container-box :src="item.coverImgUrl" v-for="item in list" :key="item.id" :id="item.id" url="#/home/playlistdetail/"></container-box>
               <container-box src="https://p1.music.126.net/MJdmNzZwTCz0b4IpHJV6Wg==/109951162865487429.jpg" url="#/home/singerrank"></container-box>
           </div>
        </div>
        <div>
            <p style="font-size:18px;font-weight:700;margin-bottom:10px;margin-top:30px">全球媒体榜</p>
            <div class="second">
               <container-box :src="item.coverImgUrl" v-for="item in lists" :key="item.id" :id="item.id" url="#/home/playlistdetail/"></container-box>
           </div>
        </div>
        

    </div>
</template>
<script>
import containerBox from '../../components/common/containerBox'
export default {
    data(){
        return{

            list:[],
            lists:[],
        }
    },
    created(){
        this.getAllRanklist();
    },
    methods:{
        async getAllRanklist(){
            const res = await this.$api.getAllRanklist();
            this.list = res.data.list.splice(0,4);
            this.lists = res.data.list;
        }
    },
    components:{
        containerBox,
    }
}
</script>
<style lang="scss" scoped>
.container{
    width: 1080px;
    position: relative;
    // height: 200px;
    // background-color: red;
    margin: 30px auto;
    .first{
        display: flex;
        justify-content: space-between;
    }
    .second{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}    
</style>