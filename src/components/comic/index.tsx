import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppBar from '../shared/AppBar';
import ComicControls from '../shared/ComicControls';
import ComicPage, { ComicPageRef } from './ComicPage';

import pages from '../../pageData';

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
    useState<number>(-1);
  const [playingState, setPlayingState] =
    useState<PlayingState>(PlayingState.WAITING);

  const pageRef = useRef<ComicPageRef>(null);

  const { pageId } = useParams() as { pageId: string };

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
    if (!pageId) {
      setCurrentPageIndex(0);
      return;
    }

    // Get page index based on the id
    const page = pages.find(({ id }) => id === pageId);
    if (page) {
      setCurrentPageIndex(pages.indexOf(page));
    }
  }, [pageId]);

  useEffect(() => {
    if (!pageRef.current || currentPageIndex === -1) return;

    const currentPage = pages[currentPageIndex];
    pageRef.current?.setPage(currentPage);
  }, [currentPageIndex]);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    if (playingState === PlayingState.PLAYING_INTRO) {
      page.playIntro();
    }

    if (playingState === PlayingState.PLAYING_OUTRO) {
      page.playOutro();
    }

    if (
      playingState === PlayingState.FADING_TO_PREV ||
      playingState === PlayingState.FADING_TO_NEXT
    ) {
      page.fadeOut();
    }

    return () => {
      page.cancelFade();
    };
  }, [playingState]);

  return (
    <div className="comic">
      <AppBar />

      <ComicPage
        ref={pageRef}
        onLoadIntro={onLoadIntro}
        onCompleteIntro={onCompleteIntro}
        onCompleteOutro={onCompleteOutro}
        onFadeComplete={
          playingState === PlayingState.FADING_TO_PREV ||
          playingState === PlayingState.FADING_TO_NEXT
            ? onFadeComplete
            : undefined
        }
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
