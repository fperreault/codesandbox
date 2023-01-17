/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1 } from '@components/generics';
import { Button } from '@components/generics/buttons/ButtonTailwind';

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
        <div className='grid grid-cols-1 gap-4 tablet:grid-cols-2'>
          <Button.Primary label='inline (primary)' />
          <Button.OutlinePrimary label='inline (outline)' />
          <Button.SmallPrimary label='classnames (small)' />
          <Button.SmallOutlinePrimary label='classnames (small outline)' />
          <Button.LargePrimary label='cx (large primary)' />
          <Button.LargeOutlinePrimary label='cx (large outline)' />
          <Button.XLargePrimary label='cssmodule (xlarge)' />
          <Button.XLargeOutlinePrimary label='cssmodule  (xlarge outline)' />
        </div>
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageTailwind };
