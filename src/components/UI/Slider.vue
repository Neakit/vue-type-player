<template>
  <input
    class="slider"
    type="range"
    :min="min"
    :max="max"
    :value="value"
    @change="onChangeHandler"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Slider extends Vue {
  @Prop({ default: 0 }) private min!: number;
  @Prop({ default: 1 }) private max!: number;
  @Prop({ default: 0.1 }) private msg!: number;
  @Prop({ default: 0 }) private value!: number;

  @Emit("change")
  onChangeHandler(e: Event) {
    const target = e.target as HTMLInputElement;
    return target.value;
  }
}
</script>

<style scoped lang="scss">
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #77b55a;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #77b55a;
  cursor: pointer;
}
</style>
