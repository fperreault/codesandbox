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
        <h2 className='text-2xl text-primary dark:text-white'>
          Tailwind buttons (inline)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2'>
          <Button.Inline.SmallPrimary label='small' />
          <Button.Inline.SmallOutlinePrimary label='small outline' />
          <Button.Inline.Primary label='normal' />
          <Button.Inline.OutlinePrimary label='normal outline' />
          <Button.Inline.LargePrimary label='large' />
          <Button.Inline.LargeOutlinePrimary label='large outline' />
          <Button.Inline.SmallPrimary label='small disabled' disabled />
        </div>
      </section>
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>
          Tailwind buttons (classnames)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2'>
          <Button.Classnames.SmallPrimary label='small' />
          <Button.Classnames.SmallOutlinePrimary label='small outline' />
          <Button.Classnames.Primary label='normal' />
          <Button.Classnames.OutlinePrimary label='normal outline' />
          <Button.Classnames.LargePrimary label='large' />
          <Button.Classnames.LargeOutlinePrimary label='large outline' />
          <Button.Classnames.SmallPrimary label='small disabled' disabled />
        </div>
      </section>
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>
          Tailwind buttons (cx)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2'>
          <Button.CX.SmallPrimary label='small' />
          <Button.CX.SmallOutlinePrimary label='small outline' />
          <Button.CX.Primary label='normal' />
          <Button.CX.OutlinePrimary label='normal outline' />
          <Button.CX.LargePrimary label='large' />
          <Button.CX.LargeOutlinePrimary label='large outline' />
          <Button.CX.SmallPrimary label='small disabled' disabled />
        </div>
      </section>
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>
          Tailwind buttons (cssmodule)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2'>
          <Button.CSSMODULE.SmallPrimary label='small' />
          <Button.CSSMODULE.SmallOutlinePrimary label='small outline' />
          <Button.CSSMODULE.Primary label='normal' />
          <Button.CSSMODULE.OutlinePrimary label='normal outline' />
          <Button.CSSMODULE.LargePrimary label='large' />
          <Button.CSSMODULE.LargeOutlinePrimary label='large outline' />
          <Button.CSSMODULE.SmallPrimary label='small disabled' disabled />
        </div>
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageTailwind };
