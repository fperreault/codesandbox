import { AnyAction, Middleware } from 'redux';

import { ACTION_USER_TYPE, ACTION_USER_QUERY_TYPE } from '@store/user';
import { queryUser } from '@store/user/user.query';

const middlewareUser: Middleware =
  (store) => (next) => async (action: AnyAction) => {
    const result = next(action);

    if (action.type === ACTION_USER_TYPE.pending) {
      /* user thunk loading data */
    }

    if (action.type === ACTION_USER_TYPE.fulfilled) {
      /* user thunk fulfilled data */
    }

    if (action.type === ACTION_USER_TYPE.rejected) {
      /* user thunk rejected  */
    }

    return result;
  };

const middlewareQueryUser: Middleware =
  (store) => (next) => async (action: AnyAction) => {
    const result = next(action);

    if (action.type === ACTION_USER_TYPE.pending) {
      /* user query loading data */
    }

    if (action.type === ACTION_USER_QUERY_TYPE.fulfilled) {
      /* user query fulfilled data */
    }

    if (action.type === ACTION_USER_QUERY_TYPE.rejected) {
      /* user query rejected */
    }

    return result;
  };

export default [middlewareUser, middlewareQueryUser, ...[queryUser.middleware]];
