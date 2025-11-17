import axios from 'axios';

// Central axios instance. Uses VUE_APP_API_BASE_URL if provided. If not set,
// use the production API host on Vercel provided by the user.
const baseURL = process.env.VUE_APP_API_BASE_URL || 'https://chris-balogun-pjg2.vercel.app';

const api = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json'
  }
});

// Attach Authorization header automatically when a token exists in
// localStorage under `laraveluser`.
api.interceptors.request.use(
  (config) => {
    try {
      const raw = localStorage.getItem('laraveluser');
      if (raw) {
        const user = JSON.parse(raw);
        // Check common token field names used by various backends
        const token = user?.token || user?.access_token || user?.api_token || user?.remember_token || (user?.user && (user.user.api_token || user.user.token));
        if (token) {
          config.headers = config.headers || {};
          if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
      }
    } catch (e) {
      // ignore JSON parse errors or restricted storage access
      void 0;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: on 401 clear stored session and redirect to login (helps dev UX).
api.interceptors.response.use(
  (response) => response,
  (error) => {
      try {
        const status = error?.response?.status;
        if (status === 401) {
          try { localStorage.removeItem('laraveluser'); } catch (e) { void 0; }
          if (typeof window !== 'undefined') {
            // navigate to login page
            window.location.href = '/login';
          }
        }
      } catch (e) {
        // ignore
        void 0;
      }
    return Promise.reject(error);
  }
);

export default api;
