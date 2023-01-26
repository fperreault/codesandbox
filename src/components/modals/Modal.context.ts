import { createContext } from 'react';

import { ModalContextProps } from '@components/modals';

/**
 * Modal Context
 */
const Context = createContext<ModalContextProps | null>(null);
Context.displayName = 'ModalContext';

export { Context as ModalContext };
