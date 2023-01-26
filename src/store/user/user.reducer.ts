import { PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '@store/user/user.type';

export const userLoading = (state: UserState) => {
  state.loading = true;
};

export const userReady = (
  state: UserState,
  { payload }: PayloadAction<UserState>,
) => {
  state.loading = false;
  state.firstName = payload.firstName;
  state.lastName = payload.lastName;
};

export const userError = (state: UserState) => {
  state.loading = false;
};
