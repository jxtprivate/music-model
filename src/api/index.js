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
    }










}
export default api;