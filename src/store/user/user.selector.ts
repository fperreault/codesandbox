import { StoreState } from '@store/store.type';
import { UserState } from '@store/user/user.type';

export const selectUser = ({ user }: StoreState): UserState => user;

export const selectUserFirstName = ({ user }: StoreState): string | undefined =>
  user.firstName;

export const selectUserLastName = ({ user }: StoreState): string | undefined =>
  user.lastName;

export const selectUserName = ({ user }: StoreState): string =>
  `${user?.firstName} ${user?.lastName}`;
