import Vue from "vue";
import Vuex from "vuex";
// import api from '../api/index'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetail:{},
    playLists:{},
    songList:[],
    // songs:[],
    curId:0,
  
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
