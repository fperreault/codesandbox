import { RefObject, useState, useRef } from 'react';

import { useMount } from '@hooks/useMount';
import { useUnmount } from '@hooks/useUnmount';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = {},
): IntersectionObserverEntry | undefined => {
  const observer = useRef<IntersectionObserver>();
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useMount(() => {
    const node = elementRef?.current;
    if (!node) return;

    observer.current = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (options.once && entry?.isIntersecting) {
          observer?.current?.disconnect();
        }
        setEntry(entry);
      },
      options,
    );
    observer.current.observe(node);
  });

  useUnmount(() => {
    observer?.current?.disconnect();
  });

  return entry;
};

export { useIntersectionObserver };
