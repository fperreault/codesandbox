import {
  css,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components';

/***********/
/* PRIVATE */
/***********/
/**
 * BREAKPOINTS_DICT
 */
enum BREAKPOINTS_DICT {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
}

/**
 * MEDIAS_DICT
 */
enum MEDIAS_DICT {
  xsOnly = 'xsOnly',
  xsToSm = 'xsToSm',
  xsToMd = 'xsToMd',
  sm = 'sm',
  smOnly = 'smOnly',
  smToMd = 'smToMd',
  md = 'md',
  mdOnly = 'mdOnly',
  lg = 'lg',
  lgOnly = 'lgOnly',
  xl = 'xl',
  xlOnly = 'xlOnly',
}

/**
 * BREAKPOINTS
 * - breakpoints set configuration
 */
const BREAKPOINTS: Record<
  BREAKPOINTS_DICT,
  { min: number; max: number; fixed?: number }
> = {
  [BREAKPOINTS_DICT.XS]: {
    min: 0,
    max: 640,
  },
  [BREAKPOINTS_DICT.SM]: {
    min: 641,
    max: 1023,
  },
  [BREAKPOINTS_DICT.MD]: {
    min: 1024,
    max: 1239,
  },
  [BREAKPOINTS_DICT.LG]: {
    min: 1240,
    max: 1365,
  },
  [BREAKPOINTS_DICT.XL]: {
    min: 1366,
    max: 99999,
  },
};

/**
 * MEDIA QUERIES
 */
const mediaQueries: Record<MEDIAS_DICT, string> = {
  xsOnly: `(min-width: ${BREAKPOINTS.XS.min}px) and (max-width: ${BREAKPOINTS.XS.max}px)`,
  xsToSm: `(min-width: ${BREAKPOINTS.XS.min}px) and (max-width: ${BREAKPOINTS.SM.max}px)`,
  xsToMd: `(min-width: ${BREAKPOINTS.XS.min}px) and (max-width: ${BREAKPOINTS.MD.max}px)`,
  sm: `(min-width: ${BREAKPOINTS.SM.min}px)`,
  smOnly: `(min-width: ${BREAKPOINTS.SM.min}px) and (max-width: ${BREAKPOINTS.SM.max}px)`,
  smToMd: `(min-width: ${BREAKPOINTS.SM.min}px) and (max-width: ${BREAKPOINTS.MD.max}px)`,
  md: `(min-width: ${BREAKPOINTS.MD.min}px)`,
  mdOnly: `(min-width: ${BREAKPOINTS.MD.min}px) and (max-width: ${BREAKPOINTS.MD.max}px)`,
  lg: `(min-width: ${BREAKPOINTS.LG.min}px)`,
  lgOnly: `(min-width: ${BREAKPOINTS.LG.min}px) and (max-width: ${BREAKPOINTS.LG.max}px)`,
  xl: `(min-width: ${BREAKPOINTS.XL.min}px)`,
  xlOnly: `(min-width: ${BREAKPOINTS.XL.min}px) and (max-width: ${BREAKPOINTS.XL.max}px)`,
};

/**
 * MEDIA QUERY STRING BASE
 */
const queryString = (query: string) => `@media screen and ${query}`;

/**
 * MEDIAQUERY SELECTOR
 * @breakpoint
 * xsOnly, xsToSm, xsToMd, sm, smOnly, smToMd, md, mdOnly, lg, lgOnly, xl, xlOnly, xxl, print
 * @exemple
 * ${media.breakpoint` ...cssRules `}
 * ${media.lg`
 *    [CSS]
 * `}
 * @return the css rules within the mediaQuery selected.
 */
const media: Record<
  MEDIAS_DICT,
  (
    strings: TemplateStringsArray,
    ...rules: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation
> = {
  xsOnly: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.xsOnly])} {
      ${css(strings, ...rules)}
    }
  `,
  xsToSm: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.xsToSm])} {
      ${css(strings, ...rules)}
    }
  `,
  xsToMd: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.xsToMd])} {
      ${css(strings, ...rules)}
    }
  `,
  sm: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.sm])} {
      ${css(strings, ...rules)}
    }
  `,
  smOnly: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.smOnly])} {
      ${css(strings, ...rules)}
    }
  `,
  smToMd: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.smToMd])} {
      ${css(strings, ...rules)}
    }
  `,
  md: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.md])} {
      ${css(strings, ...rules)}
    }
  `,
  mdOnly: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.mdOnly])} {
      ${css(strings, ...rules)}
    }
  `,
  lg: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.lg])} {
      ${css(strings, ...rules)}
    }
  `,
  lgOnly: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.lgOnly])} {
      ${css(strings, ...rules)}
    }
  `,
  xl: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.xl])} {
      ${css(strings, ...rules)}
    }
  `,
  xlOnly: (strings, ...rules) => css`
    ${queryString(mediaQueries[MEDIAS_DICT.xlOnly])} {
      ${css(strings, ...rules)}
    }
  `,
};

/****************************/
/* PRIVATE INTERFACES/TYPES */
/****************************/

/***********/
/* EXPORTS */
/***********/
export { media, MEDIAS_DICT };
