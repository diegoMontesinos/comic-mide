import React, {
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import lottie, { AnimationItem } from 'lottie-web';
import { Howl } from 'howler';

import { PageData } from '../../interfaces/comic';

export interface ComicPageProps {
  onLoadAnimation: () => void;
  onCompleteAnimation: () => void;
  onFadeComplete?: () => void;
}

export interface ComicPageRef {
  setPage: (page: PageData) => void;
  play: () => void;
  fadeOut: () => void;
  cancelFade: () => void;
}

const ANIMATION_BASEPATH = 'animations/';

const ComicPage = React.forwardRef<
  ComicPageRef,
  ComicPageProps
>((props, ref) => {
  const {
    onLoadAnimation,
    onCompleteAnimation,
    onFadeComplete,
  } = props;

  const [isFading, setIsFading] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const soundRef = useRef<Howl | null>(null);

  const loadAnimation = (
    src: string,
    container: HTMLDivElement
  ): AnimationItem =>
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: `${process.env.PUBLIC_URL}/${ANIMATION_BASEPATH}${src}`,
    });

  const loadSound = (src: string): Howl =>
    new Howl({
      src: [src],
      autoplay: false,
      loop: false,
    });

  const destroyAnimations = (): void => {
    if (!containerRef.current || !animationRef.current) {
      return;
    }

    containerRef.current.style.display = 'initial';
    animationRef.current.destroy();

    if (soundRef.current) {
      soundRef.current.pause();
      soundRef.current.unload();
      soundRef.current = null;
    }
  };

  useImperativeHandle(ref, () => ({
    setPage(page) {
      setIsFading(false);
      destroyAnimations();

      const container = containerRef.current;

      if (!container) return;

      // Load Animation
      const animation = loadAnimation(
        page.animation,
        container
      );
      animation.addEventListener(
        'config_ready',
        onLoadAnimation
      );
      animation.addEventListener(
        'complete',
        onCompleteAnimation
      );
      animationRef.current = animation;

      // Load sound
      if (page.audio) {
        const sound = loadSound(page.audio);
        soundRef.current = sound;
      } else {
        soundRef.current = null;
      }
    },
    play() {
      if (!containerRef.current || !animationRef.current) {
        return;
      }

      containerRef.current.style.display = 'initial';
      animationRef.current.play();

      if (soundRef.current) {
        soundRef.current.play();
      }
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
      <div className="intro-animation" ref={containerRef} />
    </div>
  );
});

export default ComicPage;
