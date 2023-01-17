/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1 } from '@components/generics';
import {
  Button,
  ButtonClassNames,
  ButtonCx,
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
          <Button.Primary label='inline (primary)' />
          <Button.OutlinePrimary label='inline (outline)' />
          <Button.SmallPrimary label='inline (small)' />
          <Button.SmallOutlinePrimary label='inline (small outline)' />
          <Button.LargePrimary label='inline (large primary)' />
          <Button.LargeOutlinePrimary label='inline (large outline)' />
          <ButtonClassNames label='classnames' />
          <ButtonCx label='cx' />
          <ButtonCssModule label='cssmodule' />
        </div>
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageTailwind };
