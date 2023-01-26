import { BASE_FONT_SIZE } from '@styles/configs';

/**
 * Convert PX to REM from base fontsize
 * @example
 * font-size: ${rem(18)};
 */
const rem = (px: number, baseFontSize?: number): string => {
  const base = baseFontSize || BASE_FONT_SIZE;
  return `${px / base}rem`;
};

/**
 * Exports
 */
export { rem };
