import React, { useEffect, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';

import AppBar from '../shared/AppBar';
import FadePage from '../shared/FadePage';
import ComicControls from '../shared/ComicControls';
import ComicPage, { ComicPageRef } from './ComicPage';

import pages from '../../pageData';

import './index.scss';

export enum PlayingState {
  WAITING,
  PLAYING_INTRO,
  READING,
  FADING_TO_NEXT,
  FADING_TO_PREV,
}

const Comic: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] =
    useState(-1);
  const [playingState, setPlayingState] =
    useState<PlayingState>(PlayingState.WAITING);

  const pageRef = useRef<ComicPageRef>(null);

  const { pageId } = useParams() as { pageId: string };

  const onFadePageComplete = (): void => {
    if (
      playingState === PlayingState.FADING_TO_NEXT &&
      currentPageIndex < pages.length - 1
    )
      setCurrentPageIndex(currentPageIndex + 1);

    if (
      playingState === PlayingState.FADING_TO_PREV &&
      currentPageIndex > 0
    )
      setCurrentPageIndex(currentPageIndex - 1);

    setPlayingState(PlayingState.WAITING);
  };

  const handleBack = (): void => {
    setPlayingState(PlayingState.FADING_TO_PREV);
    pageRef.current?.fadeOut();
  };

  const handleForward = (): void => {
    setPlayingState(PlayingState.FADING_TO_NEXT);
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

    window.history.pushState(
      {},
      '',
      `/comic/${pages[currentPageIndex].id}`
    );

    const currentPage = pages[currentPageIndex];
    pageRef.current?.setPage(currentPage);
  }, [currentPageIndex]);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    if (playingState === PlayingState.PLAYING_INTRO)
      page.play();

    if (
      playingState === PlayingState.FADING_TO_PREV ||
      playingState === PlayingState.FADING_TO_NEXT
    )
      page.fadeOut();

    return () => {
      page.cancelFade();
    };
  }, [playingState]);

  return (
    <FadePage className="comic page">
      <AppBar />

      <ComicPage
        ref={pageRef}
        onLoadAnimation={() => {
          setPlayingState(PlayingState.PLAYING_INTRO);
        }}
        onCompleteAnimation={() => {
          setPlayingState(PlayingState.READING);
        }}
        onFadeComplete={
          playingState === PlayingState.FADING_TO_PREV ||
          playingState === PlayingState.FADING_TO_NEXT
            ? onFadePageComplete
            : undefined
        }
      />

      <ComicControls
        showBack={currentPageIndex > 0}
        showForward={currentPageIndex < pages.length - 1}
        handleBack={handleBack}
        handleForward={handleForward}
      />
    </FadePage>
  );
};

export default Comic;
