/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { classes } from '@styles/utils';

import cssModule from './ButtonTailwind.module.css';
import { styleClassNames } from './ButtonTailwind.style';
import { styleClasses } from './ButtonTailwind.style';
import { ButtonProps } from './ButtonTailwind.type';
import { ButtonVariantes } from './ButtonTailwind.type';

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
// CLASSES STYLE
/***********************/
const ButtonClassesPrimary = ({
  children,
  selected,
  variants,
  ...rest
}: Partial<ButtonProps>) => {
  return (
    <button {...rest} className={styleClasses({ selected, ...variants })}>
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
  const className = classes(
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

  Classes: {
    Primary: ButtonFactory(ButtonClassesPrimary),
    OutlinePrimary: ButtonFactory(ButtonClassesPrimary, { outline: true }),
    SmallPrimary: ButtonFactory(ButtonClassesPrimary, { small: true }),
    SmallOutlinePrimary: ButtonFactory(ButtonClassesPrimary, {
      small: true,
      outline: true,
    }),
    LargePrimary: ButtonFactory(ButtonClassesPrimary, { large: true }),
    LargeOutlinePrimary: ButtonFactory(ButtonClassesPrimary, {
      large: true,
      outline: true,
    }),
  },

  CssModule: {
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
