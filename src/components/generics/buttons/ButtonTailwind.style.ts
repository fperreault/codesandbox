import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { cx } from '@styles/utils';

import { ButtonProps } from './ButtonTailwind.type';
import { ButtonVariantes } from './ButtonTailwind.type';

const styleClassNames = (props?: Partial<ButtonProps & ButtonVariantes>) =>
  twMerge(
    classNames(
      'bg-primary',
      'text-white',
      'min-h-[3rem]',
      'w-fit',
      'min-w-full',
      'rounded-[48px]',
      'border-[1px]',
      'border-solid',
      'border-primary',
      'px-[3.12em]',
      'text-center',
      'text-[1rem]',
      'leading-[1]',

      'transform-gpu',
      'transition-[color,background,transform]',
      'duration-[.2s]',

      'tablet:min-w-[3rem]',

      'hover:bg-white',
      'hover:text-primary',

      'active:scale-95',

      'dark:bg-white',
      'dark:text-black',
      'dark:hover:bg-black',
      'dark:hover:text-white',
    ),

    // outline style override
    `${
      props?.outline
        ? 'border-primary bg-white text-primary hover:bg-primary hover:text-white'
        : ''
    }`,

    // small style override
    `${props?.small ? 'min-h-[1.5rem] rounded-[20px] text-[0.800rem]' : ''}`,

    // small style override
    `${props?.large ? 'min-h-[4rem] rounded-[60px] text-[1.5rem]' : ''}`,

    // selected style
    `${props?.selected ? 'bg-white text-primary' : ''}`,
  );

const styleCx = (props?: Partial<ButtonProps & ButtonVariantes>) =>
  twMerge(
    cx(
      'bg-primary',
      'text-white',
      'min-h-[3rem]',
      'w-fit',
      'min-w-full',
      'rounded-[48px]',
      'border-[1px]',
      'border-solid',
      'border-primary',
      'px-[3.12em]',
      'text-center',
      'text-[1rem]',
      'leading-[1]',

      'transform-gpu',
      'transition-[color,background,transform]',
      'duration-[.2s]',

      'tablet:min-w-[3rem]',

      'hover:bg-white',
      'hover:text-primary',

      'active:scale-95',

      'dark:bg-white',
      'dark:text-black',
      'dark:hover:bg-black',
      'dark:hover:text-white',
    ),

    // outline style override
    `${
      props?.outline
        ? 'border-primary bg-white text-primary hover:bg-primary hover:text-white'
        : ''
    }`,

    // small style override
    `${props?.small ? 'min-h-[1.5rem] rounded-[20px] text-[0.800rem]' : ''}`,

    // small style override
    `${props?.large ? 'min-h-[4rem] rounded-[60px] text-[1.5rem]' : ''}`,

    // selected style
    `${props?.selected ? 'bg-white text-primary' : ''}`,
  );

export { styleClassNames };
export { styleCx };
