<template>
  <div class="player row">
    <div
      class="actions pa2 col-md-3 d-flex align-items-center justify-content-between"
    >
      <button class="actions__btn" @click="onPrevHandler">prev</button>
      <button class="actions__btn" @click="onPlayPauseHandler">
        {{ isPlaying ? "pause" : "play" }}
      </button>
      <button class="actions__btn" @click="onNextHandler">next</button>
    </div>

    <div class="player__progress pa2 col-md-7 d-flex align-items-center">
      <Slider
        :min="0"
        :max="duration"
        :step="0.01"
        @change="onSeekHandler"
        :value="currentTime"
      />
      <span>{{ timeTracking }}</span>
    </div>

    <div class="player__volume pa2 col-md-2 d-flex align-items-center">
      <Slider
        :min="0"
        :max="1"
        :step="0.1"
        @change="onVolumeHandler"
        :value="1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import Slider from "../UI/Slider.vue";

@Component({
  components: {
    Slider,
  },
})
export default class Player extends Vue {
  @Prop({ default: false }) private isLoading!: boolean;
  @Prop({ default: false }) private isPlaying!: boolean;
  @Prop({ default: 0 }) private duration!: number;
  @Prop({ default: 0.0 }) private currentTime!: number;

  get timeTracking() {
    return `${this.currentTime.toFixed(2)}/${this.duration.toFixed(2)}`;
  }
  // button emits
  @Emit("prev")
  onPrevHandler(e: any) {
    return e;
  }

  @Emit("playPause")
  onPlayPauseHandler(e: any) {
    return e;
  }

  @Emit("next")
  onNextHandler(e: any) {
    return e;
  }
  // progress emits
  @Emit("seek")
  onSeekHandler(e: any) {
    return e;
  }

  // volume emits
  @Emit("volume")
  onVolumeHandler(e: any) {
    return e;
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
