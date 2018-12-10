<template>
  <div class="player" v-show="playList.length > 0">
    <transition name="normal">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img
            :src="currentSong.picUrl"
            alt=""
            width="100%"
            height="100%"
            class="img"
          />
          <div class="filter"></div>
          <div class="filterR"></div>
        </div>
        <div class="top">
          <svg class="icon" aria-hidden="true" @click="goBack">
            <use xlink:href="#icon-down"></use>
          </svg>
          <div class="name">
            <h1 class="title">{{ currentSong.name }}</h1>
            <h2 class="subtitle">{{ currentSong.singer }}</h2>
          </div>
        </div>
        <div class="middle" @click="changeMiddle">
          <div class="middle-l" v-show="currentShow === 'cd'">
            <div class="cd-wrapper" ref="cdWrapper" @click.stop="togglePlaying">
              <div class="cd" :class="playing ? 'play' : 'pause'">
                <img :src="currentSong.picUrl" alt="" class="image" />
              </div>
            </div>
          </div>
          <transition name="middleR">
            <Scroll
              class="middle-r"
              ref="lyricList"
              :data="currentLyric && currentLyric.lines"
              v-show="currentShow === 'lyric'"
            >
              <div class="lyric-wrapper">
                <div v-if="currentLyric">
                  <p
                    class="text"
                    ref="lyricLine"
                    v-for="(line, index) in currentLyric.lines"
                    :key="index"
                    :class="{ current: currentLineNum === index }"
                  >
                    {{ line.txt }}
                  </p>
                </div>
                <p class="no-lyric" v-else>{{ updatecurrentLyric }}</p>
              </div>
            </Scroll>
          </transition>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <span class="time time-l">{{ format(currentTime) }}</span>
            <div class="progress-bar-wrapper">
              <progress-bar
                :percent="percent"
                @percentChange="onProgressChange"
              ></progress-bar>
            </div>
            <span class="time time-r">{{ format(duration) }}</span>
          </div>
          <div class="operators">
            <svg class="icon i-left" aria-hidden="true" @click="changeMode">
              <use :xlink:href="iconMode"></use>
            </svg>
            <svg
              class="icon i-left"
              aria-hidden="true"
              @click="prev"
              :class="disableClass"
            >
              <use xlink:href="#icon-step-backward"></use>
            </svg>
            <svg
              class="icon i-center"
              aria-hidden="true"
              :class="disableClass"
              @click="togglePlaying"
            >
              <use :xlink:href="playIcon"></use>
            </svg>
            <svg
              class="icon i-right"
              aria-hidden="true"
              :class="disableClass"
              @click="next"
            >
              <use xlink:href="#icon-step-forward"></use>
            </svg>
            <svg class="icon  i-right" aria-hidden="true">
              <use xlink:href="#icon-heart"></use>
            </svg>
          </div>
        </div>
      </div>
    </transition>
    <div class="mini-player" v-show="!fullScreen && !showFooter" @click="open">
      <div class="left">
        <img :src="currentSong.picUrl" alt="" class="pic" />

        <div class="name">{{ currentSong.name }}</div>
        <div class="singer">{{ currentSong.singer }}</div>
      </div>
      <div class="right">
        <svg
          class="icon i-mini"
          aria-hidden="true"
          @click.stop.prevent="togglePlaying"
        >
          <use :xlink:href="miniIcon"></use>
        </svg>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu"></use>
        </svg>
      </div>
    </div>
    <audio
      ref="audio"
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="ended"
    ></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Song from "@/api/song.js";
import ProgressBar from "../base/ProgressBar";
import { playMode, shuffle } from "@/utils/index.js";
import Lyric from "lyric-parser";
import Scroll from "../base/Scroll";
export default {
  name: "",
  components: { ProgressBar, Scroll },
  props: {},
  data() {
    return {
      url: "",
      songReady: false,
      currentTime: 0,
      duration: 0,
      currentLyric: null,
      currentLineNum: 0,
      currentShow: "cd"
    };
  },
  watch: {
    currentSong(newVal, oldVal) {
      if (!newVal.id) {
        return;
      }
      if (newVal.id === oldVal.id) {
        return;
      }
      if (this.playing) {
        this.$refs.audio.pause();
      }
      if (this.currentLyric) {
        this.currentLyric.stop();
      }
      this.getSong(newVal.id);
      this.getLyric(newVal.id);
    },
    url(newVal) {
      this.$refs.audio.src = newVal;
      this.$refs.audio.play();
      //获取duration
      this.$refs.audio.oncanplay = () => {
        this.duration = this.$refs.audio.duration;
      };
      this.setPlayingState(true);
    }
  },
  computed: {
    ...mapGetters([
      "fullScreen",
      "playList",
      "currentSong",
      "playing",
      "currentIndex",
      "mode",
      "sequenceList",
      "showFooter"
    ]),
    playIcon() {
      return this.playing ? "#icon-timeout" : "#icon-play-circle";
    },
    miniIcon() {
      return this.playing ? "#icon-timeout" : "#icon-play-circle";
    },
    disableClass() {
      return this.songReady ? "" : "disable";
    },
    percent() {
      return this.currentTime / this.duration;
    },
    iconMode() {
      return this.mode === playMode.sequence
        ? "#icon-retweet"
        : this.mode === playMode.loop
        ? "#icon-danquxunhuan"
        : "#icon-suijibofang";
    },
    updatecurrentLyric() {
      if (this.noLyric) {
        return "暂无歌词";
      }
      if (!this.noLyric) {
        return "歌词加载中";
      }
    }
  },
  methods: {
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAYING_MODE",
      setPlayList: "SET_PLAY_LIST",
      setShowFooter: "SET_SHOW_FOOTER"
    }),
    goBack() {
      this.setFullScreen(false);
      if (this.$route.name) {
        this.setShowFooter(true);
      }
    },
    open() {
      this.setFullScreen(true);
    },
    togglePlaying() {
      if (!this.songReady) {
        return;
      }
      if (this.currentLyric) {
        this.currentLyric.togglePlay();
      }
      this.setPlayingState(!this.playing);
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        this.playing ? audio.play() : audio.pause();
      });
      this.songReadyfalse;
    },
    getSong(id) {
      Song.song(id).then(res => {
        this.url = res.data[0].url;
        setTimeout(() => {
          this.$refs.audio.play();
        }, 1000);
      });
    },
    getLyric(id) {
      if (this.currentLyric) {
        this.currentLyric.stop();
        this.currentLyric = null;
      }
      this.noLyric = false;
      Song.lyric(id).then(res => {
        this.currentLyric = new Lyric(res.lrc.lyric, this.handleLyric);
        if (this.playing) {
          this.currentLyric.play();
          this.currentLineNum = 0;
          this.$refs.lyricList.scrollTo(0, 0, 1000);
        }
      });
    },
    handleLyric({ lineNum }) {
      this.currentLineNum = lineNum;
      if (lineNum > 5) {
        let lineEl = this.$refs.lyricLine[lineNum - 5];
        this.$refs.lyricList.scrollToElement(lineEl, 1000);
      } else {
        this.$refs.lyricList.scrollTo(0, 0, 1000);
      }
    },
    prev() {
      if (!this.songReady) {
        return;
      }
      if (this.playList.length === 1) {
        this.loop();
      } else {
        let index = this.currentIndex - 1;
        if (index === -1) {
          index = this.playList.length - 1;
        }
        this.setCurrentIndex(index);
        if (!this.playing) {
          this.togglePlaying();
        }
      }
      this.songReadyfalse;
    },
    next() {
      if (!this.songReady) {
        return;
      }
      if (this.playList.length === 1) {
        this.loop();
      } else {
        let index = this.currentIndex + 1;
        if (index === this.playList.length) {
          index = 0;
        }
        this.setCurrentIndex(index);
        if (!this.playing) {
          this.togglePlaying();
        }
      }
      this.songReady = false;
    },
    ready() {
      this.songReady = true;
    },
    error() {
      this.songReady = true;
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime;
    },
    format(interval) {
      interval = interval | 0;
      const minute = (interval / 60) | 0;
      const second = this.pad(interval % 60);
      return `${minute}:${second}`;
    },
    pad(num, n = 2) {
      let len = num.toString().length;
      if (len < n) {
        num = "0" + num;
        len++;
      }
      return num;
    },
    onProgressChange(percent) {
      this.$refs.audio.currentTime = this.duration * percent;
      const currentTime = this.$refs.audio.currentTime;
      this.currentTime = currentTime;
      if (!this.playing) {
        this.togglePlaying();
      }
      if (this.currentLyric) {
        this.currentLyric.seek(currentTime * 1000);
      }
    },
    changeMode() {
      const mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      let list = null;
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList);
      } else {
        list = this.sequenceList;
      }
      this.resetCurrentIndex(list);
      this.setPlayList(list);
    },
    resetCurrentIndex(list) {
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    ended() {
      if (this.mode === playMode.loop) {
        this.loop();
      } else {
        this.next();
      }
    },
    loop() {
      if (this.currentLyric) {
        this.currentLyric.seek(0);
      }
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
    },
    changeMiddle() {
      if (this.currentShow === "cd") {
        this.currentShow = "lyric";
      } else {
        this.currentShow = "cd";
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.player {
  .normal-player {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #000;
    z-index: 999;
    overflow: hidden;
    .background {
      position: absolute;
      left: -50%;
      top: -50%;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      filter: blur(100px);
      .img {
        width: 300%;
        height: 300%;
      }
    }
    .top {
      background: rgba(0, 0, 0, 0);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      .icon {
        position: absolute;
        left: 15px;
        top: 10px;
        width: 24px;
        height: 24px;
        color: #fff;
        margin-right: 20px;
      }
      .name {
        text-align: center;
        .title {
          color: #fff;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .subtitle {
          color: #ccc;
          font-size: 12px;
        }
      }
    }
    .middle {
      display: flex;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 80px;
      bottom: 170px;
      white-space: nowrap;
      font-size: 0;
      .middle-l {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 80%;
        .cd-wrapper {
          position: absolute;
          left: 10%;
          top: 0;
          width: 80%;
          height: 100%;
          border-radius: 50%;
          .cd {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 15px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            &.play {
              animation: rotate 20s linear infinite;
            }
            &.pause {
              animation-play-state: paused;
            }
            .image {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
      }
      .middle-r {
        display: inline-block;
        position: absolute;
        top: 0;
        vertical-align: top;
        width: 100%;
        height: 100%;
        overflow: hidden;
        &.middleR-enter-active,
        &.middleR-leave-active {
          transition: all 0.3s;
        }
        &.middleR-enter,
        &.middleR-leave-to {
          opacity: 0;
        }
        .lyric-wrapper {
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-align: center;
          .text {
            line-height: 40px;
            color: #a7a8a8;
            font-size: 16px;
            &.current {
              color: #e94a3e;
            }
          }
          .no-lyric {
            line-height: 40px;
            margin-top: 60%;
            color: #fff;
            font-size: 16px;
          }
        }
      }
    }
    .bottom {
      position: absolute;
      bottom: 50px;
      width: 100%;
      .operators {
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #fff;
        padding: 0 30px;
        .icon {
          width: 24px;
          height: 24px;
          padding: 6px;
          &.i-center {
            width: 36px;
            height: 36px;
          }
        }
      }
      .progress-wrapper {
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        padding: 10px 0;
        .time {
          color: #fff;
          flex: 0 0 30px;
          width: 30px;
          &.time-l {
            text-align: left;
          }
          &.time-r {
            text-align: right;
          }
        }
        .progress-bar-wrapper {
          flex: 1;
        }
      }
    }
  }
  .mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    height: 52px;
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    .left {
      width: 48px;
      height: 48px;
      padding: 5px;
      .name {
        display: inline-block;
        vertical-align: top;
      }
      .singer {
        display: inline-block;
      }
      .pic {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      .icon {
        width: 40px;
        height: 40px;
        color: #ccc;
        margin-right: 15px;
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.normal-enter-active,
.normal-leave-active {
  transition: all 0.4s;
}
.normal-enter,
.normal-leave-to {
  transform: translateY(100%);
}
</style>