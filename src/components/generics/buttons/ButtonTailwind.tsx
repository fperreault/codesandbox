/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useState,
} from 'react';

import { cx } from '@styles/utils';

import cssModule from './ButtonTailwind.module.css';
import { styleClassNames } from './ButtonTailwind.style';
import { styleCx } from './ButtonTailwind.style';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonInline = ({ children, ...rest }: Partial<ButtonProps>) => {
  const [selected, setSelected] = useState<boolean>(false);

  /*const classname = `min-h-[2.25rem] w-fit min-w-full transform-gpu rounded-[36px] border-[1px] border-solid border-primary  px-[1.86em] text-center text-[0.875rem] leading-[1rem]  transition-[color,background,transform] duration-[.2s] hover:bg-white hover:text-primary  active:scale-95 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white tablet:min-w-[2.25rem] ${
    selected ? 'bg-white text-primary' : 'bg-primary text-white'
  } `;*/

  return (
    <button
      {...rest}
      className={`min-h-[2.25rem] w-fit min-w-full transform-gpu rounded-[36px] border-[1px] border-solid border-primary  px-[1.86em] text-center text-[0.875rem] leading-[1rem]  transition-[color,background,transform] duration-[.2s] hover:bg-white hover:text-primary  active:scale-95 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white tablet:min-w-[2.25rem] ${
        selected ? 'bg-white text-primary' : 'bg-primary text-white'
      } `}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </button>
  );
};

const ButtonClassNames = ({ children, ...rest }: Partial<ButtonProps>) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <button
      {...rest}
      className={styleClassNames(selected)}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </button>
  );
};

const ButtonCx = ({ children, ...rest }: Partial<ButtonProps>) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <button
      {...rest}
      className={styleCx(selected)}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </button>
  );
};

const ButtonCssModule = ({ children, ...rest }: Partial<ButtonProps>) => {
  const [selected, setSelected] = useState<boolean>(false);

  const className = cx(cssModule.button, selected && cssModule.selected);

  return (
    <button
      {...rest}
      className={className}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </button>
  );
};

export { ButtonInline, ButtonCssModule, ButtonClassNames, ButtonCx };

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
