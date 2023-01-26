import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

/**
 * Mixin used for active, hover and focus visible state
 * @example
 * ${({ theme }) => hoverOrActive`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `}
 */
const hoverOrActive = (
  strings: TemplateStringsArray,
  ...rules: SimpleInterpolation[] | any
): FlattenSimpleInterpolation => css`
  transition-duration: 0.2s;
  transition-property: color, background, transform;
  transition-timing-function: ease-out;

  @media (hover: none) {
    &:active {
      ${css(strings, ...rules)}
    }
  }
  @media (hover: hover) {
    &:hover {
      ${css(strings, ...rules)}
    }
    &:focus-visible {
      ${css(strings, ...rules)}
    }
  }
`;

/**
 * Exports
 */
export { hoverOrActive };
