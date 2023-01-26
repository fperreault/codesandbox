import { useContext } from 'react';

import { ModalContext, ModalContextProps } from '@components/modals';

/**
 * Modal Hook
 */
const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('No Provider found when calling useModal.');
  }

  return context;
};

export { useModal };
