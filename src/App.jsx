import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { KEYS } from './keys/secret';
import Main from './components/main';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${KEYS.REACT_APP_API_WEATHER_KEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error)
          console.log(error.response.data.cod)
        });
      setLocation('');
    }
  };

  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        <Main data={data} />
      </div>
      <footer
        style={{
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        &copy; 2023{' '}
        <a
          href="https://maria-mendonca.vercel.app/"
          target="_self"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          Maria Mendonca
        </a>
      </footer>
    </>
  );
}

export default App;
