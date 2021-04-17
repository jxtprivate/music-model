<template lang="">
  <div class="container">
    <div style="display:flex;">
      <div class="alumb">
        <div class="arm">
          <div class="army"><div class="margnet"></div></div>
        </div>
        <div class="album1">
          <div class="cd">
            <img :src="songMes.pic" alt="" />
            <div class="plot"></div>
          </div>
        </div>
        <div class="sun"></div>
      </div>
      <div class="box">
        <div class="songDetail">
          <h2>{{ songMes.name }}</h2>
          <p>{{ songMes.singer }}</p>
        </div>
        <div class="lyric">
          <ul ref="lrc">
            <li v-for="item in lyric" :key="item.time">{{ item.content }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      lyric: [],
      i: 1,
      lot: 0,
      songMes: {},
    };
  },
  computed: {
    ...mapState(["songList","curId"]),
  },
  watch:{
    curId(){
      this.getSongDetail();
      this.getLyric();
    }
  },
  created() {
    this.getLyric();
    this.getSongDetail();
  },
  mounted() {
    this.scollLyric();
  },
  methods: {
    getSongDetail() {
      for (let i = 0; i < this.songList.length; i++) {
        if (parseInt(this.songList[i].id) === parseInt(this.curId)) {
          this.songMes.name = this.songList[i].name;
          this.songMes.pic = this.songList[i].al.picUrl;
          this.songMes.singer = this.songList[i].ar[0].name;
        }
      }
    },

    async getLyric() {
      const res = await this.$api.getLyric({ id: this.curId });
      //   console.log(res.data.lrc.lyric);
      this.setLyric(res.data.lrc.lyric);
    },
    setLyric(lrc) {
      var lrc1 = lrc.split("\n");
      // console.log(lrc1);
      let lrc2 = [];
      let min, second, time, temp;
      lrc1.forEach((item, i) => {
        lrc1[i] = item.split("]");
        lrc1[i][0] = lrc1[i][0].substr(1);
        temp = lrc1[i][0].split(":");
        // console.log(temp);
        min = +temp[0];
        second = +temp[1];
        time = min * 60 + second;
        lrc2[i] = {
          time,
          content: lrc1[i][1],
        };
      });
      this.lyric = lrc2;
      //   console.log(this.lyric);
    },
    scollLyric() {
      let audio = document.querySelector("#ad");

      // console.log(audio);
      audio.ontimeupdate = this.setPosition;
    },
    setPosition() {
      let audio = document.querySelector("#ad");
      let i;
      for (let j = 0; j < this.lyric.length; j++) {
        if (this.lyric[j].time > audio.currentTime) {
          i = j - 1;
          break;
        }
      }
      //   console.log(i,0);
      if (i === -1) return;
      let ul = this.$refs.lrc;
      let acli = ul.querySelector(".active");
      if (acli) {
        acli.className = "";
      }
      ul.children[i].className = "active";

      let top = (i + this.lot) * 42 + 42 / 2 - 450 / 2;
      //   console.log(top);
      if (top < 0) top = 0;
      ul.style.marginTop = -top + "px";
      // console.log(111);
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes circle {
  0% {
    transform: rotate(0deg);
    // transform: translate(-50%, -50%);
  }
  100% {
    transform: rotate(360deg);
    // transform: translate(-50%, -50%);
  }
}
@keyframes run {
  // 0% {
  //   transform: rotate(-40deg);
  //   // transform: translate(-50%, -50%);
  // }
  100% {
    transform: rotate(-0deg);
    // transform: translate(-50%, -50%);
  }
}

.active {
  font-size: 16px;
  //   color: black;
  font-weight: 700;
  color: #000000 !important;
}
.container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#e4e4e6, #ffffff);
  padding-top: 20px;
  // display: flex;

  .alumb {
    .arm {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      top: -60px;
      left: 50%;
      transform: translateX(-50%) rotate(-40deg);
      box-shadow: 0 0 5px #aaa;
      z-index: 9999;
      animation: run 2s linear;
      animation-fill-mode: forwards;

      .army {
        position: absolute;
        width: 50px;
        height: 70px;
        border-left: 6px solid #fff;
        border-bottom: 7px solid #fff;
        top: 5px;
        left: 5px;
        z-index: 999;
        border-top-color: transparent;
        border-right-color: transparent;
        // box-shadow: -8px 11px 0px  #ccc;
        // 0 0 0px  #aaa,0 0 0px  rgb(22, 21, 21),0 0 5px  #aaa;
        // border-style: outset;
        // border-style:outset;
        transform: skew(14deg, 39deg);
        transform-origin: left top;
        border-radius: 0 0 0 5px;
        .margnet {
          position: absolute;
          width: 20px;
          height: 25px;
          background-color: #fff;
          bottom: 0;
          right: 0;
          transform: skew(342deg, -24deg) translate(83%, 87%) rotate(-65deg);
          border-radius: 4px;
        }
      }
    }
    position: relative;
    width: 280px;
    height: 280px;
    background-color: #d5d7d8;
    margin-left: 300px;
    margin-top: 80px;
    border-radius: 50%;
    .sun {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      // background-color: red;
      background: -webkit-linear-gradient(
        45deg,
        transParent 35%,
        rgba(255, 255, 255, 0.2) 42%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.2) 58%,
        transParent
      );
      border-radius: 50%;
    }
    .album1 {
      position: absolute;
      overflow: hidden;
      width: 260px;
      height: 260px;
      //   z-index: 99;
      //   background-color: skyblue;
      background: repeating-radial-gradient(black, black 5px, #3d3333 6px);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      // margin: auto;
      animation: circle 30s linear infinite;
      transform: translate(-50%, -50%);
      margin-left: -130px;
      margin-top: -130px;

      .cd {
        position: absolute;
        width: 180px;
        height: 180px;
        background-color: #ccc;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
  .songDetail {
    width: 350px;
    height: 60px;
    // background-color: pink;
    margin-left: 120px;
    margin-bottom: 20px;
    text-align: center;
    h2 {
      color: #2c2d2e;
    }
    p {
      margin-top: 10px;
      font-size: 12px;
      color: #2a629f;
    }
  }
  .lyric {
    width: 350px;
    height: 450px;
    // background-color: pink;
    margin-left: 120px;
    position: relative;
    overflow: hidden;
    ul {
      height: 100%;
      width: 100%;
      margin-top: 0px;
      transition: 0.6s;
    }
    ul li {
      line-height: 42px;
      text-align: center;
      color: #636363;
      font-size: 14px;
    }
  }
  .lyric::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 350px;
    height: 40px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.001), #fbfbfc);
  }
  .lyric::before {
    content: "";
    position: absolute;
    top: 0;
    width: 350px;
    height: 40px;
    background-image: linear-gradient(#e8e8ea, rgba(255, 255, 255, 0.001));
  }
}
</style>
