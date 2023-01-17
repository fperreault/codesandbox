import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  selected: boolean;
};

type ButtonVariantes = {
  outline: boolean;
  small: boolean;
  large: boolean;
};

export type { ButtonProps, ButtonVariantes };
