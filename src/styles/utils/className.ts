import { useMemo } from 'react';

const className = (...classNames: (false | null | undefined | string)[]) => {
  const trim = (value: string) => value.replace(/\s+/g, ' ').trim();
  return { className: trim(classNames.filter(Boolean).join(' ')) };
};

const useClassName = (...classNames: (false | null | undefined | string)[]) => {
  const classNamesTrimmed = useMemo(
    () => className(...classNames),
    [classNames],
  );
  return classNamesTrimmed;
};

export { className, useClassName };
