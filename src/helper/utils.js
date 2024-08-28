import { countries } from '../data/countryMap';

export function convertTimestampToTime(timestamp) {
  const date = new Date(timestamp * 1000);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  const formattedTime = date.toLocaleTimeString('en-US', options);

  return formattedTime;
}

export function errorResponse(error) {
  let code = error.response.data.cod;

  switch (code) {
    case '404':
      console.log('City Not Found');
      break;
    case '400':
      console.log('Bad Request');
      break;
    case '401':
      console.log('Invalid Request!');
      break;
    case '403':
      console.log('You are not allowed to access this service.');
      break;
    case '429':
      console.log(
        'Service experiencing high traffic. Please try again after sometime.'
      );
      break;
    case '500':
      console.log('Internal Server Error');
      break;
    default:
      console.log('Something is wrong! Please try again later');
  }
}

export function getCountryByCode(countryCode) {
  const countryName = countries.filter((code) => code.iso2 === countryCode);
  return countryName[0].country;
}

export function getToday() {
  const now = new Date();
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  };

  const formattedDate = now.toLocaleString('en-IN', options);
  return formattedDate;
}

export function getTime() {
  const now = new Date();
  const options = {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const formattedTime = now.toLocaleString('en-IN', options);
  return formattedTime;
}

export function getTodayAsNumber() {
  const today = new Date();
  return today.getDay() === 0 ? 6 : today.getDay() - 1;
}

export function getHumidityStatus(humidity) {
  const humidityStatusLookup = {
    '0-20': 'Very Dry',
    '21-39': 'Dry',
    '40-60': 'Comfortable',
    '61-75': 'Humid',
    '76-90': 'Very Humid',
    '91-100': 'Extremely Humid',
  };

  const range = Object.keys(humidityStatusLookup).find((range) => {
    const [min, max] = range.split('-').map(Number);
    return humidity >= min && humidity <= max;
  });

  return humidityStatusLookup[range];
}

export function getAirQualityStatus(aqi) {
  let status, color;

  if (aqi <= 50) {
    status = 'Good';
    color = 'green';
  } else if (aqi <= 100) {
    status = 'Moderate';
    color = 'yellow';
  } else if (aqi <= 150) {
    status = 'Unhealthy for Sensitive Groups';
    color = 'orange';
  } else if (aqi <= 200) {
    status = 'Unhealthy';
    color = 'red';
  } else if (aqi <= 300) {
    status = 'Very Unhealthy';
    color = 'purple';
  } else {
    status = 'Hazardous';
    color = 'maroon';
  }

  return { status, color };
}

export function getVisibilityStatus(visibility) {
  // in km
  if (visibility > 10) {
    return 'Excellent visibility';
  } else if (visibility > 5) {
    return 'Good visibility';
  } else if (visibility > 2) {
    return 'Moderate visibility';
  } else if (visibility > 1) {
    return 'Poor visibility';
  } else {
    return 'Very poor visibility';
  }
}
