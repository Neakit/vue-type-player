import { MutationTree } from "vuex";
import { PlayerState } from "../../types";

const mutations: MutationTree<PlayerState> = {
  setPlaying(state, flag: boolean) {
    state.playing = flag;
  },
};

export default mutations;
