import PropTypes from 'prop-types';
import styled from 'styled-components';

function TodayForecast({ data }) {
  const TODAY_FORECAST = [
    {
      heading: ' Humidity',
      value: data?.main?.humidity,
      unit: '%',
      remarks: 'Normal',
    },
    {
      heading: 'Air Quality',
      value: '73',
      unit: '',
      remarks: 'Poor',
    },
    {
      heading: 'Visibility',
      value: Math.abs(data?.visibility / 1000),
      unit: 'km',
      remarks: 'Average',
    },
  ];
  return (
    <Today_Forecast_Container>
      {TODAY_FORECAST.map((weather) => (
        <Today_Forecast_Card key={weather.heading}>
          <div>
            <p>{weather.heading}</p>
            <p>
              {weather.value} <span>{weather.unit}</span>
            </p>
            <p>{weather.remarks}</p>
          </div>
        </Today_Forecast_Card>
      ))}
    </Today_Forecast_Container>
  );
}

TodayForecast.propTypes = {
  data: PropTypes.any,
};

export default TodayForecast;

const Today_Forecast_Container = styled.div`
  display: flex;
  gap: 30px;
  justify-items: start;
  justify-content: start;
  padding-top: 2rem;

  @media screen only and (min-width: 1100px) and (max-width: 1600px) {
  }
`;

const Today_Forecast_Card = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 350px;
  height: 200px;
  background-color: transparent;
`;
