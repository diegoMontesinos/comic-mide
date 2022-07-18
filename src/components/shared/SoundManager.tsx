import { createContext, useRef, useState } from 'react';

export type SoundManager = {
  muteApp: (mute: boolean) => void;
  isMuted: () => boolean;
};

const defaultSoundManager: SoundManager = {
  muteApp(mute) {},
  isMuted() {
    return false;
  },
};

export const SoundContext = createContext<SoundManager>(
  defaultSoundManager
);

// const useCreateSoundManager = (): SoundManager => {};

const SoundManager: React.FC = () => {
  return <></>;
};

export default SoundManager;
