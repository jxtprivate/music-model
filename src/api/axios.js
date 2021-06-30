
import axios from "axios";
//允许跨域携带cookie信息
axios.defaults.withCredentials = true
//配置请求根路径
axios.defaults.baseURL = "https://netease-cloud-music-api-iota-lime.vercel.app/";

export default axios