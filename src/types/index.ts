export type AudioState = {
  el: HTMLAudioElement | null;
  src: string;
  duration: number | undefined;
  playing: boolean;
  volume: number;
  currentTime: number;
};

export type Track = {
  src: string;
  title: string;
};

export type PlaylistState = {
  tracks: Track[];
  currentTrackIndex: number | null;
};

export type PlayerState = {
  playing: boolean;
};
