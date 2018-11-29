<template>
  <div class="music-list">
    <header ref="header">
      <svg class="icon" aria-hidden="true" @click="goBack">
        <use xlink:href="#icon-arrowleft"></use>
      </svg>
      <h1 class="title">{{ headerTitle }}</h1>
    </header>
    <Scroll
      :data="songs"
      @scroll="scroll"
      :probe-type="probeType"
      :listenscroll="listenScroll"
      class="wrapper"
      ref="list"
    >
      <div class="list-wrapper">
        <div class="bg" :style="bgStyle" ref="bg">
          <div class="filter"></div>
          <h1 class="title">{{ title }}</h1>
        </div>
        <div class="song-list-wrapper">
          <div class="control-wrapper border-bottom">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-play-circle"></use>
            </svg>
            <span class="desc">播放全部（共{{ this.songs.length }}首）</span>
          </div>
          <ul class="song-list">
            <li
              v-for="(song, index) in songs"
              :key="song.id"
              class="song border-bottom"
            >
              <div class="number">{{ index + 1 }}</div>
              <div class="right">
                <div class="name">{{ song.name }}</div>
                <div class="singer">{{ song.singer }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "../base/Scroll";
export default {
  name: "MusicList",
  components: { Scroll },
  props: {
    songs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "歌单"
    },
    picUrl: {
      type: String
    }
  },
  data() {
    return {
      scrollY: 0,
      headerTitle: ""
    };
  },
  watch: {
    scrollY(newY) {
      const percent = Math.abs(newY / this.imageHeight);
      if (newY < this.minTranslateHeight) {
        this.headerTitle = this.title;
      } else {
        this.headerTitle = "歌单";
      }
      if (newY < 0) {
        this.$refs.header.style.background = `rgba(212, 68, 57, ${percent})`;
      } else {
        this.$refs.header.style.background = `rgba(212, 68, 57, 0)`;
      }
    }
  },
  computed: {
    bgStyle() {
      return `background-image:url(${this.picUrl})`;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    scroll(pos) {
      this.scrollY = pos.y;
    }
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
  },
  mounted() {
    this.$NProgress.done();
    this.$refs.list.$el.style.top;
    this.imageHeight = this.$refs.bg.clientHeight;
    this.minTranslateHeight = -this.imageHeight + 44;
  }
};
</script>
<style lang="scss" scoped>
.music-list {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
  background: #fff;
  header {
    background: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    z-index: 999;
    .icon {
      width: 24px;
      height: 24px;
      color: #fff;
      margin-right: 20px;
    }
    .title {
      color: #fff;
      font-size: 16px;
    }
  }
  .wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    .list-wrapper {
      .bg {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 75%;
        background-size: cover;
        .filter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.2;
        }
        .title {
          position: absolute;
          left: 20px;
          bottom: 20px;
          color: #fff;
        }
      }
      .song-list-wrapper {
        position: relative;
        .control-wrapper {
          padding: 10px 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon {
            width: 20px;
            height: 20px;
            padding: 0 16px;
          }
        }
        .song-list {
          .song {
            padding: 10px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .number {
              width: 46px;
              padding: 10px 5px;
              text-align: center;
            }
            .right {
              flex: 1;
              .name {
                margin-bottom: 6px;
                font-size: 10px;
              }
              .singer {
                color: darkgray;
              }
            }
          }
        }
      }
    }
  }
}
</style>