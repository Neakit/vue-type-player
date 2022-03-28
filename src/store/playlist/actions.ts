import { ActionTree, ActionContext } from "vuex";
import { PlaylistState, Track } from "../../types";

export interface Actions<S, R> extends ActionTree<S, R> {
  initPlaylist(context: ActionContext<S, R>, list: Track[]): void;
  searchTrack(context: ActionContext<S, R>, query: string): void;
  setCurrentTrackIndex(context: ActionContext<S, R>, trackIndex: number): void;
}

// // TODO: RootState 2 argument
const actions: Actions<PlaylistState, any> = {
  initPlaylist({ state }, list) {
    state.tracks = list;
  },
  searchTrack({ state }, query) {
    state.tracks = state.tracks.filter((track) =>
      track.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  },
  setCurrentTrackIndex({ state }, trackIndex) {
    state.currentTrackIndex = trackIndex;
  },
};

export default actions;
