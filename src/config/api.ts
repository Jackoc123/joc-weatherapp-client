import Axios from 'axios';
import Settings from './Settings';

const axios = Axios.create({
  baseURL: `${Settings.apiUrl}`,
});

export default axios;
