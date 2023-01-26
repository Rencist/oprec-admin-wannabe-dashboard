import axios from 'axios';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { SWRConfig } from 'swr';
import { bearerToken } from './lib/helper';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  axios.defaults.baseURL = 'http://localhost:3001/api';
  axios.interceptors.response.use(undefined, async function (err) {
    // const originalRequest = err.config;

    if (err.response.status === 503) {
      return (window.location.href = `${process.env.PUBLIC_URL}/maintenance`);
    }
    return Promise.reject(err);
  });

  return (
    <AuthProvider>
      {/* Team AuthProvider */}
      <div>
        <Toaster
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '8px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </div>
      <SWRConfig
        value={{
          fetcher: (url) =>
            axios
              .get(url, { headers: { ...bearerToken() } })
              .then((res) => res.data),
        }}
      >
        <BrowserRouter basename={process.env.PUBLIC_URL} forceRefresh={true}>
          <Routes />
        </BrowserRouter>
      </SWRConfig>
    </AuthProvider>
  );
};

export default App;
