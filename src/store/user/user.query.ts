import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@store/app';
import { ACTION_USER_QUERY } from '@store/user';
import { UserState } from '@store/user/user.type';

const queryUser = createApi({
  reducerPath: ACTION_USER_QUERY,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getUser: builder.query<UserState, void>({
      query: () => `/384c3247-0014-477b-a0a4-772a9be02b8f`,
    }),
  }),
});

export { queryUser };
export default queryUser.reducer;
