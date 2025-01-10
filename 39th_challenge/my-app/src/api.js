import axios from 'axios';
import { apiKey } from './unsplash.config';

export const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
