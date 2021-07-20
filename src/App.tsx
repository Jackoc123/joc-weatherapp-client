import { useState } from 'react';
import api from './api';
import './assets/App.css';
import FormTextInput from './components/Form/FormTextInput';
import WeatherTable from './components/Weather/WeatherTable';
import Weather from './types/Weather';

function App() {
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState('');
  const [locationData, setLocationData] = useState<Weather>();

  const onSubmit = async () => {
    if (!location) {
      setLocationError('Please enter a location');
      setLocationData(undefined);
      return;
    }

    try {
      const response = await api.getWeather(location);

      setLocationData(response.data);
      setLocationError('');
    } catch (error) {
      setLocationError('Please enter a valid Location.');
      setLocationData(undefined);
    }
  };

  return (
    <div className='App'>
      <div>Enter a location to check the weather</div>
      <form
        className='locationForm'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <FormTextInput
          onChange={setLocation}
          title='Location'
          error={locationError}
        />
        <button>Submit</button>
      </form>
      {locationData && <WeatherTable weather={locationData} />}
    </div>
  );
}

export default App;
