import React, { Dispatch, FC } from 'react';
import FormInputError from './FormInputError';
import FormInputLabel from './FormInputLabel';

interface Props {
  title: string;
  error?: string;
  onChange: Dispatch<React.SetStateAction<string>>;
}

const FormTextInput: FC<Props> = ({ title, error, onChange }, ref) => {
  return (
    <fieldset>
      <FormInputLabel title={title} />
      <input id={`${title}Input`} onChange={(e) => onChange(e.target.value)} />
      <FormInputError error={error} />
    </fieldset>
  );
};
export default FormTextInput;
