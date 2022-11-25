import styled, { css } from 'styled-components';

import { rem } from '@styles/utils';

export const base = css`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`;

export const headingCSS = {
  h1: css`
    ${base}
    line-height: 1.1;
    font-size: ${rem(30)};
    margin: 0 0 10px 0;
  `,

  h2: css`
    ${base}
    line-height: 1.2;
    font-size: ${rem(28)};
    margin: 0 0 8px 0;
  `,

  h3: css`
    ${base}
    line-height: 1.3;
    font-size: ${rem(26)};
    margin: 0 0 6px 0;
  `,

  h4: css`
    ${base}
    line-height: 1.3;
    font-size: ${rem(24)};
    margin: 0 0 4px 0;
  `,

  h5: css`
    ${base}
    line-height: 1.3;
    font-size: ${rem(22)};
    margin: 0 0 2px 0;
  `,

  h6: css`
    ${base}
    line-height: 1.3;
    font-size: ${rem(20)};
    margin: 0 0 0 0;
  `,
};

/** H1
 * @example
 * <H1 />
 * <H2 as="h2"/>
 */
export const H1 = styled.h1`
  ${headingCSS.h1}
`;

/** H2
 * @example
 * <H1 />
 * <H3 as="h2"/>
 */
export const H2 = styled.h2`
  ${headingCSS.h2}
`;

/** H3
 * @example
 * <H4 />
 * <H3 as="h2"/>
 */
export const H3 = styled.h3`
  ${headingCSS.h3}
`;

/** H4
 * @example
 * <H5 />
 * <H5 as="h2"/>
 */
export const H4 = styled.h4`
  ${headingCSS.h4}
`;

/** H5
 * @example
 * <H5 />
 * <H5 as="h2"/>
 */
export const H5 = styled.h5`
  ${headingCSS.h5}
`;

/** H6
 * @example
 * <H6 />
 * <H6 as="h2"/>
 */
export const H6 = styled.h6`
  ${headingCSS.h6}
`;
