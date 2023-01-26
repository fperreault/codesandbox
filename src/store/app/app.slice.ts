import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ACTION_APP } from '@store/app';
import * as reducers from '@store/app/app.reducer';
import { AppState } from '@store/app/app.type';

const initialState: AppState = {
  ready: false,
};

// fake app init delay -> 5 seconds
const actionApp = createAsyncThunk(ACTION_APP, async () => {
  const delay = await new Promise((resolve) => setTimeout(resolve, 5000));
  return delay;
});

const sliceApp = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionApp.fulfilled, reducers.appReady);
  },
});

export { actionApp };
export default sliceApp.reducer;
