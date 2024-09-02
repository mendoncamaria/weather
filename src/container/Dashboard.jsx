import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { ImageContainer } from '../components/ImageContainer';
import { IMAGES } from '../data/constants';
import { errorResponse, getCountryByCode } from '../helper/utils';
import { CiLocationOn } from 'react-icons/ci';
import { KEYS } from '../keys/secret';
import axios from 'axios';
import TodayForecast from './TodayForecast';
import styled from 'styled-components';
import WeekyForecast from './WeekyForecast';
import BGIMG from '../assets/clouds.jpeg';

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);
  const [data, setData] = useState({});

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
    <div style={{ display: 'flex', minHeight: '100vh', height: 'max-content' }}>
      <DashboardContainer>
        <Header />
        <h2
          style={{
            paddingTop: '2rem',
          }}
        >
          Quick Forecast
        </h2>
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

        <h2
          style={{
            paddingTop: '2rem',
          }}
        >
          Weekly Prediction
        </h2>
        <WeekyForecast />
        <h2
          style={{
            paddingTop: '2rem',
          }}
        >
          Highlights
        </h2>
        <TodayForecast data={data} />
      </DashboardContainer>

      <ForecastContainer image={`url(${BGIMG})`}>
        {/* <div>Search</div> */}
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
      </ForecastContainer>
    </div>
  );
}

export default Dashboard;

export const DashboardContainer = styled.div`
  background-color: #f1f1f1;
  width: 70vw;
  padding: 2rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const ForecastContainer = styled.div`
  background-image: ${(props) => props.image};
  width: 30vw;

  @media (max-width: 650px) {
    width: 100vw;
  }
`;
