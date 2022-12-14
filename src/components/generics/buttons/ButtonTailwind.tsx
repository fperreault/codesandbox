/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useState,
} from 'react';

import { rem, className, useClassName } from '@styles/utils';

import style from './ButtonTailwind.module.css';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  selected: boolean;
};

const ButtonMemo = ({ children, selected, ...rest }: Partial<ButtonProps>) => {
  const className = useClassName(style.base, selected && style.selected);

  return (
    <button {...rest} {...className}>
      {children}
    </button>
  );
};

const ButtonModule = ({
  children,
  selected,
  ...rest
}: Partial<ButtonProps>) => {
  return (
    <button {...rest} {...className(style.base, selected && style.selected)}>
      {children}
    </button>
  );
};

const ButtonSelected = ({ children, ...rest }: Partial<ButtonProps>) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <ButtonMemo
      {...rest}
      selected={selected}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </ButtonMemo>
  );
};

const ButtonClassName = ({ children, ...rest }: Partial<ButtonProps>) => {
  const classname =
    'min-h-[2.25rem] w-fit min-w-[2.25rem] transform-gpu rounded-[36px] border-[1px] border-solid border-primary bg-primary px-[1.86em] text-center text-[0.875rem] leading-[1rem] text-white transition-[color,background,transform] duration-[.2s] hover:bg-white  hover:text-primary active:scale-95';

  return (
    <button {...rest} className={classname}>
      {children}
    </button>
  );
};

const ButtonInline = ({ children, ...rest }: Partial<ButtonProps>) => {
  return (
    <button
      {...rest}
      className='min-h-[2.25rem] w-fit min-w-[2.25rem] transform-gpu rounded-[36px] border-[1px] border-solid border-primary bg-primary px-[1.86em] text-center text-[0.875rem] leading-[1rem] text-white transition-[color,background,transform] duration-[.2s] hover:bg-white  hover:text-primary active:scale-95'
    >
      {children}
    </button>
  );
};

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

export {
  ButtonMemo,
  ButtonModule,
  ButtonSelected,
  ButtonClassName,
  ButtonInline,
};
