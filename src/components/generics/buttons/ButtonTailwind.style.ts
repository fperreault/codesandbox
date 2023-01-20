import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { tailwindCx } from '@styles/utils';

import { ButtonProps } from './ButtonTailwind.type';
import { ButtonVariantes } from './ButtonTailwind.type';

const styleClassNames = ({
  selected,
  outline,
  small,
  large,
}: Partial<ButtonProps & ButtonVariantes>) => {
  return twMerge(
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
      'px-[1.86em]',
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

      'disabled:opacity-50',
      'disabled:cursor-none',
      'disabled:pointer-events-none',
      'disabled:bg-black',
      'aria-disabled:opacity-50',
      'aria-disabled:cursor-none',
      'aria-disabled:pointer-events-none',
      'aria-disabled:bg-black',

      'focus-visible:outline-2',
      'focus-visible:outline-offset-4',
      'focus-visible:outline-dotted',
      'focus-not-visible:outline-none',

      'dark:bg-white',
      'dark:text-black',
      'dark:hover:bg-black',
      'dark:hover:text-white',
    ),

    // outline style override
    `${
      outline
        ? 'border-primary bg-white text-primary hover:bg-primary hover:text-white'
        : ''
    }`,

    // small style override
    `${small ? 'min-h-[1.5rem] rounded-[20px] text-[0.800rem]' : ''}`,

    // small style override
    `${large ? 'min-h-[4rem] rounded-[60px] text-[1.5rem]' : ''}`,

    // outline selected style
    `${outline && selected ? ' border-primary bg-primary text-white' : ''}`,

    // selected style
    `${selected ? 'bg-primary text-white' : ''}`,
  );
};

const styleCx = ({
  selected,
  outline,
  small,
  large,
  xlarge,
}: Partial<ButtonProps & ButtonVariantes>) =>
  tailwindCx(
    'bg-primary',
    'text-white',
    'min-h-[3rem]',
    'w-fit',
    'min-w-full',
    'rounded-[48px]',
    'border-[1px]',
    'border-solid',
    'border-primary',
    'px-[1.86em]',
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

    'disabled:opacity-50',
    'disabled:cursor-none',
    'disabled:pointer-events-none',
    'disabled:bg-black',
    'aria-disabled:opacity-50',
    'aria-disabled:cursor-none',
    'aria-disabled:pointer-events-none',
    'aria-disabled:bg-black',

    'focus-visible:outline-2',
    'focus-visible:outline-offset-4',
    'focus-visible:outline-dotted',
    'focus-not-visible:outline-none',

    'dark:bg-white',
    'dark:text-black',
    'dark:hover:bg-black',
    'dark:hover:text-white',

    // outline style override
    `${
      outline
        ? 'border-primary bg-white text-primary hover:bg-primary hover:text-white'
        : ''
    }`,

    // small style override
    `${small ? 'min-h-[1.5rem] rounded-[20px] text-[0.800rem]' : ''}`,

    // large style override
    `${large ? 'min-h-[4rem] rounded-[60px] text-[1.5rem]' : ''}`,

    // outline selected style
    `${outline && selected ? ' border-primary bg-primary text-white' : ''}`,

    // selected style
    `${selected ? 'bg-primary text-white' : ''}`,
  );

export { styleClassNames };
export { styleCx };
