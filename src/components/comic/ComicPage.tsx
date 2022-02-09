import React, {
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import lottie, { AnimationItem } from 'lottie-web';

import { PageData } from '../../interfaces/comic';

export interface ComicPageProps {
  onLoadIntro: () => void;
  onCompleteIntro: () => void;
  onFadeComplete?: () => void;
}

export interface ComicPageRef {
  setPage: (page: PageData) => void;
  playIntro: () => void;
  fadeOut: () => void;
  cancelFade: () => void;
}

const ANIMATION_BASEPATH = 'animations/';

const ComicPage = React.forwardRef<
  ComicPageRef,
  ComicPageProps
>((props, ref) => {
  const { onLoadIntro, onCompleteIntro, onFadeComplete } =
    props;

  const [isFading, setIsFading] = useState<boolean>(false);

  const introContainer = useRef<HTMLDivElement>(null);
  const introAnimation = useRef<AnimationItem | null>(null);

  const loadAnimation = (
    src: string,
    container: HTMLDivElement
  ): AnimationItem =>
    // eslint-disable-next-line implicit-arrow-linebreak
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: `${process.env.PUBLIC_URL}/${ANIMATION_BASEPATH}${src}`,
    });

  const destroyAnimations = (): void => {
    if (
      !introContainer.current ||
      !introAnimation.current
    ) {
      return;
    }

    introContainer.current.style.display = 'initial';

    introAnimation.current.destroy();
  };

  useImperativeHandle(ref, () => ({
    setPage(page) {
      setIsFading(false);
      destroyAnimations();

      const introElem = introContainer.current;

      if (!introElem) return;

      // Load Intro
      const intro = loadAnimation(page.intro, introElem);
      intro.addEventListener('config_ready', onLoadIntro);
      intro.addEventListener('complete', onCompleteIntro);
      introAnimation.current = intro;
    },
    playIntro() {
      if (
        !introContainer.current ||
        !introAnimation.current
      ) {
        return;
      }

      introContainer.current.style.display = 'initial';

      introAnimation.current.play();
    },
    fadeOut() {
      setIsFading(true);
    },
    cancelFade() {
      setIsFading(false);
    },
  }));

  return (
    <div
      className={`comic-page ${
        isFading ? 'comic-page-hidden' : ''
      }`}
      onTransitionEnd={() => {
        if (isFading && onFadeComplete) {
          onFadeComplete();
          setIsFading(false);
        }
      }}
    >
      <div
        className="intro-animation"
        ref={introContainer}
      />
    </div>
  );
});

export default ComicPage;
