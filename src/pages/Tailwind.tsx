/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { Button } from '@components/generics/buttons/ButtonTailwind';

const SlideItem = () => {
  return (
    <div className='relative flex w-[187px] flex-col justify-start overflow-hidden rounded-2'>
      <img
        alt=''
        loading='lazy'
        src='https://images.radio-canada.ca/q_auto,w_400/v1/audio/episodique/1x1/ombre-du-doute-disparue-1.jpg'
      />
      <div className='bg-primary/10 p-3 dark:bg-white'>
        <div className='flex items-center border-b border-primary/30 pb-2'>
          <button>
            <svg
              aria-hidden='true'
              className='mr-2 h-2 w-2 fill-primary text-primary'
            >
              <use xlinkHref='/assets/svg/icons.svg#play'></use>
            </svg>
          </button>
          <time className='sr-only'>Durée de 23&nbsp;minutes</time>
          <time
            aria-hidden='true'
            title='Durée de 23&nbsp;minutes'
            className='text-xs text-primary'
            dateTime='22:34'
          >
            23&nbsp;min
          </time>
        </div>
        <div className='pt-1'>
          <span className='text-xs font-bold uppercase text-primary/70'>
            Balado
          </span>
          <h3 className='m-0 text-sm text-primary/70'>La femme effacée</h3>
        </div>
      </div>
    </div>
  );
};

/**
 * Page Tailwind
 *
 */
const PageTailwind = (): JSX.Element => {
  return (
    <div className='mx-auto max-w-main'>
      <h1 className='text-3xl text-black dark:text-white'>Taildwind</h1>

      {/* BUTTONS */}
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>
          Buttons (inline)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
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
          Buttons (classnames)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
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
        <h2 className='text-2xl text-primary dark:text-white'>Buttons (cx)</h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
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
          Buttons (cssmodule)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
          <Button.CSSMODULE.SmallPrimary label='small' />
          <Button.CSSMODULE.SmallOutlinePrimary label='small outline' />
          <Button.CSSMODULE.Primary label='normal' />
          <Button.CSSMODULE.OutlinePrimary label='normal outline' />
          <Button.CSSMODULE.LargePrimary label='large' />
          <Button.CSSMODULE.LargeOutlinePrimary label='large outline' />
          <Button.CSSMODULE.SmallPrimary label='small disabled' disabled />
        </div>
      </section>

      {/* SPACERS */}
      <div className='relative h-3 border-[1px] border-dotted'>
        <h2 className='absolute top-0 left-0 text-xs opacity-50'>
          vertical spacer
        </h2>
      </div>

      {/* GRID */}
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>
          Grid 10/1 colomns
        </h2>
        <div className='grid gap-2 tablet:grid-cols-10'>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            1
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            2
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            3
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            4
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            5
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            6
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            7
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            8
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            9
          </div>
          <div className='bg-primary text-center text-white outline-dashed outline-1'>
            10
          </div>
        </div>
      </section>

      {/* SLIDER BASIC */}
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>Slider basic</h2>
        <ul className='flex flex-nowrap overflow-hidden overflow-x-scroll scroll-smooth'>
          {[...Array(10)].map((_, index) => (
            <li key={index} className='mr-2 last:mr-0'>
              <SlideItem />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

/**
 * Exports
 */
export { PageTailwind };
