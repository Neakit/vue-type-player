import Vue from "vue";
import Vuex from "vuex";
import playlist from "./playlist";
import player from "./player";
import audio from "./audio";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    player,
    audio,
    playlist,
  },
});
