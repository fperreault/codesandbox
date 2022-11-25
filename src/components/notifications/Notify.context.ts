import { createContext } from 'react';

import { NotifyContextProps } from '@components/notifications';

/**
 * Notify Context
 */
const Context = createContext<NotifyContextProps | null>(null);
Context.displayName = 'NotifyContext';

export { Context as NotifyContext };
