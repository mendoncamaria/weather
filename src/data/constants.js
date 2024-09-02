import London from '../assets/London.jpeg';
import Dubai from '../assets/Dubai.jpeg';
import Melbourne from '../assets/Mebourne.jpeg';
import NewYork from '../assets/NewYork.jpeg';
import Pretoria from '../assets/Pretoria.jpeg';
import Cairo from '../assets/Cairo.jpeg';
import RioDeJanerio from '../assets/RioDeJanerio.jpeg';
import Paris from '../assets/Paris.jpeg';
import HongKong from '../assets/HongKong.jpeg';
import Barcelona from '../assets/Barcelona.jpeg';

export const IMAGES = [
  { src: London, alt: 'London', lat: '51.507351', lon: '-0.127758' },
  { src: Dubai, alt: 'Dubai', lat: '25.276987', lon: '55.296249' },
  { src: Melbourne, alt: 'Melbourne', lat: '-37.813629', lon: '144.963058' },
  { src: NewYork, alt: 'New York', lat: '40.7127281', lon: '-74.0060152' },
  { src: Pretoria, alt: 'Pretoria', lat: '-25.7459277', lon: '28.1879101' },
  { src: Cairo, alt: 'Cairo', lat: '30.044420', lon: '31.235712' },
  {
    src: RioDeJanerio,
    alt: 'Rio De Janerio',
    lat: '-22.906847',
    lon: '-43.172897',
  },
  { src: Paris, alt: 'Paris', lat: '48.856613', lon: '2.352222' },
  { src: HongKong, alt: 'Hong Kong', lat: '22.396427', lon: '114.109497' },
  { src: Barcelona, alt: 'Barcelona', lat: '41.3874', lon: '2.1686' },
];

export const WEEK_FORECAST = [
  {
    day: 'Monday',
    status: 'Rainy',
    wind: '11.2km/h',
    humidity: '23%',
    temperature: '26',
  },
  {
    day: 'Tuesday',
    status: 'Sunny',
    wind: '8km/h',
    humidity: '34%',
    temperature: '34',
  },
  {
    day: 'Wednesday',
    status: 'Cloudy',
    wind: '3km/h',
    humidity: '26%',
    temperature: '23',
  },
  {
    day: 'Thursday',
    status: 'Sunny',
    wind: '9km/h',
    humidity: '27%',
    temperature: '32',
  },
  {
    day: 'Friday',
    status: 'Sunny',
    wind: '11.2km/h',
    humidity: '36%',
    temperature: '35',
  },
  {
    day: 'Saturday',
    status: 'Cloudy',
    wind: '11km/h',
    humidity: '15%',
    temperature: '23',
  },
  {
    day: 'Sunday',
    status: 'Cloudy',
    wind: '9.5km/h',
    humidity: '25%',
    temperature: '25',
  },
];
