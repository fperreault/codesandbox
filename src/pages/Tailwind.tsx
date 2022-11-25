/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1 } from '@components/generics';
import {
  ButtonWithMemo,
  ButtonWithoutMemo,
  ButtonSelected,
  ButtonInline,
} from '@components/generics/buttons/ButtonTailwind';

import { Wrapper } from '@styles/tools';

/**
 * Page Tailwind
 *
 */
const PageTailwind = (): JSX.Element => {
  return (
    <Wrapper>
      <H1>Tailwind</H1>
      <section>
        <h2 className='btn-blue text-2xl'>
          Generics buttons (basic tw injection)
        </h2>
        <ButtonInline>Button generic (basic tw injection)</ButtonInline>
        <ButtonWithMemo>
          Button generic (with memo and tw injection)
        </ButtonWithMemo>
        <ButtonWithoutMemo>
          Button generic (without memo and tw injection)
        </ButtonWithoutMemo>
        <ButtonSelected />
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageTailwind };
