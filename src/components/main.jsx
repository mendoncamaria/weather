import PropTypes from 'prop-types';
function Main({ data }) {
  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>City: {data.name}</p>
        </div>
        <div className="temp">
          {data.main ? (
            <h1>Temperature: {data.main.temp.toFixed()}°F</h1>
          ) : null}
        </div>
        <div className="description">
          {data.weather ? <p>Clouds :{data.weather[0].main}</p> : null}
        </div>
      </div>

      {data.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <>
                <p>Feels Like</p>
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              </>
            ) : null}
          </div>
          <div className="humidity">
            {data.main ? (
              <>
                <p>Humidity</p>
                <p className="bold">{data.main.humidity}%</p>
              </>
            ) : null}
          </div>
          <div className="wind">
            {data.wind ? (
              <>
                <p>Wind Speed</p>
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      feels_like: PropTypes.shape({
        toFixed: PropTypes.func,
      }),
      humidity: PropTypes.any,
      temp: PropTypes.shape({
        toFixed: PropTypes.func,
      }),
    }),
    name: PropTypes.any,
    weather: PropTypes.any,
    wind: PropTypes.shape({
      speed: PropTypes.shape({
        toFixed: PropTypes.func,
      }),
    }),
  }),
};

export default Main;
