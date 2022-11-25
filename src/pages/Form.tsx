/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import {
  LoginForm,
  NewsletterForm,
  NewsletterFormBasic,
} from '@components/forms';
import { H1, H3 } from '@components/generics';

import { Wrapper } from '@styles/tools';

/**
 * Page Forms
 */
const PageForm = (): JSX.Element => {
  return (
    <Wrapper>
      <H1>Formulaires (React Hook Form)</H1>
      <hr />
      <br />

      <H3>Infolettre (basic)</H3>
      <section>
        <NewsletterFormBasic />
      </section>

      <hr />
      <br />

      <H3>Infolettre (standard)</H3>
      <section>
        <NewsletterForm />
      </section>

      <hr />
      <br />

      <H3>Login (standard)</H3>
      <section>
        <LoginForm />
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageForm };
