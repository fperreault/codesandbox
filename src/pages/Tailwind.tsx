/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1 } from '@components/generics';
import {
  ButtonMemo,
  ButtonModule,
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
        <h2 className='btn-blue text-2xl'>Tailwind buttons</h2>
        <ButtonInline>Button tailwind (basic inline injection)</ButtonInline>
        <ButtonMemo>Button tailwind (with memo)</ButtonMemo>
        <ButtonModule>Button tailwind (css module)</ButtonModule>
        <ButtonSelected>Button tailwind (select conditonn)</ButtonSelected>
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageTailwind };
