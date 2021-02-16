<template>
  <div class="home">
    <el-container>
      <el-header height="70px"
        ><Header :userInfo="userInfo"></Header
      ></el-header>
      <el-container style="height:660px">
        <el-aside width="245px">
          <Asider></Asider>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer height="70px">
        <audio
          :src="'https://music.163.com/song/media/outer/url?id=' + id + '.mp3'"
          autobuffer
          loop
          ref="audio"
          autoplay
        ></audio>
        <div class="footer">
          <div>
            <div class="img"><img :src="picUrl" alt="" /></div>
            <div class="info">
              <div>{{ title }}</div>
              <div>
                {{ singer }}
              </div>
            </div>
          </div>
          <div>
            <div style="display:block;width:500px">
              <div
                class="playcomponents"
                style="height:40px;width:250px;margin:0 auto;"
              >
                <div
                  style="display:block;width:40px;height:40px;ctext-align:center;line-height:45px"
                >
                  <i class="iconfont icon-bofangqi-shangyiji-copy"></i>
                </div>
                <div
                  style="width:40px;height:40px;background-color:#ebebed;text-align:center;line-height:42px;border-radius:22.5px;cursor:pointer"
                  @click="play"
                >
                  <i v-if="s" class="iconfont icon-to-play"></i>
                  <i class="iconfont icon-to-pause" v-else></i>
                </div>
                <div
                  style="width:40px;height:45px;text-align:center;line-height:40px"
                >
                  <i class="iconfont icon-bofangqi-xiayiji"></i>
                </div>
              </div>
              <div class="block">
                <el-slider
                  v-model="value"
                  :show-tooltip="false"
                  input-size="mini"
                  :max="max"
                  @change="change1"
                ></el-slider>
              </div>
            </div>
          </div>
          <div
            style="width:200px;display:flex;padding-top:25px;padding-right:0px"
          >
            <div style="width:30px;height:40px;margin-right:20px">
              <i class="iconfont icon-icon-voice"></i>
            </div>

            <div class="block" style="width:100px;height:30px">
              <el-slider
                v-model="voice"
                :show-tooltip="false"
                input-size="mini"
                @input="change"
                :step="0.01"
                :max="1"
              ></el-slider>
            </div>
          </div>
        </div>
        <!-- <button @click="log">111</button> -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./HomeComponents/Header";
import Asider from "./HomeComponents/Asider";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      value: 0,
      voice: 1,
      userInfo: {},
      time: 0,
      s: false,
      id: "",
      // index: 0,
      picUrl: "",
      title: "",
      singer: "",
      max: 100,
    };
  },
  computed: {
    ...mapState(["userDetail", "curId", "songList"]),
    
  },
  watch: {
    
    // id() {
    //   console.log(curId);
    // },
 
    // value() {
    //   console.log(this.value);
    //   this.value = this.$refs.audio.currentTime
    //   // if(this.value === parseInt(this.$refs.audio.duration)){
    //   //   this.value = 0
    //   // }
    // },
    curId() {
      // console.log(this.curId);
      this.value = 0
      console.log(123);
      this.s = false;
      this.play();
      this.songList.some((item) => {
        if (parseInt(item.id) === parseInt(this.curId)) {
          this.singer = "";
          this.id = this.curId;
          this.title = item.name;
          item.ar.forEach((ele) => {
            this.singer = this.singer + ele.name + " ";
          });
          this.picUrl = item.al.picUrl;
          return true;
        }
        return false;
      });
      setTimeout(()=>{
        if(this.$refs.audio.duration)
        this.max = parseInt(this.$refs.audio.duration);
      },5000)
    },
  },
  created() {
    // this.init();
    this.getUserInfo();
  },

  methods: {
    change1(){
      console.log(this.value);
      this.$refs.audio.currentTime = this.value
    },
    change(){
      // console.log(this.voice);
      this.$refs.audio.volume = this.voice;
    },
    format(time) {
      let min = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
      let sec = parseInt((time % (1000 * 60)) / 1000);
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      const formatTime = min + ":" + sec;
      return formatTime;
    },
    init() {
      // this.max = parseInt(this.$refs.audio.duration);
      // console.log(this.curId);
      this.value = 0
     
      
    },
    play() {
      this.s = !this.s;
      if (this.s) this.$refs.audio.play();
      else this.$refs.audio.pause();
    },
    log() {
      console.log(this.$refs);
      // this.$refs.audio.play();
      let a = this.$refs.audio;
      this.value++;
      console.log(this.value);
      console.log(a.currentTime, a.duration, a.volume, a.seekable);
    },
    ...mapMutations(["setUserInfo"]),
    computedUserInfo(data) {
      return {
        nickname: data.profile.nickname,
        id: data.profile.userId,
        avatarUrl: data.profile.avatarUrl,
        backgroundUrl: data.profile.backgroundUrl,
        level: data.level,
        signature: data.profile.signature,
        gender: data.profile.gender,
        birthday: data.profile.birthday,
        province: data.profile.province,
        city: data.profile.city,
      };
    },
    async getUserInfo() {
      // const json = JSON.parse(localStorage.getItem("id"))
      let param = { uid: localStorage.getItem("id") };
      const res = await this.$api.getUserInfo(param);
      // console.log(res);
      // console.log(res.data.profile);
      const newValue = this.computedUserInfo(res.data);
      this.userInfo = newValue;
      // console.log(this.userInfo);
      this.setUserInfo(newValue);
    },
  },

  components: {
    Header,
    Asider,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @font-face {
    font-family: "iconfont"; /* project id 2371936 */
    src: url("//at.alicdn.com/t/font_2371936_kz9nz8ifp.eot");
    src: url("//at.alicdn.com/t/font_2371936_kz9nz8ifp.eot?#iefix")
        format("embedded-opentype"),
      url("//at.alicdn.com/t/font_2371936_kz9nz8ifp.woff2") format("woff2"),
      url("//at.alicdn.com/t/font_2371936_kz9nz8ifp.woff") format("woff"),
      url("//at.alicdn.com/t/font_2371936_kz9nz8ifp.ttf") format("truetype"),
      url("//at.alicdn.com/t/font_2371936_kz9nz8ifp.svg#iconfont") format("svg");
  }
  // margin: 20px 50px;

  .el-header {
    padding: 0;
    margin: 0;
    background-color: #f6f6f8;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    padding: 0;
    margin: 0;
    background-color: #f6f6f8;
    color: #333;
    // text-align: center;
    line-height: 28px;
  }

  .el-aside {
    background-color: #ffffff;
    color: #333;
    border-right: 1px solid #e1e1e1;
    // text-align: center;
    // line-height: 200px;
  }

  .el-main {
    padding: 0;
    background-color: #ffffff;
    color: #333;
    // text-align: center;
    // line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    div:nth-child(1) {
      display: flex;
      .img {
        width: 50px;
        height: 50px;
        margin: 12px;
        border-radius: 5px;
        overflow: hidden;
        background-color: pink;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        margin-top: 10px;
        div:nth-child(2) {
          font-size: 12px;
        }
      }
    }
    .playcomponents {
      div {
        margin: 8px 20px;
      }
    }
  }
}
</style>
