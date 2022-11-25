/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import styled from 'styled-components';

import { H1 } from '@components/generics';
import { Mauril } from '@components/rives';

import { Wrapper } from '@styles/tools';

/**
 * Page Rive
 */
const PageRive = (): JSX.Element => {
  return (
    <Wrapper>
      <H1>Rive App Test</H1>

      <NavWrapper>
        <li>
          <a
            href='https://rive.app/community/2323-4608-wolvie-v2/'
            target='_blank'
            rel='noreferrer'
          >
            State Machine
          </a>
        </li>
        <li>
          <a
            href='https://editor.rive.app/preview/2323-4608-wolvie-v2/421678?mode=animate&artboard=Animate&animation=State%20Machine%201'
            target='_blank'
            rel='noreferrer'
          >
            State Machine Editor
          </a>
        </li>
      </NavWrapper>

      <section>
        <Mauril />
      </section>
    </Wrapper>
  );
};

const NavWrapper = styled.ul`
  display: flex;
  li {
    margin-right: 20px;
  }
`;

/**
 * Exports
 */
export { PageRive };
