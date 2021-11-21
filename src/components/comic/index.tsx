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
  FADING_TO_NEXT,
  FADING_TO_PREV,
}

const Comic: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] =
    useState<number>(0);
  const [playingState, setPlayingState] =
    useState<PlayingState>(PlayingState.WAITING);

  const pageRef = useRef<ComicPageRef>(null);

  const onLoadIntro = (): void => {
    setPlayingState(PlayingState.PLAYING_INTRO);
  };

  const onCompleteIntro = (): void => {
    setPlayingState(PlayingState.READING);
  };

  const onCompleteOutro = (): void => {
    setPlayingState(PlayingState.FADING_TO_NEXT);
  };

  const onFadeComplete = (): void => {
    // pageRef.current?.destroy();

    if (
      playingState === PlayingState.FADING_TO_NEXT &&
      currentPageIndex < pages.length - 1
    ) {
      setCurrentPageIndex(currentPageIndex + 1);
    }

    if (
      playingState === PlayingState.FADING_TO_PREV &&
      currentPageIndex > 0
    ) {
      setCurrentPageIndex(currentPageIndex - 1);
    }

    setPlayingState(PlayingState.WAITING);
  };

  const handleBack = (): void => {
    setPlayingState(PlayingState.FADING_TO_PREV);
    pageRef.current?.fadeOut();
  };

  const handleForward = (): void => {
    setPlayingState(PlayingState.PLAYING_OUTRO);
  };

  useEffect(() => {
    if (!pageRef.current) return;

    const currentPage = pages[currentPageIndex];
    pageRef.current?.setPage(currentPage);
  }, [currentPageIndex]);

  useEffect(() => {
    if (playingState === PlayingState.PLAYING_INTRO) {
      pageRef.current?.playIntro();
    }

    if (playingState === PlayingState.PLAYING_OUTRO) {
      pageRef.current?.playOutro();
    }

    if (
      playingState === PlayingState.FADING_TO_PREV ||
      playingState === PlayingState.FADING_TO_NEXT
    ) {
      pageRef.current?.fadeOut();
    }
  }, [playingState]);

  return (
    <div className="comic">
      <AppBar />

      <ComicPage
        ref={pageRef}
        onLoadIntro={onLoadIntro}
        onCompleteIntro={onCompleteIntro}
        onCompleteOutro={onCompleteOutro}
        onFadeComplete={onFadeComplete}
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
