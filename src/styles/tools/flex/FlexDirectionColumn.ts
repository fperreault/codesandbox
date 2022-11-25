import styled, { css } from 'styled-components';

import { FlexDisplay } from './FlexDisplay';

/** Align verticaly with flexbox CSS
 * - Utils to add into anothen style component
 * @exemple
 * const StyleComponent = styled(...)`
 *    ${FlexDirectionColumn.CSS}
 *    ...
 * `;
 * or
 * <FlexDirectionColumn.Component />
 */
const CSS = css`
  ${FlexDisplay.CSS}
  flex-direction: column;
`;
const Component = styled.div`
  ${CSS}
`;

const FlexDirectionColumn = { Component, CSS };

/**
 * Exports
 */
export { FlexDirectionColumn };
