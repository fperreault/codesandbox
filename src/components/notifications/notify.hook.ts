import { useContext } from 'react';

import { NotifyContext, NotifyContextProps } from '@components/notifications';

/**
 * Notify Hook
 */
const useNotify = (): NotifyContextProps => {
  const context = useContext(NotifyContext);

  if (!context) {
    throw new Error('No Provider found when calling useNotify.');
  }

  return context;
};

export { useNotify };
