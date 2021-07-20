import { FC } from 'react';

interface Props {
  label: string;
  value: string;
}
const WeatherItem: FC<Props> = ({ label, value }) => {
  return (
    <div className='weatherItem'>
      <div className='weatherItemLabel'>{label}:</div>
      <div className='weatherItemValue'>{value}</div>
    </div>
  );
};

export default WeatherItem;
