/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react';

import styled from 'styled-components';

import { P, Button, Form, Input } from '@components/generics';
import { useNotify } from '@components/notifications';

const LoginForm: FC = (): JSX.Element => {
  const notify = useNotify();

  const onSubmit = (values: {
    name: string;
    email: string;
    password: string;
  }) => notify.info('success submit');

  return (
    <>
      <Form
        submit={onSubmit}
        options={{
          mode: 'onBlur',
          reValidateMode: 'onChange',
        }}
      >
        {({ errors }) => (
          <>
            <Input.Email name='email' required />
            {errors.email && (
              <FieldError role='alert'>{`${errors.email.message}`}</FieldError>
            )}

            <Input.Password name='password' required />
            {errors.password && (
              <FieldError role='alert'>{`${errors.password.message}`}</FieldError>
            )}

            <Button.Primary label='Connexion' type='submit' />
          </>
        )}
      </Form>
    </>
  );
};

const FieldError = styled(P)`
  position: absolute;
  margin-top: -35px;
  color: ${({ theme }) => theme.colors.red};
`;

export { LoginForm };
