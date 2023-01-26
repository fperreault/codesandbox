import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL } from '@store/app';
import { ACTION_USER, ACTION_USER_RESET } from '@store/user';
import * as reducers from '@store/user/user.reducer';
import { UserState } from '@store/user/user.type';

const initialState: UserState = {
  loading: false,
};

const actionUser = createAsyncThunk(
  ACTION_USER,
  async (data, { rejectWithValue }) => {
    try {
      const request = await fetch(
        `${API_URL}/384c3247-0014-477b-a0a4-772a9be02b8f`,
      );
      const userData = await request.json();

      return userData;
    } catch (error) {
      return rejectWithValue('Oups');
    }
  },
);

const actionUserReset = createAction(ACTION_USER_RESET);

const sliceUser = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionUser.pending, reducers.userLoading);
    builder.addCase(actionUser.fulfilled, reducers.userReady);
    builder.addCase(actionUser.rejected, reducers.userError);
  },
});

export { actionUser, actionUserReset };
export default sliceUser.reducer;
