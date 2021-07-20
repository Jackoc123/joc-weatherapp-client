interface Weather {
  location: string;
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  pressure: number;
  humidity: number;
  sunrise: number;
  sunset: number;
}

export default Weather;
