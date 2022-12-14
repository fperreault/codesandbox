import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';

import { useUnmount } from '@hooks/useUnmount';

const useRafState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useUnmount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};

export { useRafState };
