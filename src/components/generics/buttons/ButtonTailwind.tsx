/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';

import { twMerge } from 'tailwind-merge';

import { cx } from '@styles/utils';

import cssModule from './ButtonTailwind.module.css';
import { styleClassNames } from './ButtonTailwind.style';
import { styleCx } from './ButtonTailwind.style';
import { ButtonProps } from './ButtonTailwind.type';
import { ButtonVariantes } from './ButtonTailwind.type';

/****************************/
// INLINE STYLE - NORMAL SIZE
/****************************/
const ButtonInlinePrimary = ({
  children,
  selected,
  outline,
  ...rest
}: Partial<ButtonProps & ButtonVariantes>) => {
  return (
    <button
      {...rest}
      className={twMerge(
        // base style
        `min-h-[2.25rem] w-fit min-w-full transform-gpu rounded-[36px] border-[1px] border-solid border-primary bg-primary px-[1.86em]  text-center text-[0.875rem] leading-[1rem] text-white  transition-[color,background,transform] duration-[.2s] hover:bg-white hover:text-primary  active:scale-95 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white tablet:min-w-[2.25rem]`,

        // selected style
        `${selected ? 'bg-white text-primary' : ''}`,

        // outline style override
        `${
          outline &&
          'border-primary bg-white text-primary hover:bg-primary hover:text-white'
        }`,

        // outline selected style
        `${outline && selected && ' border-primary bg-primary text-white'}`,
      )}
    >
      {children && children}
    </button>
  );
};

/*******************************/
// CLASSNAMES STYLE - SMALL SIZE
/*******************************/
const ButtonClassNamesPrimary = ({
  children,
  selected,
  outline,
  small,
  ...rest
}: Partial<ButtonProps & ButtonVariantes>) => {
  return (
    <button {...rest} className={styleClassNames({ selected, outline, small })}>
      {children && children}
    </button>
  );
};

/***********************/
// CX STYLE - LARGE SIZE
/***********************/
const ButtonCxPrimary = ({
  children,
  selected,
  outline,
  small,
  ...rest
}: Partial<ButtonProps & ButtonVariantes>) => {
  return (
    <button {...rest} className={styleCx({ selected, outline, small })}>
      {children && children}
    </button>
  );
};

/*******************************/
// CSS MODULE STYLE - XLARGE SIZE
/*******************************/
const ButtonCssModule = ({ children, ...rest }: Partial<ButtonProps>) => {
  const [selected, setSelected] = useState<boolean>(false);

  const className = cx(cssModule.button, selected && cssModule.selected);

  return (
    <button
      role='switch'
      aria-checked={selected}
      aria-disabled={rest.disabled && true}
      onClick={() => setSelected(!selected)}
      className={className}
    >
      {children && children}
    </button>
  );
};

const ButtonFactory = (
  Button: React.FC<Partial<ButtonProps>>,
  variante?: Partial<ButtonVariantes>,
): React.FC<Partial<ButtonProps>> => {
  const Component = ({ label, ...rest }: Partial<ButtonProps>): JSX.Element => {
    return (
      <Button
        {...variante}
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
  Primary: ButtonFactory(ButtonInlinePrimary),
  OutlinePrimary: ButtonFactory(ButtonInlinePrimary, { outline: true }),

  SmallPrimary: ButtonFactory(ButtonClassNamesPrimary, { small: true }),
  SmallOutlinePrimary: ButtonFactory(ButtonClassNamesPrimary, {
    small: true,
    outline: true,
  }),

  LargePrimary: ButtonFactory(ButtonCxPrimary, { large: true }),
  LargeOutlinePrimary: ButtonFactory(ButtonCxPrimary, {
    large: true,
    outline: true,
  }),

  XLargePrimary: ButtonFactory(ButtonCssModule),
  XLargeOutlinePrimary: ButtonFactory(ButtonCssModule),
};

export { Button };

/************************/
// TAILWIND OBSERVATIONS
/************************/
// Si la constante se nomme `className / classname`--> Tailwind IntelliSense fonctionne
// const classname = 'border-2 border-solid rounded-2xl hidden block';

// Ne pas injecter de variables CSS sur une définiton dynamique (ex: text-[var(--colors-white)]) -> fonctionne mais n'est pas une bonne pratique (possible linter ?)
// const className = "text-[var(--colors-white)] hidden block";

// Ne pas faire de déclation dans un template string -> Tailwind IntelliSense ne fonctionne pas
// Ne pas faire d'injection dynamique de variables (ex: text-[${rem(14)}]) -> sera ignorée au build donc ne fonctionnera pas
// const className = `border-2 border-solid rounded-2xl text-[${rem(14)}]`;
/************************/
