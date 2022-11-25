import styled from 'styled-components';

/**
 * WRAPPER SETTINGS
 */
const settings = {
  maxContainer: 600,
};

/**
 * WRAPPER SIMPLE WITH A MAX-WIDTH STYLE
 * - use it to wrap content with a max reflow
 * @example
 * <Wrapper>
 * ...
 * </Wrapper>
 */
const Wrapper = styled.div`
  width: 100%;
  max-width: ${settings.maxContainer}px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const WrapperFull = styled.div`
  width: 100%;
  max-width: none;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
`;

/**
 * Exports
 */
export { Wrapper, WrapperFull };
