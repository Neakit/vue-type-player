import { GetterTree } from "vuex";
import { PlayerState } from "../../types";

// TODO: Add RootState type
// export const getters: GetterTree<State, RootState> = {
const getters: GetterTree<PlayerState, any> = {
  isPlaying: (state) => state.playing,
};

export default getters;
