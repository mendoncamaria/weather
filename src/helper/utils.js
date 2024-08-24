import { countries } from '../data/countryMap';

export function convertTimestampToTime(timestamp) {
  // Create a new Date object from the timestamp
  const date = new Date(timestamp * 1000); // Multiply by 1000 as timestamps are in seconds

  // Format the date as desired
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true, // Use 12-hour format
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
