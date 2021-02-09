import Vue from "vue";
import Vuex from "vuex";
// import api from '../api/index'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetail:{},
    playLists:{},
    songList:{},
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
    }

    
  },
  actions: {

  },
  modules: {}
});
