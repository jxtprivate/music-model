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
        return axios.get("/recommend/resource")
    },
    //获得歌单详情接口
    getPlayListDetail(param){
        return axios.get("/playlist/detail",{
            params:param
        })
    },









}
export default api;