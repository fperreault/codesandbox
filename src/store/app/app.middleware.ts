import { AnyAction, Middleware } from 'redux';

import { ACTION_APP_TYPE } from '@store/app';

const middlewareApp: Middleware =
  (store) => (next) => async (action: AnyAction) => {
    const result = next(action);

    if (action.type === ACTION_APP_TYPE.pending) {
      /* app thunk pending  */
    }

    if (action.type === ACTION_APP_TYPE.fulfilled) {
      /* app thunk fulfilled  */
    }

    return result;
  };

export default [middlewareApp];
