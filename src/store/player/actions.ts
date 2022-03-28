import { ActionTree, ActionContext } from "vuex";
import { PlayerState } from "../../types";

export interface Actions<S, R> extends ActionTree<S, R> {
  setTrack(context: ActionContext<S, R>, index: number): void;
  playPause(context: ActionContext<S, R>): void;
  play(context: ActionContext<S, R>): void;
  pause(context: ActionContext<S, R>): void;
  next(context: ActionContext<S, R>): void;
  prev(context: ActionContext<S, R>): void;
  seek(context: ActionContext<S, R>, time: number): void;
  volume(context: ActionContext<S, R>, lvl: number): void;
}

// // TODO: RootState 2 argument
const actions: Actions<PlayerState, any> = {
  async setTrack({ rootState, dispatch }, index) {
    const activeIndex = rootState.playlist.currentTrackIndex;
    if (activeIndex !== null && activeIndex === index) {
      await dispatch("playPause");
    } else if (activeIndex === null || activeIndex !== index) {
      await dispatch("audio/removeAudio", null, { root: true });
      await dispatch("playlist/setCurrentTrackIndex", index, { root: true });
      const audio = rootState.playlist.tracks[index];
      await dispatch("audio/setAudio", audio, { root: true });
      await dispatch("play");
    }
  },
  playPause({ rootState, dispatch }) {
    if (rootState.audio.playing) {
      dispatch("pause");
    } else {
      dispatch("play");
    }
  },
  play({ dispatch, commit }) {
    dispatch("audio/play", null, { root: true });
    commit("setPlaying", true);
  },
  pause({ dispatch, commit }) {
    dispatch("audio/pause", null, { root: true });
    commit("setPlaying", false);
  },
  next({ rootState, dispatch }) {
    const nextIndex = rootState.playlist.currentTrackIndex + 1;
    const listLength = rootState.playlist.tracks.length;
    if (nextIndex < listLength) {
      dispatch("setTrack", nextIndex);
    } else {
      dispatch("setTrack", 0);
    }
  },
  prev({ rootState, dispatch }) {
    const prevIndex = rootState.playlist.currentTrackIndex - 1; //
    const listLength = rootState.playlist.tracks.length; // 2
    if (prevIndex >= 0) {
      dispatch("setTrack", prevIndex);
    } else {
      dispatch("setTrack", listLength - 1);
    }
  },

  seek({ dispatch }, time) {
    dispatch("audio/seek", time, { root: true });
  },
  volume({ dispatch }, lvl) {
    dispatch("audio/volume", lvl, { root: true });
  },
};

export default actions;
