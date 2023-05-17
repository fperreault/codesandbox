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
        <h2 className='text-2xl text-primary dark:text-white'>
          Buttons (classes)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
          <Button.Classes.SmallPrimary label='small' />
          <Button.Classes.SmallOutlinePrimary label='small outline' />
          <Button.Classes.Primary label='normal' />
          <Button.Classes.OutlinePrimary label='normal outline' />
          <Button.Classes.LargePrimary label='large' />
          <Button.Classes.LargeOutlinePrimary label='large outline' />
          <Button.Classes.SmallPrimary label='small disabled' disabled />
        </div>
      </section>
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>
          Buttons (cssmodule)
        </h2>
        <div className='grid grid-cols-1 items-center gap-4 tablet:grid-cols-2 desktop:grid-cols-3'>
          <Button.CssModule.SmallPrimary label='small' />
          <Button.CssModule.SmallOutlinePrimary label='small outline' />
          <Button.CssModule.Primary label='normal' />
          <Button.CssModule.OutlinePrimary label='normal outline' />
          <Button.CssModule.LargePrimary label='large' />
          <Button.CssModule.LargeOutlinePrimary label='large outline' />
          <Button.CssModule.SmallPrimary label='small disabled' disabled />
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

      {/* GROUP BASIC */}
      <section>
        <h2 className='text-2xl text-primary dark:text-white'>Groupes</h2>
        <ul role='list' className='grid gap-2 tablet:grid-cols-2'>
          {[...Array(6)].map((_, index) => (
            <li
              key={index}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className='group/item rounded-2 bg-primary/5 transition hover:bg-primary/30'
            >
              <a href='#' className='block w-full p-2'>
                <article className='flex items-center gap-2'>
                  <div className='h-6 w-6 overflow-hidden rounded-full'>
                    <img
                      className='h-full w-full object-cover transition group-hover/item:scale-110'
                      src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=200'
                    />
                  </div>
                  <div>
                    <h4 className='m-0 text-lg leading-5 group-hover/item:text-primary'>
                      Name
                    </h4>
                    <span className='leading-5 group-hover/item:text-primary'>
                      Title
                    </span>
                  </div>
                </article>
              </a>
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
