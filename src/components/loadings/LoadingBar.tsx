/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import styled, { keyframes } from 'styled-components';

/** LOADING Bar
 * @return JSX.Element
 */
const LoadingBar = (): JSX.Element => (
  <LoadingWrapper>
    <BarProgress />
  </LoadingWrapper>
);

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6px;
  z-index: 999999999;
`;

const BarProgress = styled.div`
  position: absolute;
  left: 0;
  background-color: #ff00ff;
  width: 100%;
  height: 100%;

  animation-name: ${keyframes`
    0% { width:0; left: 0 }
    50% { width: 80%; left: 10% }
    100% { width: 0; left: 100% }
  `};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export { LoadingBar };
