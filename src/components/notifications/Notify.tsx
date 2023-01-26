/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useReducer } from 'react';

import styled, { keyframes } from 'styled-components';

import { Button } from '@components/generics';
import {
  useNotify,
  notifyReducer,
  NotifyContext,
  NotifyType,
  NotifyPayload,
  NotifyStateAction,
} from '@components/notifications';

interface NotifyProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Emum, type, interface
 */
interface NotifyProps {
  items: NotifyPayload[];
}

/**
 * Notify
 */
const NotifyBase = ({ items }: NotifyProps): JSX.Element => {
  const { remove } = useNotify();

  return (
    <Container>
      {items.map((item: NotifyPayload) => {
        return (
          <Wrapper key={item.id} type={item.type}>
            <Inner type={item.type}>
              <Text role='alert'>{item.message}</Text>
              <Button.SmallOutlinePrimary
                aria-label='fermer'
                label='X'
                onClick={() => item.id && remove(item.id)}
              />
            </Inner>
          </Wrapper>
        );
      })}
    </Container>
  );
};

/**
 * Notify Provider
 */
const NotifyProvider: FC<NotifyProviderProps> = ({
  children,
}: NotifyProviderProps): JSX.Element => {
  const [items, dispatch] = useReducer(notifyReducer, []);

  const warn = (message: string) =>
    dispatch({
      type: NotifyStateAction.ADD,
      payload: { type: NotifyType.WARNING, message },
    });

  const info = (message: string) =>
    dispatch({
      type: NotifyStateAction.ADD,
      payload: { type: NotifyType.INFO, message },
    });

  const log = (message: string) =>
    dispatch({
      type: NotifyStateAction.ADD,
      payload: { type: NotifyType.LOG, message },
    });

  const remove = (id?: number) =>
    id
      ? dispatch({ type: NotifyStateAction.REMOVE, payload: { id } })
      : dispatch({ type: NotifyStateAction.REMOVE_ALL, payload: {} });

  return (
    <NotifyContext.Provider value={{ warn, info, log, remove, items }}>
      {children}
      <NotifyBase items={items} />
    </NotifyContext.Provider>
  );
};

/**
 * Notify Styles
 */
const AnimationOpen = keyframes`
  from { transform: scale3d(.8, .8, .8); }
  to { transform: scale3d(1, 1, 1); }
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 99999;
`;

const Wrapper = styled.div<{ type?: NotifyType }>`
  position: relative;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Inner = styled.div<{ type?: NotifyType }>`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 20px;
  border-radius: 20px;

  color: #fff;

  ${({ type, theme }) =>
    type === NotifyType.WARNING &&
    `background-color:${theme.colors.notification.warn};`};
  ${({ type, theme }) =>
    type === NotifyType.INFO &&
    `background-color:${theme.colors.notification.info};`};
  ${({ type, theme }) =>
    type === NotifyType.LOG &&
    `background-color:${theme.colors.notification.log};`};

  animation-name: ${AnimationOpen};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-ease-in-out;
`;

const Text = styled.p`
  width: 100%;
  margin: 0;
  color: #ffffff;
`;

/**
 * Exports
 */
export { NotifyProvider };
