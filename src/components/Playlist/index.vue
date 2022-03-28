<template>
  <div class="playlist pa2 row" :class="{ 'playlist--loading': isLoading }">
    <input class="playlist__search" type="text" @input="onInputHandler" />

    <ul class="playlist__items">
      <li
        v-for="(track, index) in tracks"
        :key="index"
        @click="onClickHandler(index)"
        class="playlist__item"
        :class="{ 'playlist__item--active': currentTrackIndex === index }"
      >
        {{ track.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Track } from "../../types";
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class Playlist extends Vue {
  @Prop({ default: [] }) private tracks!: Track[];
  @Prop({ default: 0 }) private currentTrackIndex!: number;
  @Prop({ default: false }) private isLoading!: boolean;

  @Emit("search")
  onInputHandler(e: Event) {
    const target = e.target as HTMLInputElement;
    return target.value;
  }
  @Emit("click")
  onClickHandler(index: number) {
    return index;
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
