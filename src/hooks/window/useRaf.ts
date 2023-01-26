import { useRef, useEffect, useState, useCallback } from 'react';

import { useUnmount } from '@hooks/useUnmount';

const useRaf = (callback: () => void) => {
  const frame = useRef<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const raf = useCallback(() => {
    if (frame?.current) callback();
    frame.current = requestAnimationFrame(raf);
  }, [frame, callback]);

  useEffect(() => {
    if (isRunning) frame.current = requestAnimationFrame(raf);
    else cancelAnimationFrame(frame.current);
  }, [isRunning, raf]);

  useUnmount(() => {
    cancelAnimationFrame(frame.current);
  });

  return {
    isRunning,
    start: () => setIsRunning(true),
    stop: () => setIsRunning(false),
  };
};

export { useRaf };
