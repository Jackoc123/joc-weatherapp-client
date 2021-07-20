import axios from '../config/api';
import Weather from '../types/Weather';

const getWeather = (location: string) => {
  return axios.get<Weather>(`/weather?location=${location}`);
};

export default getWeather;
