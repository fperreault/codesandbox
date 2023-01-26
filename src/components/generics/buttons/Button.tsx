import React, { HTMLProps } from 'react';

import styled, { css } from 'styled-components';

import { hoverOrActive, rem } from '@styles/utils';

/**
 * Button type
 * @example
 * // render a button visually but as a href scemantically
 * <Button.SmallPrimary
 *    label="Label"
 *    as={ButtonTypes.LINK}
 *    href=""
 *  />
 */
enum ButtonTypes {
  BUTTON = 'button',
  LINK = 'a',
}

type ButtonProps = HTMLProps<HTMLButtonElement | HTMLAnchorElement> & {
  as: ButtonTypes | React.FC; // restrincted style-components for only "button" or "a"
  label: string;
  selected: boolean;
};

/**
 * Small variante styles
 */
const small = css`
  min-height: ${rem(36)};
  min-width: ${rem(36)};
  border-radius: 36px;

  font-size: ${rem(14)};
  line-height: 1;

  padding: 0 1.86em;
`;

/**
 * Normal variante styles
 */
const normal = css`
  min-height: ${rem(48)};
  min-width: ${rem(48)};
  border-radius: 48px;

  font-size: ${rem(16)};
  line-height: 1;

  padding: 0 3.12em;
`;

/**
 * Large variante styles
 */
const large = css`
  min-height: ${rem(54)};
  min-width: ${rem(54)};
  border-radius: 54px;

  font-size: ${rem(18)};
  line-height: 1;

  padding: 0 3em;
`;

/**
 * Default styles
 */
const ButtonDefault = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  text-align: center;

  font-weight: 400;
  text-decoration: none;

  color: var(--colors-white);
  background-color: var(--colors-grey-primary);

  border: none;

  cursor: pointer;

  &:focus-visible {
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: dotted;
    box-shadow: 0px 0px 0px 2px var(--colors-white);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:active {
    transform: scale(0.95, 0.95);
  }

  &:disabled,
  &[aria-disabled='true'] {
    color: var(--colors-grey-primary);
    background-color: var(--colors-grey-light);
    opacity: 0.5;

    cursor: none;
    pointer-events: none;
  }

  ${({ selected }) =>
    selected &&
    `
    color: var(--color-white);
    background-color: var(--colors-black);
  `}

  ${() => hoverOrActive`
    color: var(--color-white);
    background-color: var(--colors-black);
  `}
`;

/**
 * Primary style
 */
const ButtonPrimary = styled(ButtonDefault)`
  background-color: var(--colors-primary);
  border: 1px solid var(--colors-primary);

  ${({ selected }) =>
    selected &&
    `
    color: var(--primary-color);
    background-color: var(--colors-white);
  `}

  ${() => hoverOrActive`
    color: var(--primary-color);
    background-color: var(--colors-white);
  `}
`;

/**
 * Outline primary style
 */
const ButtonOutlinePrimary = styled(ButtonDefault)`
  color: var(--colors-primary);
  background-color: var(--colors-white);
  border: 1px solid var(--colors-primary);

  ${({ selected }) =>
    selected &&
    `
    color: var(--colors-white);
    background-color: var(--colors-primary);
    border: 1px solid var(--colors-primary);
  `}

  ${({ selected }) => hoverOrActive`
    color: ${selected ? `var(--colors-white)` : `var(--colors-white)`};
    background-color: ${
      selected ? `var(--colors-primary)` : `var(--colors-primary)`
    };
    border: 1px solid ${
      selected ? `var(--colors-primary)` : `var(--colors-primary)`
    };
  `}
`;

/**
 * Button top level factory
 */
const ButtonFactory = (
  Button: React.FC<Partial<ButtonProps>>,
): React.FC<Partial<ButtonProps>> => {
  const Component = ({ label, ...rest }: Partial<ButtonProps>): JSX.Element => {
    return (
      <Button
        {...rest}
        {...(rest.selected === false || rest.selected === true
          ? {
              'aria-checked': rest.selected,
              role: 'switch',
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

/**
 * Small Button factory
 */
const SmallButtonFactory = (
  Button: React.FC<Partial<ButtonProps>>,
): React.FC<Partial<ButtonProps>> => {
  const ButtonStyled = styled(Button)`
    ${small}
  `;

  const Component = ButtonFactory(ButtonStyled);
  Component.displayName = `Small_${Button.displayName}`;

  return Component;
};

/**
 * Normal Button factory
 */
const NormalButtonFactory = (
  Button: React.FC<Partial<ButtonProps>>,
): React.FC<Partial<ButtonProps>> => {
  const ButtonStyled = styled(Button)`
    ${normal}
  `;

  const Component = ButtonFactory(ButtonStyled);
  Component.displayName = `Normal_${Button.displayName}`;

  return Component;
};

/**
 * Large Button factory
 */
const LargeButtonFactory = (
  Button: React.FC<Partial<ButtonProps>>,
): React.FC<Partial<ButtonProps>> => {
  const ButtonStyled = styled(Button)`
    ${large}
  `;

  const Component = ButtonFactory(ButtonStyled);
  Component.displayName = `Large_${Button.displayName}`;

  return Component;
};

/**
 * Button
 */
const Button = {
  Primary: NormalButtonFactory(ButtonPrimary),
  OutlinePrimary: NormalButtonFactory(ButtonOutlinePrimary),

  SmallPrimary: SmallButtonFactory(ButtonPrimary),
  SmallOutlinePrimary: SmallButtonFactory(ButtonOutlinePrimary),

  LargePrimary: LargeButtonFactory(ButtonPrimary),
  LargeOutlinePrimary: LargeButtonFactory(ButtonOutlinePrimary),
};

/**
 * Export
 */
export { Button, ButtonTypes };
