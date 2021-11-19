import React, { useEffect, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';

import ComicPage, { ComicPageRef } from './ComicPage';
import AppBar from '../shared/AppBar';
import ComicControls from '../shared/ComicControls';

enum PlayingState {
  READING,
  PLAYING_INTRO,
  PLAYING_OUTRO,
  FADING_OUT,
}

interface Props {
  pages: {
    id: string;
    intro: string;
    outro: string;
  }[];
}

const ComicViewer: React.FC<Props> = ({ pages }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(-1);
  const [playingState, setPlayingState] = useState<PlayingState>(
    PlayingState.READING
  );

  const pageRef = useRef<ComicPageRef | null>(null);

  const { pageId } = useParams() as { pageId: string };

  const handleBack = (): void => {
    if (!pageRef.current) return;

    setPlayingState(PlayingState.FADING_OUT);
    pageRef.current.fadeOut();
  };

  const handleForward = (): void => {
    if (!pageRef.current) return;

    setPlayingState(PlayingState.PLAYING_OUTRO);
    pageRef.current.playOutro();
  };

  const handleCompleteIntro = (): void => {
    setPlayingState(PlayingState.READING);
  };

  const handleCompleteOutro = (): void => {
    setPlayingState(PlayingState.READING);

    if (currentPageNumber < pages.length - 1 && pageRef.current) {
      pageRef.current.destroy();
      setCurrentPageNumber(currentPageNumber + 1);
    }
  };

  const handleCompleteFadeOut = (): void => {
    if (playingState !== PlayingState.FADING_OUT) return;
    setPlayingState(PlayingState.READING);

    if (currentPageNumber > 0 && pageRef.current) {
      pageRef.current.destroy();
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };

  useEffect(() => {
    if (currentPageNumber === -1 || !pageRef.current) return;

    window.history.pushState({}, '', `/comic/${pages[currentPageNumber].id}`);

    setPlayingState(PlayingState.PLAYING_INTRO);
    pageRef.current.playIntro();
  }, [currentPageNumber, pages]);

  useEffect(() => {
    if (pageId === undefined) {
      setCurrentPageNumber(0);
      return;
    }

    // Get page index based on the id
    let pageNumber = -1;
    pages.forEach(({ id }, index) => {
      if (id === pageId) {
        pageNumber = index;
      }
    });

    setCurrentPageNumber(pageNumber);
  }, [pageId, pages]);

  if (currentPageNumber === -1) return null;

  const currentPage = pages[currentPageNumber];

  return (
    <div className="comic-viewer">
      <AppBar />

      <ComicPage
        ref={pageRef}
        intro={currentPage.intro}
        outro={currentPage.outro}
        onCompleteIntro={handleCompleteIntro}
        onCompleteOutro={handleCompleteOutro}
        onFadeComplete={handleCompleteFadeOut}
      />

      <ComicControls
        showBack={currentPageNumber > 0}
        showForward={currentPageNumber < pages.length - 1}
        classBack={
          playingState !== PlayingState.READING ? 'disabled' : 'enabled'
        }
        classForward={
          playingState !== PlayingState.READING ? 'disabled' : 'enabled'
        }
        handleBack={handleBack}
        handleForward={handleForward}
      />
    </div>
  );
};

export default ComicViewer;
