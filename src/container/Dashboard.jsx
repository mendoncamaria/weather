import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { ImageContainer } from '../components/ImageContainer';
import { IMAGES, TODAY_FORECAST, WEEK_FORECAST } from '../data/constants';
import BlurredCard from '../components/Card';
import { getTodayAsNumber } from '../helper/utils';
import { CiLocationOn } from 'react-icons/ci';
import { KEYS } from '../keys/secret';
import axios from 'axios';

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);

  const todayIndex = getTodayAsNumber();
  const rearrangedForecast = WEEK_FORECAST.slice(todayIndex).concat(
    WEEK_FORECAST.slice(0, todayIndex)
  );

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords);
      },
      (error) => console.error('Error getting user location:', error)
    );
  }, []);

  const getWeather = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${KEYS.REACT_APP_API_WEATHER_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleImageClick = (image) => {
    getWeather(image.lat, image.lon);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          backgroundColor: '#f1f1f1',
          width: '70vw',
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
              onImageClick={() => handleImageClick(image)}
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
        }}
      >
        {userLocation && (
          <div>
            <h2>User Location</h2>
            <p>Latitude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>
          </div>
        )}
        <div>Search</div>
        <div
          style={{
            marginTop: '20vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>
            <CiLocationOn /> Dhaka, Bangladesh
          </p>
          <p>19&deg;</p>
          <p>Rainy</p>
          <p>
            <span>H:24%</span>
            <span>W: 8km</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
