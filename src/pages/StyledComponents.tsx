/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1, H3, P } from '@components/generics';

import { Wrapper } from '@styles/tools';

/**
 * Page Styled Components
 */
const PageStyledComponents = (): JSX.Element => {
  return (
    <Wrapper>
      <H1>Styled Components</H1>
      <section>
        <H3>Styled-Components avec AS</H3>
        <h3>h3 normal</h3>
        <H3 as='h4'>h3 style - dom render h4</H3>
        <H3 as={P}>P style - dom render P avec un H3</H3>
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageStyledComponents };
