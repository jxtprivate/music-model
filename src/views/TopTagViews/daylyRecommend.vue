<template lang="">
    <div>
        <div class="header">
            <div class="img"><img src="https://p2.music.126.net/4T5Q3F9n-AngI39Uh7AH_g==/109951164399406487.jpg" alt=""></div>
            
            <div class="info">
                <h2>每日歌曲推荐</h2>
                <p>根据你的音乐口味生成，每日6：00更新</p>
            </div>
        </div>
        <el-button plain round style="margin-left:30px"><span class="el-icon-video-play"> 播放全部</span></el-button>
        <el-button plain round style="margin-left:30px"><span class="el-icon-folder-add"> 收藏全部</span></el-button>
        <detail-list></detail-list>


    </div>
</template>
<script>
import DetailList from '../../components/common/DetailList'
import {mapMutations} from 'vuex'
export default {
    data(){
        return{

        }
    },
    created(){
        this.getDaylySongs()
    },
    methods:{
        ...mapMutations(['setSongsList']),
        async getDaylySongs(){
            const res = await this.$api.getDaylySongs();
            // console.log(res.data.data.dailySongs);
            this.setSongsList(res.data.data.dailySongs)
        }

    },

    components:{
        DetailList,
    }
}
</script>
<style lang="scss" scoped>
.header{
    display: flex;
    margin: 30px;
    .img{
        width: 100px;
        height: 100px;
        
        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
    .info{
        margin-left: 30px;
        margin-top: 20px;
        p{
            font-size:12px;
            margin-top:10px
        }
    }
}
    
</style>