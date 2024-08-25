import Header from '../components/Header';
import { useState } from 'react';
import London from '../assets/London.jpeg';
import Dubai from '../assets/Dubai.jpeg';
import Melbourne from '../assets/Mebourne.jpeg';
import NewYork from '../assets/NewYork.jpeg';
import Pretoria from '../assets/Pretoria.jpeg';
import { ImageContainer } from '../components/ImageContainer';

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);

  const images = [
    { src: London, alt: 'London' },
    { src: Dubai, alt: 'Dubai' },
    { src: Melbourne, alt: 'Melbourne' },
    { src: NewYork, alt: 'New York' },
    { src: Pretoria, alt: 'Pretoria' },
  ];

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
        style={{
          backgroundColor: '#f1f1f1',
          width: '70vw',
          height: '100vh',
          padding: '2rem',
        }}
      >
        <Header />
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            paddingTop: '1rem',
            justifyContent: 'center',
          }}
        >
          {images.map((image) => (
            <ImageContainer key={image.src} {...image} />
          ))}
        </div>
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
