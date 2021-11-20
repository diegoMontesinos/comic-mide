import React, { useEffect, useRef, useState } from 'react';

import AppBar from '../shared/AppBar';
import ComicControls from '../shared/ComicControls';
import ComicPage, { ComicPageRef } from './ComicPage';

import pages from './pagesData';

import './index.scss';

enum PlayingState {
  WAITING,
  PLAYING_INTRO,
  READING,
  PLAYING_OUTRO,
  FADING_OUT,
}

const Comic: React.FC = () => {
  const [currentPageIndex] = useState<number>(0);
  const [playingState, setPlayingState] =
    useState<PlayingState>(PlayingState.WAITING);

  const pageRef = useRef<ComicPageRef>(null);

  const onLoadIntro = (): void => {
    if (playingState !== PlayingState.WAITING) return;
    setPlayingState(PlayingState.PLAYING_INTRO);
  };

  const handleCompleteIntro = async (): Promise<void> => {
    // await setPlayingState(PlayingState.READING);
  };

  const handleCompleteOutro = (): void => {
    // setPlayingState(PlayingState.READING);
    // if (
    //   currentPageNumber < pages.length - 1 &&
    //   pageRef.current
    // ) {
    //   pageRef.current.destroy();
    //   setCurrentPageNumber(currentPageNumber + 1);
    // }
  };

  const handleCompleteFadeOut = (): void => {
    // if (playingState !== PlayingState.FADING_OUT) return;
    // setPlayingState(PlayingState.READING);
    // if (currentPageNumber > 0 && pageRef.current) {
    //   pageRef.current.destroy();
    //   setCurrentPageNumber(currentPageNumber - 1);
    // }
  };

  const handleBack = (): void => {
    // if (!pageRef.current) return;
    // setPlayingState(PlayingState.FADING_OUT);
    // pageRef.current.fadeOut();
  };

  const handleForward = (): void => {
    // if (!pageRef.current) return;
    // setPlayingState(PlayingState.PLAYING_OUTRO);
    // pageRef.current.playOutro();
  };

  useEffect(() => {
    if (!pageRef.current) return;

    if (playingState === PlayingState.PLAYING_INTRO) {
      console.log('Plaaaay!');
      pageRef.current?.playIntro();
    }
  }, [playingState]);

  if (currentPageIndex === -1) return null;
  return (
    <div className="comic-viewer">
      <AppBar />

      <ComicPage
        ref={pageRef}
        onLoadIntro={onLoadIntro}
        page={pages[currentPageIndex]}
        onCompleteIntro={handleCompleteIntro}
        onCompleteOutro={handleCompleteOutro}
        onFadeComplete={handleCompleteFadeOut}
      />

      <ComicControls
        showBack={currentPageIndex > 0}
        showForward={currentPageIndex < pages.length - 1}
        classBack={
          playingState !== PlayingState.READING
            ? 'disabled'
            : 'enabled'
        }
        classForward={
          playingState !== PlayingState.READING
            ? 'disabled'
            : 'enabled'
        }
        handleBack={handleBack}
        handleForward={handleForward}
      />
    </div>
  );
};

export default Comic;
