import styled, { css } from 'styled-components';

/** Display Flex
 * - Utils to add into anothen style component
 * @exemple
 * const StyleComponent = styled(...)`
 *    ${FlexDisplay.CSS}
 *    ...
 * `;
 * or
 * <FlexDisplay.Component />
 */
const CSS = css`
  display: flex;
`;

const Component = styled.div`
  ${CSS}
`;

const FlexDisplay = { Component, CSS };

/**
 * Exports
 */
export { FlexDisplay };
