import { useEffect, useState, useCallback } from 'react';

import { useUnmount } from '@hooks/useUnmount';

/**
 * Keys type dict
 */
enum Keys {
  ESC = 'Escape',
  SPACE = 'Space',
  TAB = 'Tab',
}

/** HOOK TO GET KEY PRESS DOWN/UP
 * @exemple
 * const isPressKeyV = useKeyPress("v");
 * const isPressKeyEsc = useKeyPress(Keys.ESC);
 * const isPressKeySpace = useKeyPress(Keys.SPACE);
 */
const useKeyPress = (keyValue: string): boolean => {
  const [isKeyPress, setKeyPress] = useState<boolean>(false);

  const onUp = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (key === keyValue || keyValue === code) setKeyPress(false);
    },
    [keyValue],
  );

  const onDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (key === keyValue || keyValue === code) setKeyPress(true);
    },
    [keyValue],
  );

  useEffect(() => {
    document.addEventListener('keydown', onDown);
  }, [onDown]);

  useEffect(() => {
    document.addEventListener('keyup', onUp);
  }, [onUp]);

  useUnmount(() => {
    document.removeEventListener('keydown', onDown);
    document.removeEventListener('keyup', onUp);
  });

  return isKeyPress;
};

export { useKeyPress, Keys };
