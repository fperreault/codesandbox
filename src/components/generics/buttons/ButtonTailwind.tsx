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

const ButtonWithMemo = ({
  children,
  selected,
  ...rest
}: Partial<ButtonProps>) => {
  const className = useClassName(style.base, selected && style.selected);

  return (
    <button {...rest} {...className}>
      {children}
    </button>
  );
};

const ButtonWithoutMemo = ({
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

const ButtonSelected = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <ButtonWithMemo selected={selected} onClick={() => setSelected(!selected)}>
      Button selected (with memo and tw injection)
    </ButtonWithMemo>
  );
};

const ButtonInline = ({ children, ...rest }: Partial<ButtonProps>) => {
  return (
    <button
      {...rest}
      className='min-h-[2.25rem] w-fit min-w-[2.25rem] transform-gpu rounded-[36px] border-[1px] border-solid border-[var(--colors-primary)] bg-[var(--colors-primary)] px-[1.86em] text-center text-[0.875rem] leading-[1rem] text-[var(--colors-white)] transition-[color,background,transform] duration-[.2s] hover:bg-[var(--colors-white)]  hover:text-[var(--primary-color)] active:scale-95'
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
// Ne pas faire d'injection dynamique de variables (ex: text-[${rem(14)}]) -> sera ignorée au build dont ne fonctionnera pas
// const className = `border-2 border-solid rounded-2xl text-[${rem(14)}]`;
/************************/

export { ButtonWithMemo, ButtonWithoutMemo, ButtonSelected, ButtonInline };