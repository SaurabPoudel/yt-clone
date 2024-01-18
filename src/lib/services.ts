import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
})
