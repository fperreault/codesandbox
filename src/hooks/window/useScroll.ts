import { useCallback, useEffect, useMemo, useState } from 'react';

import { useUnmount } from '@hooks/useUnmount';

type Callback = (scroll: ScrollInstance) => any;

class ScrollInstance {
  private static instance: ScrollInstance;

  private registred: Array<Callback> = [];
  private raf = 0;

  public y = 0;
  public direction: 'down' | 'up' = 'down';

  constructor() {
    if (!ScrollInstance.instance) ScrollInstance.instance = this;
    else return ScrollInstance.instance;

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.scroll, {
        capture: false,
        passive: true,
      });
    }
  }

  private scroll = () => {
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const lastY = this.y;

      this.y = window.pageYOffset;
      this.direction = lastY > this.y ? 'up' : 'down';

      this.registred.forEach((callback: Callback) =>
        callback(ScrollInstance.instance),
      );
    });
  };

  register = (callback: Callback) => {
    this.registred.push(callback);
  };

  unregister = (callback: Callback) => {
    const index = this.registred.findIndex((cfn) => cfn === callback);
    if (index >= 0) this.registred.splice(index, 1);
  };
}

const useScroll = (cfn: Callback, autoRunning = true) => {
  const [isRunning, setIsRunning] = useState<boolean>(autoRunning);
  const instance = useMemo(() => new ScrollInstance(), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(cfn, []);

  useEffect(() => {
    if (isRunning) instance.register(callback);
    else instance.unregister(callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  useUnmount(() => {
    instance.unregister(callback);
  });

  return {
    instance,
    isRunning,
    start: () => setIsRunning(true),
    stop: () => setIsRunning(false),
  };
};

export { useScroll };
