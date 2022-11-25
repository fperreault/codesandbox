/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

import { Button, Form, Input, P } from '@components/generics';

interface FormSubmit {
  newsletterEmail: string;
}

const NewsletterFormBasic: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = ({
    newsletterEmail: email,
  }: FormSubmit) => alert(`Submit abonnement pour: ${email}`);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type='email'
        placeholder='Votre courriel'
        required
        aria-required
        aria-invalid={`${errors.newsletterEmail ? false : true}`}
        {...register('newsletterEmail', {
          required: 'Ce champs est requis',
          pattern: {
            value: /\S+@\S+\.[a-z]{2,}/gi /* or /\S+@\S/gi */,
            message: 'Ce courriel est invalide',
          },
        })}
      />

      <button type='submit'>M’abonner</button>
      {errors.newsletterEmail && (
        <p role='alert'>{`${errors.newsletterEmail.message}`}</p>
      )}
    </form>
  );
};

const NewsletterForm: FC = (): JSX.Element => {
  const onSubmit: SubmitHandler<any> = ({
    newsletterEmail: email,
  }: FormSubmit) => alert(`Submit abonnement pour: ${email}`);

  return (
    <Form
      submit={onSubmit}
      options={{
        mode: 'onBlur',
        reValidateMode: 'onChange',
      }}
    >
      {({ errors }) => (
        <>
          <Input.Email
            name='newsletterEmail'
            label='Votre courriel'
            required
            validation={{
              minLength: {
                value: 5,
                message: 'Un minimum de 5 caractères est requis.',
              },
            }}
          />
          {errors.newsletterEmail && (
            <FieldError role='alert'>
              {`${errors.newsletterEmail.message}`}
            </FieldError>
          )}
          <Button.Primary label='M’abonner' type='submit' />
        </>
      )}
    </Form>
  );
};

const FieldError = styled(P)`
  position: absolute;
  margin-top: -35px;
  color: ${({ theme }) => theme.colors.red};
`;

export { NewsletterForm, NewsletterFormBasic };
