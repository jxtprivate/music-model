
import axios from "axios";

axios.defaults.withCredentials = true
//配置请求根路径
axios.defaults.baseURL = "http://localhost:3000/";

export default axios