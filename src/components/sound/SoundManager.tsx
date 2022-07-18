import { createContext, ReactNode, useState } from 'react';

export type SoundManager = {
  muteApp: (mute: boolean) => void;
  isMuted: boolean;
};

export const SoundContext = createContext<SoundManager>({
  muteApp(mute) {},
  isMuted: false,
});

export interface SoundManagerProps {
  children: ReactNode;
}

const SoundManagerNode: React.FC<SoundManagerProps> = ({
  children,
}) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <SoundContext.Provider
      value={{
        muteApp(mute) {
          if (mute) {
            Howler.volume(0.01);
            Howler.mute(mute);

            setIsMuted(mute);
            return;
          }

          Howler.volume(0.85);
          Howler.mute(mute);
          setIsMuted(mute);
        },

        isMuted,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export default SoundManagerNode;
