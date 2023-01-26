import styled, { css } from 'styled-components';

import { rem } from '@styles/utils';

export const paragraphgCSS = css`
  margin-bottom: 0;
  font-size: ${rem(16)};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

/** Paragraph
 * @exemple
 * <P/>
 */
export const P = styled.p`
  ${paragraphgCSS}
`;
