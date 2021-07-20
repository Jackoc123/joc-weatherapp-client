import { FC, Fragment } from 'react';

interface Props {
  error?: string;
}

const FormInputError: FC<Props> = ({ error }) => {
  return (
    <Fragment>
      {error && <div className='formInputError'>{error}</div>}
    </Fragment>
  );
};

export default FormInputError;
