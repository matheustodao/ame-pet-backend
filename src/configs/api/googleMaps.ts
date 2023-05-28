import { API_KEY_GOOGLE_MAPS } from './../env';
import axios from 'axios';

export const googleMapsApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  params: {
    key: API_KEY_GOOGLE_MAPS
  }
})
