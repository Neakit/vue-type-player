import { ActionTree, ActionContext } from "vuex";
import { AudioState } from "../../types";

export interface Actions<S, R> extends ActionTree<S, R> {
  //   setMedia(context: ActionContext<S, R>, media: AudioState): void;
  play(context: ActionContext<S, R>): void;
  setAudio(context: ActionContext<S, R>, media: AudioState): void;
  //   clearMedia(context: ActionContext<S, R>): void;
}

// // TODO: RootState 2 argument
const actions: Actions<AudioState, any> = {
  play({ state }) {
    if (state.el) {
      state.el.play();
      state.playing = true;
    }
  },
  pause({ state }) {
    if (state.el) {
      state.el.pause();
      state.playing = false;
    }
  },
  seek({ state }, time) {
    if (state.el) {
      state.el.currentTime = time;
    }
  },
  volume({ state }, lvl) {
    if (state.el) {
      state.el.volume = lvl;
    }
  },
  setAudio({ state }, media) {
    state.el = new Audio(media.src);
    // Event Handlers
    state.el.onloadedmetadata = () => {
      state.duration = state.el?.duration;
    };
    state.el.ontimeupdate = () => {
      state.currentTime = state.el?.currentTime || 0;
    };
    state.el.onvolumechange = () => {
      state.volume = state.el?.volume || 0;
    };
    state.playing = media.playing;
  },

  removeAudio({ state }) {
    if (state.el) {
      state.el.pause();
      state.el.remove();
    }
  },
};

export default actions;
