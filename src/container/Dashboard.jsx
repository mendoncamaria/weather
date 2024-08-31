import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { ImageContainer } from '../components/ImageContainer';
import { IMAGES, TODAY_FORECAST, WEEK_FORECAST } from '../data/constants';
import BlurredCard from '../components/Card';
import {
  errorResponse,
  getCountryByCode,
  getTodayAsNumber,
} from '../helper/utils';
import { CiLocationOn } from 'react-icons/ci';
import { KEYS } from '../keys/secret';
import axios from 'axios';

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);
  const [data, setData] = useState({});

  const todayIndex = getTodayAsNumber();
  const rearrangedForecast = WEEK_FORECAST.slice(todayIndex).concat(
    WEEK_FORECAST.slice(0, todayIndex)
  );

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords);
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => console.error('Error getting user location:', error)
    );
  }, []);

  const getWeather = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${KEYS.REACT_APP_API_WEATHER_KEY}`;
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      alert(errorResponse(error));
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
        <div>Search</div>
        {userLocation && data.weather && (
          <div
            style={{
              marginTop: '20vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              gap: '10px',
            }}
          >
            <p>
              <CiLocationOn /> {data.name}, {getCountryByCode(data.sys.country)}
            </p>
            <p style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
              {data.main.temp.toFixed()}&deg;
            </p>
            <p style={{ color: 'yellow' }}>{data.weather[0].main}</p>
            <p
              style={{
                display: 'flex',
                gap: '15px',
                fontSize: '1rem',
              }}
            >
              <span>H: {data.main.humidity}%</span>
              <span>W: {data.wind.speed.toFixed()}km</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
