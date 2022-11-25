import { useEffect, useState } from 'react';

const useHiddenMain = () => {
  const [isHiddenMain, setHiddenMain] = useState<boolean>(false);

  useEffect(() => {
    const lastItemFocus: Element | null = document.activeElement;
    const mainElement: HTMLElement | null = document.querySelector('main');

    if (isHiddenMain) {
      mainElement?.setAttribute('aria-hidden', 'true');
    }

    return () => {
      (lastItemFocus as HTMLElement)?.focus();
      mainElement?.removeAttribute('aria-hidden');
    };
  }, [isHiddenMain]);

  return { setHiddenMain };
};

export { useHiddenMain };
