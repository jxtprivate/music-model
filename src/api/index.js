import axios from './axios'
const api = {
    //登录接口
    login(param){
        return axios.get("/login/cellphone",{
            params:param
        })
    },
    //登录后，修改用户个人信息接口
    updateUserInfo(param){
        return axios.get("/user/update",{
            params:param
        })
    },
    //获取个人信息接口
    getUserInfo(param){
        return axios.get("/user/detail",{
            params:param
        })
    },
    //获取轮播图接口
    getLunbo(param){
        return axios.get("/banner",{
            params:param
        })
    },
    //获取推荐歌单接口
    getPlayLists(){
        return axios.get("/personalized")
    },
    //获得歌单详情接口
    getPlayListDetail(param){
        return axios.get("/playlist/detail",{
            params:param
        })
    },
    //获取所有歌曲详情
    getAllSongs(ids){
        return axios.get("song/detail?ids=" + ids)
    },
    //获取所有的歌曲url用于播放mp3
    getSongUrls(ids){
        return axios.get("song/url?id=" + ids)
    },
   
    //获取所有的歌单收藏者
    getSubscribes(param){
        return axios.get("/playlist/subscribers",{
            params:param
        })
    },
    //获取精品歌单
    getjingpinplay(param){
        return axios.get("top/playlist/highquality",{
            params:param
        })
    },
    //获得推荐歌单
    getRecommendPlay(param){
        return axios.get("/top/playlist",{
            params:param
        })
    },
    //获得歌单分类
    getPlayCatagroy(){
        return axios.get("/playlist/catlist")
    },
    //获取精品歌单分类标签
    getPlayCategoryTag(){
        return axios.get('/playlist/highquality/tags')
    },
    //获取每日推荐歌曲
    getDaylySongs(){
        return axios.get('/recommend/songs')
    },
    //按各种要求获取歌手分类列表
    getSingerList(param){
        return axios.get('/artist/list',{
            params:param
        })
    },
    //获取歌手详情
    getSingerDetail(param){
        return axios.get('/artist/detail',{
            params:param
        })
    },
    //获取歌手热门50首
    getSingerTopSongs(param){
        return axios.get('/artist/top/song',{
            params:param
        })
    },
    //获取歌手专辑列表
    getSingerAlbums(param){
        return axios.get('/artist/album',{
            params:param
        })
    },
    //获取歌手专辑详情
    getSingerAlbumsDetail(param){
        return axios.get('/album',{
            params:param
        })
    },
    //获取歌手MV
    getSingerMv(param){
        return axios.get('/artist/mv',{
            params:param
        })
    },
    //获取专辑评论
    getAlbumCommends(param){
        return axios.get('/comment/album',{
            params:param
        })
    },
    //获取歌手描述
    getSingerDescribes(param){
        return axios.get('/artist/desc',{
            params:param
        })
    },
    //获取mvurl地址
    getMvUrl(param){
        return axios.get('/mv/url',{
            params:param
        })
    }, 
    //获取mv信息
    getMvDetail(param){
        return axios.get('/mv/url',{
            params:param
        })
    },
    //获取mv评论
    getMvComments(param){
        return axios.get('/comment/mv',{
            params:param
        })
    },
    //获取歌单评论
    getPlayCommends(param){
        return axios.get('/comment/playlist',{
            params:param
        })
    },
    //获取所有榜单
    getAllRanklist(){
        return axios.get('/toplist')
    },
    //获取歌手排行榜
    getSingerRank(param){
        return axios.get('/toplist/artist',{
            params:param
        })
    },
    //获取相似歌手
    getSimpleSinger(param){
        return axios.get('/simi/artist',{
            params:param
        })
    },
    //获取热搜列表
    getHotSearchList(){
        return axios.get('/search/hot/detail')
    },
    //获取关键词搜索列表
    getKeywordSearch(param){
        return axios.get('/search/suggest',{
            params:param
        })
    },
    //获取歌词api/lyric
    getLyric(param){
        return axios.get('/lyric',{
            params:param
        })
    },
    //获取歌曲评论
    getSongComment(param){
        return axios.get('/comment/music',{
            params:param
        })
    },










}
export default api;