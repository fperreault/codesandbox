/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import { H1, H2, H3 } from '@components/generics';

import { useIntersectionObserver, useRaf, useScroll } from '@hooks/window';

import { Wrapper, WrapperFull } from '@styles/tools';

const BoxObserved = () => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: document, // codesandbox hack -> viewport in an iframe
    rootMargin: '-150px 0px 0px 0px', // top | right | bottom | left
  });

  const isIntersecting = entry?.isIntersecting;
  const color = isIntersecting ? '#217fcc' : '#ffffff';

  return <Box ref={ref} color={color} />;
};

const HeadingObserved = () => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: document, // codesandbox hack -> viewport in an iframe
    rootMargin: '-50% 0px -50% 0px', // top | right | bottom | left
  });

  const isIntersecting = entry?.isIntersecting;
  const text = isIntersecting
    ? "J'y suis arrivé au centre"
    : "Je dois me rendre au centre de l'écran";

  return <H3 ref={ref}>{text}</H3>;
};

const AdBoxObserved = () => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: document, // codesandbox hack -> viewport in an iframe
    //threshold: 0.3, // number between 0 and 1 (30% visible)
    rootMargin: '0px 0px -200px 0px', // top | right | bottom | left
    once: true, // custom option added to native option -> trigger only once
  });

  const isIntersecting = entry?.isIntersecting;
  const text = isIntersecting ? 'Initialisé' : 'Pas initialisé';
  const color = isIntersecting ? '#0dd96f' : '#f2f2f2';

  return (
    <Box ref={ref} color={color}>
      {text}
    </Box>
  );
};

const AnimateWithScrollRafObserved = () => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    root: document, // codesandbox hack -> viewport in an iframe
  });
  const animation = useRaf(() => {
    if (ref.current) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const refPosition = scrollPosition - ref.current.offsetTop;
      const progress = Math.min(1, refPosition / window.innerHeight);
      ref.current.style.width = `${progress * 100}%`;
      ref.current.style.opacity = `${progress}`;
    }
  });

  useEffect(() => {
    const isIntersecting = entry?.isIntersecting;
    if (isIntersecting) animation.start();
    else animation.stop();
  }, [entry, animation]);

  return <Box ref={ref} color={'#fc03a9'} />;
};

const AnimateWithScrollObserved = () => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    root: document, // codesandbox hack -> viewport in an iframe
  });

  const scroll = useScroll((scroll) => {
    if (ref.current) {
      const scrollPosition = scroll.y + window.innerHeight;
      const refPosition = scrollPosition - ref.current.offsetTop;
      const progress = Math.min(1, refPosition / window.innerHeight);
      ref.current.style.width = `${progress * 100}%`;
      ref.current.style.opacity = `${progress}`;
    }
  }, false);

  // start window scroll listener when intercepting
  useEffect(() => {
    const isIntersecting = entry?.isIntersecting;
    if (isIntersecting && !scroll.isRunning) scroll.start();
    if (!isIntersecting && scroll.isRunning) scroll.stop();
  }, [entry, scroll]);

  return <Box ref={ref} color={'#fc03a9'} />;
};

const Box = styled.div<{ color: string }>`
  width: 100%;
  height: 300px;
  margin: 5px 0;
  background-color: ${({ color }) => color};
  transition: 1s background-color;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

/**
 * Page IntersectionObserver
 */
const PageIntersectionObserver = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <H1>Intersection Observer API</H1>
        <BoxObserved />
        <H2>Détection qu&apos;une seule fois</H2>
        <AdBoxObserved />
        <H2>Animation avec RAF hook</H2>
        <AnimateWithScrollRafObserved />
        <H2>Lazy loading img</H2>
        <img
          loading='lazy'
          src='https://images.radio-canada.ca/q_auto,w_350/v1/alimentation/personne/2x3/jerome-ferrer.jpeg'
          alt='Portrait du chef Jérôme Ferrer'
        />
        <HeadingObserved />
        <H2>Animation avec Scroll Instance hook</H2>
        <AnimateWithScrollObserved />
      </Wrapper>
      <WrapperFull>
        <BoxObserved />
        <H2>Détection qu&apos;une seule fois</H2>
        <AdBoxObserved />
        <H2>Animation avec RAF hook</H2>
        <AnimateWithScrollRafObserved />
        <H2>Animation avec Scroll Instance hook</H2>
        <AnimateWithScrollObserved />
        <HeadingObserved />
      </WrapperFull>
      <Wrapper>
        <BoxObserved />
        <BoxObserved />
        <AdBoxObserved />
        <BoxObserved />
        <BoxObserved />
      </Wrapper>
    </>
  );
};

export { PageIntersectionObserver };
