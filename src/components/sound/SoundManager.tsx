import { createContext } from 'react';

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

const SoundManager: React.FC = () => {
  return <></>;
};

export default SoundManager;
