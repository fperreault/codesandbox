import styled, { css } from 'styled-components';

import { rem } from '@styles/utils';

export const labelCSS = css`
  font-weight: 500;
  font-size: ${rem(14)};
`;

/** Label
 * @exemple
 * <Label />
 */
export const Label = styled.label`
  ${labelCSS}
`;
