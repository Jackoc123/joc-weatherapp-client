import { FC } from 'react';

interface Props {
  title: string;
}

const FormInputLabel: FC<Props> = ({ title }) => {
  return <label htmlFor={`${title}Input`}>{title}: </label>;
};

export default FormInputLabel;
