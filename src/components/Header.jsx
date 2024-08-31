import { useState, useEffect } from 'react';
import { getTime, getToday } from '../helper/utils';

function Header() {
  const date = getToday();
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [temperatureUnit, setTemperatureUnit] = useState('degC');

  const handleUnitChange = (unit) => {
    setTemperatureUnit(unit);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        // padding: '1.5rem',
        alignItems: 'center',
      }}
    >
      <div>
        <p
          style={{
            fontSize: '2rem',
          }}
        >
          {time}
        </p>
        <p>{date}</p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '5px',
        }}
      >
        <button
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            padding: '0',
            backgroundColor:
              temperatureUnit === 'degC' ? '#007bff' : 'transparent',
            color: temperatureUnit === 'degC' ? '#fff' : '#000',
            border: '1px solid',
            borderColor: temperatureUnit === 'degC' ? '#007bff' : '#d1c9c9',
            cursor: 'pointer',
          }}
          onClick={() => handleUnitChange('degC')}
        >
          °C
        </button>
        {/* <button
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            padding: '0',
            backgroundColor:
              temperatureUnit === 'degF' ? '#007bff' : 'transparent',
            color: temperatureUnit === 'degF' ? '#fff' : '#000',
            border: '1px solid',
            borderColor: temperatureUnit === 'degF' ? '#007bff' : '#d1c9c9',
            cursor: 'pointer',
          }}
          onClick={() => handleUnitChange('degF')}
        >
          °F
        </button> */}
      </div>
    </div>
  );
}

export default Header;
