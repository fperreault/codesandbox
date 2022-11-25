import React, { ReactNode, ReactElement, createElement } from 'react';

import {
  FieldValues,
  FormState,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';

import { Input } from '@components/generics';

interface FormProps {
  children: (formState: FormState<FieldValues>) => ReactElement;
  submit: SubmitHandler<any>;
  options?: Omit<UseFormProps, 'resolver' | 'context' | 'shouldUnregister'>;
}

const Form = ({ children, submit, options }: FormProps): JSX.Element => {
  const { register, handleSubmit, formState } = useForm(options);

  const mapChildren = (child: ReactNode): ReactNode => {
    if (!React.isValidElement(child) || typeof child.type === 'string') {
      return child;
    }

    if (child.type === React.Fragment) {
      return <>{React.Children.map(child.props.children, mapChildren)}</>;
    }

    if (
      child.type !== Input.Text &&
      child.type !== Input.Email &&
      child.type !== Input.Password
    ) {
      return child;
    }

    return createElement(child.type, {
      ...child.props,
      register,
      errors: formState.errors[child.props.name],
    });
  };

  const childrens = mapChildren(children(formState));

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      {childrens}
    </form>
  );
};

/**
 * Exports
 */
export { Form };
