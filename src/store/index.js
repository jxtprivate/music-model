import Vue from "vue";
import Vuex from "vuex";
// import api from '../api/index'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetail:{},
    playLists:{},
    songList:[],
    hotSeachList:[],
    // songs:[],
    curId:0,
    albums:{},
    keywords:'',
    flag:false,
    flag1:false,
    result:{},
  
  },
  mutations: {
    setUserInfo(state,res){
      state.userDetail = res
    },
    // setPlayLists(state,res){
    //   state.playlists = res
    // }
    setPlayLists(state,res){
      state.playLists = res
    },
    setSongsList(state,res){
      state.songList = res
    },
    setSongs(state,res){
      state.songs = res 
    },
    setCurrentId(state,id){
      state.curId = id;
    },
    setAlbumsInformation(state,res){
      state.albums = res
    },
    setFlagT(state){
      state.flag = true
    },
    setFlagF(state){
      state.flag = false
    },
    setFlag1T(state){
      state.flag1 = true
    },
    setFlag1F(state){
      state.flag1 = false
    },
    setHotList(state,res){
      state.hotSeachList = res;
    },
    setKeywords(state,res){
      state.keywords = res;
    },
    setResult(state,res){
      state.result = res;
    },


    
  },
  actions: {
    queryDateA({state,commit},row){
      // console.log(state.songs.data.data,row);
      if(state.songList.some(item => parseInt(item.id) === parseInt(row.id) )){
        // console.log(123);
        commit('setCurrentId',row.id)
        return;
      }
      
      
    },


  },
  modules: {}
});
