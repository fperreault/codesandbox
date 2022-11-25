/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1, H2 } from '@components/generics';
import { Button } from '@components/generics';

import { useAppDispatch, useAppSelector } from '@store/store.hook';
import { actionUser, selectUser, useGetUserQuery } from '@store/user';
import { UserState } from '@store/user/user.type';

import { Wrapper, FlexDisplay } from '@styles/tools';

const UserThunk = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector<UserState>(selectUser);

  return (
    <>
      <H2>Fetch User with RTK Thunk</H2>
      {user.loading && <p>loading...</p>}
      {!user.loading && user?.firstName && (
        <>
          <p>First Name: {user.firstName}</p>
        </>
      )}
      <FlexDisplay.Component>
        <Button.Primary
          label='Re-Fetch'
          onClick={() => dispatch(actionUser())}
        />
      </FlexDisplay.Component>
    </>
  );
};

const UserQuery = () => {
  const { data: user, isLoading, refetch } = useGetUserQuery();

  return (
    <>
      <H2>Fetch User with RTK Query</H2>
      {isLoading && <p>loading...</p>}
      {!isLoading && (
        <>
          <p>First Name: {user?.firstName}</p>
        </>
      )}
      <FlexDisplay.Component>
        <Button.Primary label='Re-Fetch' onClick={refetch} />
      </FlexDisplay.Component>
    </>
  );
};

/**
 * Page RTK
 */
const PageRTK = (): JSX.Element => {
  return (
    <Wrapper>
      <H1>Redux Toolkit</H1>
      <section>
        <UserThunk />
      </section>
      <section>
        <UserQuery />
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageRTK };
