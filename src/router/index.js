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
import DetailList from '../components/common/DetailList';
import showCommend from '../components/common/showCommend';
import showSubcribes from '../components/common/showSubcribes';
import RankList from '../views/TopTagViews/RankList';
import playList from '../views/TopTagViews/playList';
import daylyRecommend from '../views/TopTagViews/daylyRecommend';
import singerList from '../views/TopTagViews/singerList';
import broatCast from '../views/TopTagViews/broatCast';
import BoutiquePlay from '../views/TopTagViews/BoutiquePlay';
import singerDetail from '../views/singerDetail';
import albums from '../views/singerDetailList/albums';
import albums1 from '../views/singerDetailList/albums1';
import description from '../views/singerDetailList/description';
import mv from '../views/singerDetailList/mv';
import similarity from '../views/singerDetailList/similarity';
import albumsDetail from '../views/singerDetailList/albumsDetail';
import sl from '../views/singerDetailList/songsList';
import ds from '../views/singerDetailList/describes';
import cm from '../views/singerDetailList/commends';
import mvDetail from '../views/singerDetailList/mvDetail'
import singerRank from '../singerRank'
import lyric from '../views/lyric'

Vue.use(VueRouter);

const routes = [
  { path:'/',redirect:'/login'},
  { path:'/login',component:Login},
  { path:'/home', redirect:'/home/findmusic/recommend',component:Home, children:[
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
      path:'lyric/:id',
      component:lyric
    },
    {
      path:'mvdetail/:id',
      component:mvDetail
    },
    {
      path:'singerrank',
      component:singerRank
    },
    {
      path:'albumsdetail/:id',
      component:albumsDetail,
      props:true,
      children:[
        {
          path:'/', redirect:'songslist'
        },
        {
          path:'songslist',
          component:sl
        },
        {
          path:'commends',
          component:cm
        },
        {
          path:'describes',
          component:ds
        },
      ]
    },
    {
      path:'findmusic',
      component:findMusic,
      children:[
        { path:'/',redirect:'recommend'},
        { path:'recommend', component:recommend },
        { path:'ranklist', component:RankList },
        { path:'playlist', component: playList},
        { path:'singerlist', component: singerList},
        { path:'broatcast', component: broatCast},
        { path:'boutique', component: BoutiquePlay},
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
      path:'daylyrecommend',
      component:daylyRecommend
    },
    {
      path:'singerdetail/:id',
      component:singerDetail,
      props:true,
      children:[
        {
          path:'/', redirect:'albums'
        },
        {
          path:'albums',
          component:albums
        },
        {
          path:'albums1',
          component:albums1
        },
        {
          path:'description',
          component:description
        },
        {
          path:'mv',
          component:mv
        },
        {
          path:'similarity',
          component:similarity
        },
      ]
    },
    {
      path:'playlistdetail/:id',
      component:playListDetail,
      // props:true,
      children:[
        {
          path:'/',redirect:'songlist'
        },
        {
          path:'songlist',
          component:DetailList
        },
        {
          path:'commend',
          component:showCommend
        },
        {
          path:'subscribs',
          component:showSubcribes
        }
      ]
    }



  ]},
 
];

const router = new VueRouter({
  routes,
  // linkActiveClass:'active'
});

export default router;
