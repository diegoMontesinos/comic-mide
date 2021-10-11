import React, { useEffect, useRef, useState } from 'react';

import GoForwardImg from '../assets/go_fwd.svg';
import GoBackImg from '../assets/go_back.svg';

import ComicPage, { ComicPageRef } from './ComicPage';

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
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
  const [playingState, setPlayingState] = useState<PlayingState>(PlayingState.READING);

  const pageRef = useRef<ComicPageRef | null>(null);

  const currentPage = pages[currentPageNumber];

  const handleBack = () => {
    if (!pageRef.current) return;

    setPlayingState(PlayingState.FADING_OUT);
    pageRef.current.fadeOut();
  };

  const handleForward = () => {
    if (!pageRef.current) return;

    setPlayingState(PlayingState.PLAYING_OUTRO);
    pageRef.current.playOutro();
  };

  const handleCompleteIntro = () => {
    setPlayingState(PlayingState.READING);
  };

  const handleCompleteOutro = () => {
    setPlayingState(PlayingState.READING);

    if ((currentPageNumber < pages.length - 1) && pageRef.current) {
      pageRef.current.destroy();
      setCurrentPageNumber(currentPageNumber + 1);
    }
  };

  const handleCompleteFadeOut = () => {
    if (playingState !== PlayingState.FADING_OUT) return;
    setPlayingState(PlayingState.READING);

    if ((currentPageNumber > 0) && pageRef.current) {
      pageRef.current.destroy();
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };

  useEffect(() => {
    if (!pageRef.current) return;

    setPlayingState(PlayingState.PLAYING_INTRO);
    pageRef.current.playIntro();
  }, [currentPageNumber]);

  return (
    <div className="comic-viewer">
      <ComicPage
        ref={pageRef}
        intro={currentPage.intro}
        outro={currentPage.outro}
        onCompleteIntro={handleCompleteIntro}
        onCompleteOutro={handleCompleteOutro}
        onFadeComplete={handleCompleteFadeOut}
      />

      <div className="comic-controls">
        {(currentPageNumber > 0) && (
          <button
            className={`go-back-btn ${playingState !== PlayingState.READING ? 'disabled' : 'enabled'}`}
            type="button"
            onClick={handleBack}
          >
            <img src={GoBackImg} alt="Go Back" />
          </button>
        )}

        {(currentPageNumber < pages.length - 1) && (
          <button
            className={`go-fwd-btn ${playingState !== PlayingState.READING ? 'disabled' : 'enabled'}`}
            type="button"
            onClick={handleForward}
          >
            <img src={GoForwardImg} alt="Go Forward" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ComicViewer;
