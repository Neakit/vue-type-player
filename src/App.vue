<template>
  <div class="container">
    <h1 class="text-center">Vue Type Player</h1>

    <div class="mb2 d-flex justify-content-center">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>

    <Player
      :isPlaying="isPlaying"
      :isLoading="isLoading"
      :duration="duration"
      :current-time="currentTime"
      @prev="onPrevHandler"
      @playPause="onPlayPauseHandler"
      @next="onNextHandler"
      @seek="onSeekHandler"
      @volume="onVolumeHandler"
    />
    <div class="mb2"></div>

    <Playlist
      :isLoading="isLoading"
      :tracks="tracks"
      :currentTrackIndex="currentTrackIndex"
      @search="searchTrackHandler"
      @click="clickTrackHandler"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

// Components
import Playlist from "./components/Playlist/index.vue";
import Player from "./components/Player/index.vue";

// fake API track list
import tracks from "./assets/tracks";

// Models
import { Track } from "./types";

const playlistVuexModule = namespace("playlist");
const playerVuexModule = namespace("player");
const audioVuexModule = namespace("audio");

@Component({
  components: {
    Player,
    Playlist,
  },
})
export default class App extends Vue {
  // Vuex state
  @playlistVuexModule.State
  tracks!: Track[];

  @playlistVuexModule.State
  currentTrackIndex!: Track;

  @audioVuexModule.State
  duration!: number;

  @audioVuexModule.State
  currentTime!: number;

  @playerVuexModule.Getter
  isPlaying!: boolean;

  // Vuex actions
  @playlistVuexModule.Action
  initPlaylist!: (list: Track[]) => void;

  @playlistVuexModule.Action
  searchTrack!: (query: string) => void;

  @playerVuexModule.Action
  setTrack!: (index: number) => void;

  @playerVuexModule.Action
  play!: () => void;

  @playerVuexModule.Action
  pause!: () => void;

  @playerVuexModule.Action
  next!: () => void;

  @playerVuexModule.Action
  prev!: () => void;

  @playerVuexModule.Action
  seek!: (time: number) => void;

  @playerVuexModule.Action
  volume!: (time: number) => void;

  // Local state
  isLoading = false;

  /**
   * Playlist interface handlers
   */
  searchTrackHandler(query: string) {
    this.initPlaylist(tracks); // FIXME
    this.searchTrack(query);
  }

  clickTrackHandler(index: number) {
    this.setTrack(index);
  }

  /**
   * Player interface handlers
   */
  onPrevHandler() {
    this.prev();
  }
  onPlayPauseHandler() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  onNextHandler() {
    this.next();
  }
  onSeekHandler(e: string) {
    const time = parseInt(e);
    this.seek(time);
  }

  onVolumeHandler(lvl: number) {
    this.volume(lvl);
  }

  created() {
    try {
      this.isLoading = true;
      this.initPlaylist(tracks);
    } catch (e) {
      // TODO: handler
    } finally {
      this.isLoading = false;
    }
  }
}
</script>
