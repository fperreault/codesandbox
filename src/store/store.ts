import { configureStore } from '@reduxjs/toolkit';

import { actionApp } from '@store/app';
import middlewares from '@store/store.middleware';
import reducer from '@store/store.reducer';
import { actionUser } from '@store/user';

const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  reducer,
});

// init store app
store.dispatch(actionApp());

// init user app
store.dispatch(actionUser());

export { store };
