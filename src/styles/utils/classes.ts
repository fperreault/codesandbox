export const classes = (...args: (string | null | undefined | false)[]) =>
  args.filter((a) => Boolean(a)).join(' ');
