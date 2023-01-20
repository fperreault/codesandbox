/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { twMerge } from 'tailwind-merge';

import { tailwindCx } from '@styles/utils';

import cssModule from './ButtonTailwind.module.css';
import { styleClassNames } from './ButtonTailwind.style';
import { styleCx } from './ButtonTailwind.style';
import { ButtonProps } from './ButtonTailwind.type';
import { ButtonVariantes } from './ButtonTailwind.type';

/***********************/
// INLINE STYLE
/***********************/
const ButtonInlinePrimary = ({
  children,
  selected,
  variants,
  ...rest
}: Partial<ButtonProps>) => {
  return (
    <button
      {...rest}
      className={twMerge(
        // base style
        `min-h-[2.25rem] w-fit min-w-full transform-gpu rounded-[36px] border-[1px] border-solid border-primary bg-primary px-[1.86em] text-center text-[0.875rem] leading-[1rem] text-white transition-[color,background,transform] duration-[.2s]`,

        // hover/active style
        'hover:bg-white hover:text-primary active:scale-95',

        // mq tablet style
        'tablet:min-w-[2.25rem]',

        // disabled style
        'disabled:pointer-events-none disabled:cursor-none disabled:bg-black disabled:opacity-50',
        'aria-disabled:pointer-events-none aria-disabled:cursor-none aria-disabled:bg-black aria-disabled:opacity-50',

        // focus-visible style
        'focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-offset-4',
        'focus-not-visible:outline-none',

        // darkmode style
        'dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white',

        // outline style override
        `${
          variants?.outline
            ? 'border-primary bg-white text-primary hover:bg-primary hover:text-white'
            : ''
        }`,

        // small style override
        `${
          variants?.small ? 'min-h-[1.5rem] rounded-[20px] text-[0.800rem]' : ''
        }`,

        // large style override
        `${variants?.large ? 'min-h-[4rem] rounded-[60px] text-[1.5rem]' : ''}`,

        // selected style
        `${selected ? 'bg-primary text-white' : ''}`,

        // outline selected style
        `${
          variants?.outline && selected
            ? ' border-primary bg-primary text-white'
            : ''
        }`,
      )}
    >
      {children && children}
    </button>
  );
};

/***********************/
// CLASSNAMES STYLE
/***********************/
const ButtonClassNamesPrimary = ({
  children,
  selected,
  variants,
  ...rest
}: Partial<ButtonProps>) => {
  return (
    <button {...rest} className={styleClassNames({ selected, ...variants })}>
      {children && children}
    </button>
  );
};

/***********************/
// CX STYLE
/***********************/
const ButtonCxPrimary = ({
  children,
  selected,
  variants,
  ...rest
}: Partial<ButtonProps>) => {
  return (
    <button {...rest} className={styleCx({ selected, ...variants })}>
      {children && children}
    </button>
  );
};

/***********************/
// CSS MODULE STYLE
/***********************/
const ButtonCssModulePrimary = ({
  children,
  selected,
  variants,
  ...rest
}: Partial<ButtonProps>) => {
  const className = tailwindCx(
    cssModule.button,
    variants?.outline && cssModule.outline,
    variants?.small && cssModule.small,
    variants?.large && cssModule.large,
    selected && cssModule.selected,
  );

  return (
    <button {...rest} className={className}>
      {children && children}
    </button>
  );
};

const ButtonFactory = (
  Button: React.FC<Partial<ButtonProps>>,
  variants?: Partial<ButtonVariantes>,
): React.FC<Partial<ButtonProps>> => {
  const Component = ({ label, ...rest }: Partial<ButtonProps>): JSX.Element => {
    return (
      <Button
        variants={variants}
        {...rest}
        {...(rest.selected === false || rest.selected === true
          ? {
              'role': 'switch',
              'aria-checked': rest.selected,
            }
          : {})}
        aria-disabled={rest.disabled && true}
      >
        {label && label}
      </Button>
    );
  };

  Component.displayName = Button.displayName;

  return Component;
};

const Button = {
  Inline: {
    Primary: ButtonFactory(ButtonInlinePrimary),
    OutlinePrimary: ButtonFactory(ButtonInlinePrimary, { outline: true }),
    SmallPrimary: ButtonFactory(ButtonInlinePrimary, { small: true }),
    SmallOutlinePrimary: ButtonFactory(ButtonInlinePrimary, {
      small: true,
      outline: true,
    }),
    LargePrimary: ButtonFactory(ButtonInlinePrimary, { large: true }),
    LargeOutlinePrimary: ButtonFactory(ButtonInlinePrimary, {
      large: true,
      outline: true,
    }),
  },

  Classnames: {
    Primary: ButtonFactory(ButtonClassNamesPrimary),
    OutlinePrimary: ButtonFactory(ButtonClassNamesPrimary, { outline: true }),
    SmallPrimary: ButtonFactory(ButtonClassNamesPrimary, { small: true }),
    SmallOutlinePrimary: ButtonFactory(ButtonClassNamesPrimary, {
      small: true,
      outline: true,
    }),
    LargePrimary: ButtonFactory(ButtonClassNamesPrimary, { large: true }),
    LargeOutlinePrimary: ButtonFactory(ButtonClassNamesPrimary, {
      large: true,
      outline: true,
    }),
  },

  CX: {
    Primary: ButtonFactory(ButtonCxPrimary),
    OutlinePrimary: ButtonFactory(ButtonCxPrimary, { outline: true }),
    SmallPrimary: ButtonFactory(ButtonCxPrimary, { small: true }),
    SmallOutlinePrimary: ButtonFactory(ButtonCxPrimary, {
      small: true,
      outline: true,
    }),
    LargePrimary: ButtonFactory(ButtonCxPrimary, { large: true }),
    LargeOutlinePrimary: ButtonFactory(ButtonCxPrimary, {
      large: true,
      outline: true,
    }),
  },

  CSSMODULE: {
    Primary: ButtonFactory(ButtonCssModulePrimary),
    OutlinePrimary: ButtonFactory(ButtonCssModulePrimary, { outline: true }),
    SmallPrimary: ButtonFactory(ButtonCssModulePrimary, { small: true }),
    SmallOutlinePrimary: ButtonFactory(ButtonCssModulePrimary, {
      small: true,
      outline: true,
    }),
    LargePrimary: ButtonFactory(ButtonCssModulePrimary, { large: true }),
    LargeOutlinePrimary: ButtonFactory(ButtonCssModulePrimary, {
      large: true,
      outline: true,
    }),
  },
};

export { Button };

/***********************/
// OBSERVATIONS
/***********************/
// Ne pas injecter de variables CSS sur une définiton dynamique (ex: text-[var(--colors-white)]) -> fonctionne mais n'est pas une bonne pratique
// const className = "text-[var(--colors-white)] hidden block";

// Ne pas faire de déclation dans un template string -> Tailwind IntelliSense ne fonctionne pas
// Ne pas faire d'injection dynamique de variables (ex: text-[${rem(14)}]) -> sera ignorée au build donc ne fonctionnera pas
// const className = `border-2 border-solid rounded-2xl text-[${rem(14)}]`;
/************************/
