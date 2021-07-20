import { FC } from 'react';

interface Props {
  title: string;
}
const WeatherTitle: FC<Props> = ({ title }) => {
  return <div className='weatherTitle'>{title}</div>;
};

export default WeatherTitle;
