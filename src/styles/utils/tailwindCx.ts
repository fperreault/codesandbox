import { twMerge } from 'tailwind-merge';

type Cx = (...a: Array<undefined | null | string | boolean>) => string;

const tailwindCx: Cx = (...classNames) =>
  twMerge(
    classNames
      .flat()
      .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
      .join(' '),
  );

export { tailwindCx };
