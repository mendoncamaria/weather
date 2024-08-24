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
