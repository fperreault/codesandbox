import classNames from 'classnames';

import { cx } from '@styles/utils';

const styleClassNames = (selected?: boolean) =>
  classNames(
    'min-h-[2.25rem]',
    'w-fit',
    'min-w-full',
    'rounded-[36px]',
    'border-[1px]',
    'border-solid',
    'border-primary',
    'px-[1.86em]',
    'text-center',
    'text-[0.875rem]',
    'leading-[1rem]',

    'transform-gpu',
    'transition-[color,background,transform]',
    'duration-[.2s]',

    'tablet:min-w-[2.25rem]',

    'hover:bg-white',
    'hover:text-primary',

    'active:scale-95',

    'dark:bg-white',
    'dark:text-black',
    'dark:hover:bg-black',
    'dark:hover:text-white',

    selected ? 'bg-white text-primary' : 'bg-primary text-white',
  );

const styleCxCustom = (selected?: boolean) =>
  cx(
    'min-h-[2.25rem]',
    'w-fit',
    'min-w-full',
    'rounded-[36px]',
    'border-[1px]',
    'border-solid',
    'border-primary',
    'px-[1.86em]',
    'text-center',
    'text-[0.875rem]',
    'leading-[1rem]',

    'transform-gpu',
    'transition-[color,background,transform]',
    'duration-[.2s]',

    'tablet:min-w-[2.25rem]',

    'hover:bg-white',
    'hover:text-primary',

    'active:scale-95',

    'dark:bg-white',
    'dark:text-black',
    'dark:hover:bg-black',
    'dark:hover:text-white',

    selected ? 'bg-white text-primary' : 'bg-primary text-white',
  );

export { styleClassNames as cssClassnames };
export { styleCxCustom as cssCx };
