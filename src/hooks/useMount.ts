import { useRef, useEffect, EffectCallback } from 'react';

const useMount = (fn: EffectCallback) => {
  const ref = useRef(fn);
  ref.current = fn;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(ref.current, []);
};

export { useMount };
