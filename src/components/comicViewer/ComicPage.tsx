import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import lottie, { AnimationItem } from 'lottie-web';

export interface ComicPageProps {
  intro: string;
  outro: string;
  onCompleteIntro: () => void;
  onCompleteOutro: () => void;
  onFadeComplete: () => void;
}

export interface ComicPageRef {
  playIntro: () => void;
  playOutro: () => void;
  destroy: () => void;
  fadeOut: () => void;
}

const ANIMATION_BASEPATH = 'animations/';

const ComicPage = React.forwardRef<ComicPageRef, ComicPageProps>((
  {
    intro,
    outro,
    onCompleteIntro,
    onCompleteOutro,
    onFadeComplete,
  },
  ref,
) => {
  const [isFading, setIsFading] = useState<boolean>(false);

  const introContainer = useRef<HTMLDivElement>(null);
  const outroContainer = useRef<HTMLDivElement>(null);

  const introAnimation = useRef<AnimationItem | null>(null);
  const outroAnimation = useRef<AnimationItem | null>(null);

  useImperativeHandle(ref, () => ({
    playIntro() {
      if (!introContainer.current || !outroContainer.current || !introAnimation.current) return;
      introContainer.current.style.display = 'initial';
      outroContainer.current.style.display = 'none';

      introAnimation.current.play();
    },
    playOutro() {
      if (!introContainer.current || !outroContainer.current || !outroAnimation.current) return;
      outroContainer.current.style.display = 'initial';
      introContainer.current.style.display = 'none';

      outroAnimation.current.play();
    },
    destroy() {
      if (
        !introContainer.current
        || !outroContainer.current
        || !introAnimation.current
        || !outroAnimation.current
      ) return;
      introContainer.current.style.display = 'initial';
      outroContainer.current.style.display = 'initial';

      introAnimation.current.destroy();
      outroAnimation.current.destroy();
    },
    fadeOut() {
      setIsFading(true);
    },
  }));

  useEffect(() => {
    const introContainerElem = introContainer.current;
    const outroContainerElem = outroContainer.current;
    if (!introContainerElem || !outroContainerElem) return;

    introAnimation.current = lottie.loadAnimation({
      container: introContainerElem,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: `${process.env.PUBLIC_URL}/${ANIMATION_BASEPATH}${intro}`,
    });

    introAnimation.current.addEventListener('complete', () => {
      onCompleteIntro();
    });

    outroAnimation.current = lottie.loadAnimation({
      container: outroContainerElem,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: `${process.env.PUBLIC_URL}/${ANIMATION_BASEPATH}${outro}`,
    });

    outroAnimation.current.addEventListener('complete', () => {
      onCompleteOutro();
    });

    setIsFading(false);
  }, [intro, outro]);

  return (
    <div
      className={`comic-page ${isFading ? 'comic-page-hidden' : ''}`}
      onTransitionEnd={() => {
        onFadeComplete();
      }}
    >
      <div className="intro-animation" ref={introContainer} />
      <div className="outro-animation" ref={outroContainer} />
    </div>
  );
});

export default ComicPage;
