import Header from '../components/Header';
import { useState } from 'react';
import { ImageContainer } from '../components/ImageContainer';
import { IMAGES, TODAY_FORECAST, WEEK_FORECAST } from '../data/constants';
import BlurredCard from '../components/Card';
import { getTodayAsNumber } from '../helper/utils';

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);

  const todayIndex = getTodayAsNumber();

  const rearrangedForecast = WEEK_FORECAST.slice(todayIndex).concat(
    WEEK_FORECAST.slice(0, todayIndex)
  );

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

  const getImageCoordinates = (value) => {
    console.log(value);
    setUserLatitude(value.lat);
    setUserLongitude(value.lon);
  };

  return (
    <div style={{ display: 'flex' }}>
      {console.log(userLatitude, 'userLatitude')}
      {console.log(userLongitude, 'userLongitude')}
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
            justifyContent: 'left',
          }}
        >
          {IMAGES.map((image) => (
            <ImageContainer
              key={image.src}
              {...image}
              onImageClick={() => getImageCoordinates(image)}
            />
          ))}
        </div>
        <div
          style={{
            display: 'grid',
            rowGap: '25px',
            columnGap: '30px',
            justifyItems: 'start',
            justifyContent: 'start',
            gridTemplateColumns: 'auto auto auto auto auto',
            paddingTop: '2rem',
          }}
        >
          {rearrangedForecast.map((weather) => (
            <BlurredCard key={weather.day}>
              <div>
                <p>{weather.day}</p>
                <p>{weather.status}</p>
                <div>
                  <div>
                    <p>{weather.wind} </p>
                    <p>{weather.humidity} </p>
                  </div>
                  <div>{weather.temperature} </div>
                </div>
              </div>
            </BlurredCard>
          ))}
        </div>
        <div
          style={{
            display: 'grid',
            rowGap: '25px',
            columnGap: '30px',
            justifyItems: 'start',
            justifyContent: 'start',
            gridTemplateColumns: 'auto auto auto',
            paddingTop: '2rem',
          }}
        >
          {TODAY_FORECAST.map((weather) => (
            <BlurredCard
              key={weather.heading}
              style={{
                width: '350px',
                height: '200px',
              }}
            >
              <div>
                <p>{weather.heading}</p>
                <p>
                  {weather.value} <span>{weather.unit}</span>
                </p>
                <p>{weather.remarks}</p>
              </div>
            </BlurredCard>
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
