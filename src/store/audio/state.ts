import { AudioState } from "../../types";

const state = (): AudioState => ({
  el: null,
  src: "",
  duration: 0,
  playing: false,
  volume: 0,
  currentTime: 0,
});

export default state;
