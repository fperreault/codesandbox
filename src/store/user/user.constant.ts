export const ACTION_USER = 'user/init';
export const ACTION_USER_TYPE = {
  pending: `${ACTION_USER}/pending`,
  fulfilled: `${ACTION_USER}/fulfilled`,
  rejected: `${ACTION_USER}/rejected`,
};

export const ACTION_USER_QUERY = 'queryUser';
export const ACTION_USER_QUERY_TYPE = {
  pending: `${ACTION_USER_QUERY}/executeQuery/pending`,
  fulfilled: `${ACTION_USER_QUERY}/executeQuery/fulfilled`,
  rejected: `${ACTION_USER_QUERY}/executeQuery/rejected`,
};

export const ACTION_USER_RESET = 'user/reset';
