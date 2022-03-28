import { PlaylistState } from "../../types";

const state = (): PlaylistState => ({
  tracks: [],
  currentTrackIndex: null,
});

export default state;
