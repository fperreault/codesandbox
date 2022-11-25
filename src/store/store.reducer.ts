import { combineReducers } from '@reduxjs/toolkit';

import app from '@store/app/app.slice';
import queryUser from '@store/user/user.query';
import user from '@store/user/user.slice';

export default combineReducers({
  app,
  user,
  queryUser,
});
