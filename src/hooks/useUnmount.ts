import { useRef, useEffect } from 'react';

const useUnmount = (fn: () => any): void => {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => () => ref.current(), []);
};

export { useUnmount };
