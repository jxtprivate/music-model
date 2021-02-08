import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetail:{},
    playlists:[]
  },
  mutations: {
    setUserInfo(state,res){
      state.userDetail = res
    },
    setPlayLists(state,res){
      state.playlists = res
    }
    
  },
  actions: {},
  modules: {}
});
