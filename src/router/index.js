import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login';
import userInfo from '../views/userInformation/userInfo';
import userEdit from '../views/userInformation/userEdit';
import findMusic from '../views/AsideBarViews/findMusic';
import findVideo from '../views/AsideBarViews/findVideo';
import findLive from '../views/AsideBarViews/findLive';
import findFriends from '../views/AsideBarViews/findFriends';
import findFm from '../views/AsideBarViews/findFm';
import recommend from '../views/TopTagViews/recommend';
import playListDetail from '../views/PlayListsDetail';

Vue.use(VueRouter);

const routes = [
  { path:'/',redirect:'/home'},
  { path:'/login',component:Login},
  { path:'/home', component:Home, children:[
    {
      path:'userinfo/:id',
      component:userInfo,
      props:true
    },
    {
      path:'useredit',
      component:userEdit
    },
    {
      path:'findmusic',
      component:findMusic,
      children:[
        { path:'/',redirect:'recommend'},
        { path:'recommend', component:recommend }
      ]
    },
    {
      path:'findvideo',
      component:findVideo
    },
    {
      path:'findlive',
      component:findLive
    },
    {
      path:'findfriends',
      component:findFriends
    },
    {
      path:'findfm',
      component:findFm
    },
    {
      path:'playlistdetail/:id',
      component:playListDetail,
      props:true
    }



  ]},
 
];

const router = new VueRouter({
  routes,
  // linkActiveClass:'active'
});

export default router;
