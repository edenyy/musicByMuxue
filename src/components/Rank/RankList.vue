<template>
  <Scroll :data="topList" class="rank-list">
    <ul class="list-wrapper">
      <li
        v-for="item in topList"
        :key="item.id"
        class="list border-bottom"
        @click="selectTopList(item);"
      >
        <img v-lazy="item.coverImgUrl" alt="" class="pic" />
        <div class="updateFrequency">{{ item.updateFrequency }}</div>
        <ul v-show="item.tracks.length" class="song-list">
          <li
            v-for="(song, index) in item.tracks"
            :key="song.first"
            class="song"
          >
            {{ index + 1 }}.{{ song.first }}-{{ song.second }}
          </li>
        </ul>
      </li>
    </ul>
  </Scroll>
</template>

<script>
import Scroll from "@/components/base/Scroll.vue";
export default {
  name: "",
  components: { Scroll },
  props: {
    topList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    selectTopList(index) {
      this.$emit("selectTopList", index);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.rank-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
  .list-wrapper {
    .list {
      display: flex;
      padding: 10px;
      position: relative;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      .pic {
        width: 100px;
        height: 100px;
        flex: 0 0 100px;
        border-radius: 5px;
      }
      .updateFrequency {
        position: absolute;
        left: 15px;
        bottom: 20px;
        color: #fff;
        font-size: 12px;
      }
      .song-list {
        flex: 1;
        padding: 0 10px;
        height: 100px;
        overflow: hidden;
        .song {
          padding: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:first-child {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
