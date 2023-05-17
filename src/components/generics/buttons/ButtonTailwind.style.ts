import classNames from 'classnames';

import { classes } from '@styles/utils';

import { ButtonProps } from './ButtonTailwind.type';
import { ButtonVariantes } from './ButtonTailwind.type';

const styleClassNames = ({
  selected,
  outline,
  small,
  large,
}: Partial<ButtonProps & ButtonVariantes>) => {
  return classNames(
    'min-h-[3rem]',
    'w-fit',
    'min-w-full',
    'px-[1.86em]',

    'rounded-[48px]',
    'border-[1px]',
    'border-solid',
    'border-primary',

    'text-center',
    'text-[1rem]',
    'leading-[1]',

    'transform-gpu',
    'transition-[color,background,transform]',
    'duration-[.2s]',

    'tablet:min-w-[3rem]',

    'active:scale-95',

    'disabled:opacity-50',
    'disabled:cursor-none',
    'disabled:pointer-events-none',
    'aria-disabled:opacity-50',
    'aria-disabled:cursor-none',
    'aria-disabled:pointer-events-none',

    'focus-visible:outline-2',
    'focus-visible:outline-offset-4',
    'focus-visible:outline-dotted',
    'focus-not-visible:outline-none',

    'dark:bg-white',
    'dark:text-black',
    'dark:hover:bg-black',
    'dark:hover:text-white',

    // outline style override
    outline
      ? 'bg-white text-primary hover:bg-primary hover:text-white'
      : 'bg-primary text-white hover:bg-white hover:text-primary',

    // small style override
    small ? 'min-h-[1.5rem] rounded-[20px] text-[0.800rem]' : '',

    // small style override
    large ? 'min-h-[4rem] rounded-[60px] text-[1.5rem]' : '',

    // selected style
    selected && 'bg-primary text-white',
  );
};

const styleClasses = ({
  selected,
  outline,
  small,
  large,
}: Partial<ButtonProps & ButtonVariantes>) =>
  classes(
    'min-h-[3rem]',
    'w-fit',
    'min-w-full',
    'px-[1.86em]',

    'rounded-[48px]',
    'border-[1px]',
    'border-solid',
    'border-primary',

    'text-center',
    'text-[1rem]',
    'leading-[1]',

    'transform-gpu',
    'transition-[color,background,transform]',
    'duration-[.2s]',

    'tablet:min-w-[3rem]',

    'active:scale-95',

    'disabled:opacity-50',
    'disabled:cursor-none',
    'disabled:pointer-events-none',
    'aria-disabled:opacity-50',
    'aria-disabled:cursor-none',
    'aria-disabled:pointer-events-none',

    'focus-visible:outline-2',
    'focus-visible:outline-offset-4',
    'focus-visible:outline-dotted',
    'focus-not-visible:outline-none',

    'dark:bg-white',
    'dark:text-black',
    'dark:hover:bg-black',
    'dark:hover:text-white',

    // outline style override
    outline
      ? 'bg-white text-primary hover:bg-primary hover:text-white'
      : 'bg-primary text-white hover:bg-white hover:text-primary',

    // small style override
    small ? 'min-h-[1.5rem] rounded-[20px] text-[0.800rem]' : '',

    // small style override
    large ? 'min-h-[4rem] rounded-[60px] text-[1.5rem]' : '',

    // selected style
    selected && 'bg-primary text-white',
  );

export { styleClassNames };
export { styleClasses };
