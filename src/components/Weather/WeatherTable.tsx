import { FC, Fragment } from 'react';
import formatTemperature from '../../helpers/formatTemperature';
import formatTime from '../../helpers/formatTime';
import Weather from '../../types/Weather';
import WeatherItem from './components/WeatherItem';
import WeatherTitle from './components/WeatherTitle';

interface Props {
  weather: Weather;
}

const WeatherTable: FC<Props> = ({ weather }) => {
  const {
    currentTemperature,
    humidity,
    maxTemperature,
    minTemperature,
    pressure,
    sunrise,
    sunset,
    location,
  } = weather;
  return (
    <Fragment>
      <WeatherTitle title={`Selected Location: ${location}`} />
      <div className='weatherTable'>
        <div className='weatherColumn'>
          <WeatherTitle title='Temperature' />
          <WeatherItem
            label='Current Temperature'
            value={formatTemperature(currentTemperature)}
          />
          <WeatherItem
            label='Maximum Temperature'
            value={formatTemperature(maxTemperature)}
          />
          <WeatherItem
            label='Minum Temperature'
            value={formatTemperature(minTemperature)}
          />
        </div>
        <div className='weatherColumn'>
          <WeatherTitle title='Atmosphere' />
          <WeatherItem label='Pressure' value={`${pressure}hPa`} />
          <WeatherItem label='Humidity' value={`${humidity}%`} />
        </div>
        <div className='weatherColumn'>
          <WeatherTitle title='Sun' />
          <WeatherItem label='Sunrise' value={`${formatTime(sunrise)}`} />
          <WeatherItem label='Sunset' value={`${formatTime(sunset)}`} />
        </div>
      </div>
    </Fragment>
  );
};

export default WeatherTable;
