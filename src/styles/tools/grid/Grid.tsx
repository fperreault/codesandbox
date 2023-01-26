/* 
based from https://styled-css-grid.js.org/

exemples: 

// Traditional Grid
<Grid columns={12} >
  <Cell width={1}>1/12</Cell>
  <Cell width={1}>2/12</Cell>
  ...
  <Cell width={2}>1/6</Cell>
  <Cell width={2}>2/6</Cell>
  ...
</Grid>

// Positioning
<Grid columns={3}>
  <Cell>Top Left</Cell>
  <Cell left={3}>Top Right</Cell>
  <Cell left={2} top={2}>Middle</Cell>
  <Cell top={3}>Bottom Left</Cell>
  <Cell top={3} left={3}>Bottom Right</Cell>
</Grid>

// Responsive Layout
<Grid columns="repeat(auto-fit,minmax(120px,1fr))">
  <Cell>A</Cell>
  <Cell>B</Cell>
  <Cell>C</Cell>
  <Cell>D</Cell>
</Grid>
*/
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { media, MEDIAS_DICT } from '@styles/configs/breakpoint';

/**
 * Format Area
 */
const formatAreas = (areas: Array<string>) =>
  areas.map((area) => `"${area}"`).join(' ');

/**
 * Render grid template for each defined breakpoint
 */
const renderResponsiveTemplate = (
  responsiveTemplate?: ResponsiveTemplate,
): string | FlattenSimpleInterpolation => {
  if (!responsiveTemplate) return '';

  return Object.keys(responsiveTemplate).map((key: string) => {
    const value = responsiveTemplate[key as MEDIAS_DICT];
    if (!value) return '';

    const mediaToRender = media[key as MEDIAS_DICT];
    if (!mediaToRender) return '';

    return mediaToRender`
       grid-template-columns: ${value};
     `;
  });
};

/**
 * Grid
 * @exemple
 * <Grid
 *    as="ul"
 *    columns="repeat(auto-fit, minmax(0px, 1fr));"
 *    responsiveTemplate={{ smOnly: '1fr', xsOnly: '1fr' }}
 *  >
 *    <Cell as="li"></Cell>
 *    <Cell as="li"></Cell>
 *    <Cell as="li"></Cell>
 * </Grid>
 */
const Grid = styled.div<GripProps>`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  list-style-type: none;

  grid-auto-flow: ${({ flow = 'row' }) => flow};
  grid-auto-rows: ${({ minRowHeight = '20px' }) =>
    `minmax(${minRowHeight}, auto)`};

  grid-template-columns: ${({ columns = 12 }) =>
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns};
  ${({ rows }) =>
    rows &&
    `grid-template-rows: ${
      typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows
    }`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};

  grid-gap: ${({ gap = `20px` }) => gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};

  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};

  ${({ responsiveTemplate }) =>
    responsiveTemplate && renderResponsiveTemplate(responsiveTemplate)};
`;

/**
 * Cell
 * @exemple
 * <Grid columns="repeat(auto-fit,minmax(120px,1fr))">
 *    <Cell>A</Cell>
 *    <Cell>B</Cell>
 *    <Cell>C</Cell>
 *    <Cell>D</Cell>
 * </Grid>
 */
const Cell = styled.div<CellProps>`
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};

  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};

  ${({ center }) => center && `text-align: center`};

  ${({ area }) => area && `grid-area: ${area}`};

  ${({ middle }) =>
    middle &&
    `
     display: inline-flex;
     flex-flow: column wrap;
     justify-content: center;
     justify-self: stretch;
 `};
`;

/****************************/
/* PRIVATE INTERFACES/TYPES */
/****************************/
interface GripProps {
  height?: number | string;
  gap?: number | string;
  rows?: number | string;
  rowGap?: string;
  columns?: number | string;
  columnGap?: string;
  minRowHeight?: string;
  areas?: Array<string>;
  flow?: string;
  justifyContent?: string;
  alignContent?: string;
  responsiveTemplate?: ResponsiveTemplate;
}

interface CellProps {
  width?: number;
  height?: number;
  left?: string;
  top?: string;
  area?: string;
  center?: boolean;
  middle?: boolean;
}

type ResponsiveTemplate = Partial<Record<MEDIAS_DICT, string>>;

export { Grid, Cell };
