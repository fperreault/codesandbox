/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1 } from '@components/generics';
import {
  ButtonInline,
  ButtonConstClassName,
  ButtonClassNames,
  ButtonCssModule,
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
        <h2 className='text-2xl text-primary'>Tailwind buttons</h2>
        <div className='grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-4'>
          <ButtonInline>inline injection</ButtonInline>
          <ButtonConstClassName>const classname</ButtonConstClassName>
          <ButtonClassNames>with classnames</ButtonClassNames>
          <ButtonCssModule>css module</ButtonCssModule>
        </div>
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageTailwind };
