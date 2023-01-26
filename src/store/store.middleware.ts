import { Middleware } from 'redux';

import middlewareApp from '@store/app/app.middleware';
import middlewareUser from '@store/user/user.middleware';

const middlewareValidation: Middleware = () => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error(`Error when dispatching the action:`, action, err);
    throw err;
  }
};

export default [middlewareValidation, ...middlewareApp, ...middlewareUser];
