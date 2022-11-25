/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useState, useEffect } from 'react';

import PreventFocusKeyTrap from 'focus-trap-react';
import styled, { keyframes } from 'styled-components';

import { Button } from '@components/generics';
import { useModal, ModalContext, ModalContentType } from '@components/modals';

import { useHiddenMain } from '@hooks/a11y/useHiddenMain';
import { useKeyPress, Keys } from '@hooks/keyboard/useKeyPress';

import { DisabledBodyScrollGlogalStyle } from '@styles/utils/disabledBodyScroll';

/**
 * Modal Provider Props
 */
interface ModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Modal
 */
const ModalBase = (): JSX.Element => {
  const { content, close } = useModal();
  const isKeyEscPress = useKeyPress(Keys.ESC);
  const { setHiddenMain } = useHiddenMain();

  useEffect(() => {
    if (!content) return;

    // a11y - close modal when ESC is pressing
    if (isKeyEscPress) close();

    setHiddenMain(true);

    return () => setHiddenMain(false);
  }, [content, isKeyEscPress, close, setHiddenMain]);

  return (
    <>
      {content && (
        <PreventFocusKeyTrap>
          <Container>
            <DisabledBodyScrollGlogalStyle />
            <Background onClick={close} />
            <Wrapper>
              <Inner role='dialog'>
                {content}
                <ButtonClose aria-label='fermer' label='X' onClick={close} />
              </Inner>
            </Wrapper>
          </Container>
        </PreventFocusKeyTrap>
      )}
    </>
  );
};

/**
 *
 * Modal Provider
 */
const ModalProvider: FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps): JSX.Element => {
  const [content, setContent] = useState<ModalContentType>(null);

  const open = (content: ModalContentType) => setContent(content);
  const close = () => setContent(null);

  return (
    <ModalContext.Provider value={{ open, close, content }}>
      {children}
      <ModalBase />
    </ModalContext.Provider>
  );
};

/**
 * Modal Styles
 */
const AnimationOpen = keyframes`
  from { transform: scale3d(.8, .8, .8); }
  to { transform: scale3d(1, 1, 1); }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #000;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 60px 60px;
  margin: 0 auto;
  border-radius: 20px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};

  animation-name: ${AnimationOpen};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-ease-in-out;
`;

const ButtonClose = styled(Button.SmallOutlinePrimary)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

/**
 * Exports
 */
export { ModalProvider };
