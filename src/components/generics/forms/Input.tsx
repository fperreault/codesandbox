/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { memo, HTMLProps, useState, ChangeEvent } from 'react';

import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import { Button, Label } from '@components/generics';

import { FlexDirectionColumn, FlexDisplay } from '@styles/tools';

import { randomString } from '@utils/string';

/**
 * INPUT INTERFACE
 * merged with HTMLInputElement
 */
type InputProps = Partial<HTMLProps<HTMLInputElement>> & {
  name: string;
  label?: string;
  register?: UseFormRegister<any>;
  errors?: any;
  validation?: any;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * INPUT TYPES ALLOWED
 */
enum InputTypes {
  EMAIL = 'email',
  TEXT = 'text',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
}

/**
 * INPUT TOP LEVEL DECLARATION
 * @return JSX.Element
 */
const Declaration = (Input: React.FC, props: InputProps): JSX.Element => {
  const { name, label, register, errors, validation, ...rest } = props;
  const registration = register ? register(name, props.validation) : {};

  return (
    <FlexDirectionColumn.Component>
      <Label htmlFor={props.id ? props.id : name}>{label}</Label>
      <Input {...registration} {...rest} />
    </FlexDirectionColumn.Component>
  );
};

/**
 * INPUT TOP LEVEL DECLARATION FOR PASSWORD
 * @return JSX.Element
 */
const DeclarationPwd = (Input: React.FC, props: InputProps): JSX.Element => {
  const { name, label, register, type, errors, validation, ...rest } = props;
  const registration = register ? register(name, props.validation) : {};
  const [showPwd, setShowPwd] = useState(false);

  return (
    <FlexDirectionColumn.Component>
      <Label htmlFor={props.id ? props.id : name}>{label}</Label>
      <InputPasswordWrapper>
        <Input
          {...registration}
          {...rest}
          {...{ type: showPwd ? InputTypes.TEXT : type }}
        />
        <ButtonShowHidePwd
          aria-label={
            showPwd ? 'cacher le mot de passe' : 'afficher le mot de passe'
          }
          aria-checked={showPwd}
          role='switch'
          type='button'
          label={showPwd ? 'Cacher' : 'Afficher'}
          onClick={() => setShowPwd(!showPwd)}
        />
      </InputPasswordWrapper>
    </FlexDirectionColumn.Component>
  );
};

/**
 * INPUT TOP LEVEL DECLARATION FOR CHECKBOX
 * @return JSX.Element
 */
const DeclarationCheckbox = (
  Input: React.FC,
  props: InputProps,
): JSX.Element => {
  const { name, label, register, onInputChange, ...rest } = props;
  const registration = register ? register(name, props.validation) : {};

  return (
    <FlexDirectionColumn.Component>
      <Label htmlFor={props.id ? props.id : name}>{label}</Label>
      <Input
        {...registration}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (onInputChange) onInputChange(e);
        }}
        {...rest}
      />
    </FlexDirectionColumn.Component>
  );
};

/**
 * TEXT DECLARATION
 */
const Text = memo((props: InputProps): JSX.Element => {
  return Declaration(InputDefault, {
    ...props,
    id: props.id ?? `${InputTypes.TEXT}_${randomString()}`,
    type: InputTypes.TEXT,
    label: props.label,
    'aria-invalid': props.errors ?? false,
    'aria-required': props.required ?? false,
    validation: {
      required: props.required && 'Ce champs est requis',
      ...props.validation,
    },
  });
});
Text.displayName = 'InputText';

/**
 * PASSWORD DECLARATION
 */
const Password = React.memo((props: InputProps): JSX.Element => {
  return DeclarationPwd(InputPwdDefault, {
    ...props,
    id: props.id ?? `${InputTypes.PASSWORD}_${randomString()}`,
    type: InputTypes.PASSWORD,
    label: props.label ?? 'Mot de passe',
    'aria-invalid': props.errors ?? false,
    'aria-required': props.required ?? false,
    validation: {
      required: props.required && 'Ce champs est requis',
      ...props.validation,
    },
  });
});
Password.displayName = 'InputPassword';

/**
 * EMAIL DECLARATION
 */
const Email = memo((props: InputProps): JSX.Element => {
  return Declaration(InputDefault, {
    ...props,
    id: props.id ?? `${InputTypes.EMAIL}_${randomString()}`,
    type: InputTypes.EMAIL,
    label: props.label ?? 'Courriel',
    'aria-invalid': props.errors ?? false,
    'aria-required': props.required ?? false,
    validation: {
      required: props.required && 'Ce champs est requis',
      pattern: {
        value: /\S+@\S+\.[a-z]{2,}/gi /* or /\S+@\S/gi */,
        message: 'Ce courriel est invalide',
      },
      ...props.validation,
    },
  });
});
Email.displayName = 'InputEmail';

/**
 * CHECKBOX DECLARATION
 */
const Checkbox = memo((props: InputProps): JSX.Element => {
  return DeclarationCheckbox(InputDefault, {
    ...props,
    id: props.id ?? `${InputTypes.TEXT}_${randomString()}`,
    type: InputTypes.CHECKBOX,
    label: props.label,
    'aria-invalid': props.errors ?? false,
    'aria-required': props.required ?? false,
    validation: {
      required: props.required && 'Ce checkbox est requis',
      ...props.validation,
    },
  });
});
Checkbox.displayName = 'InputCheckbox';

/**
 * DEFAULT STYLE
 */
const InputDefault = styled.input`
  border: 1px solid;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.primary};
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 20px;
  transition: background-color 0.5s ease, border-color 0.5s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey.light};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

/**
 * PASSWORD DEFAULT STYLE
 */
const InputPwdDefault = styled(InputDefault)`
  padding-right: 100px;
`;

const InputPasswordWrapper = styled(FlexDisplay.Component)`
  position: relative;
  overflow: hidden;

  input {
    width: 100%;
  }
`;

const ButtonShowHidePwd = styled(Button.SmallOutlinePrimary)`
  position: absolute;
  right: 12px;
  top: 21px;
`;

/**
 * Exports
 */
const Input = {
  Text,
  Password,
  Email,
  Checkbox,
};
export { Input };
