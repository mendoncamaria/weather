// import { useState } from 'react';
import './App.css';
// import axios from 'axios';
// import { KEYS } from './keys/secret';
// import Main from './components/main';
// import { errorResponse } from './helper/utils';
// import MyPopup from './components/popup';
import Dashboard from './container/Dashboard';

function App() {
  // const [data, setData] = useState({});
  // const [location, setLocation] = useState('');
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${KEYS.REACT_APP_API_WEATHER_KEY}`;

  // const searchLocation = (event) => {
  //   if (event.key === 'Enter') {
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         setData(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((error) => errorResponse(error));
  //     setLocation('');
  //   }
  // };

  return (
    <>
    <Dashboard />
        {/* <p style={{fontWeight: 'bold', fontSize: '5rem'}}>We are currently upgrading. Please come back later!</p> */}
      {/* <div className="app">
        <button onClick={handleOpenPopup}>Open Popup</button>
        {isPopupOpen && <MyPopup onClose={handleClosePopup} />}
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        <Main data={data} />
      </div> */}
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
