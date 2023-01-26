import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  selected: boolean;
  variants: Partial<ButtonVariantes> | undefined;
};

type ButtonVariantes = {
  outline: boolean;
  small: boolean;
  large: boolean;
  xlarge: boolean;
};

export type { ButtonProps, ButtonVariantes };
