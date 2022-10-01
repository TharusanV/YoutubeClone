import axios from 'axios'

const BASE = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'f38a332d90msh0b8c3661d512445p1b7588jsn62d3914576fd',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const APIFetch = async (url) => {
  const { data } = await axios.get(`${BASE}/${url}`, options);

  return data;
};