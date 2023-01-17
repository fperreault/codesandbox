type Cx = (...a: Array<undefined | null | string | boolean>) => string;

const cx: Cx = (...classNames) =>
  classNames
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ');

export { cx };
