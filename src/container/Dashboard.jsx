import Header from '../components/Header';
import { useState } from 'react';

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{ backgroundColor: '#f1f1f1', width: '70vw', height: '100vh' }}
      >
        <Header />
      </div>
      <div
        style={{
          backgroundImage: 'url(src/assets/clouds.jpeg)',
          width: '30vw',
          height: '100vh',
        }}
      >
        <button onClick={getUserLocation}>Get User Location</button>
        {userLocation && (
          <div>
            <h2>User Location</h2>
            <p>Latitude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
