import axios from 'axios';

// Central axios instance. Uses VUE_APP_API_BASE_URL if provided, otherwise
// falls back to the URL you supplied.
const baseURL = process.env.VUE_APP_API_BASE_URL || 'https://vercel.com/yehudah-s-projects/chris-balogun-pjg2';

const api = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json'
  }
});

export default api;
