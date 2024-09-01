import styled from 'styled-components';
import BlurredCard from '../components/Card';
import { WEEK_FORECAST } from '../data/constants';
import { getTodayAsNumber } from '../helper/utils';

function WeekyForecast() {
  const todayIndex = getTodayAsNumber();
  const rearrangedForecast = WEEK_FORECAST.slice(todayIndex).concat(
    WEEK_FORECAST.slice(0, todayIndex)
  );
  return (
    <Container>
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
              <div>{weather.temperature}&deg; </div>
            </div>
          </div>
        </BlurredCard>
      ))}
    </Container>
  );
}

export default WeekyForecast;

export const Container = styled.div`
  display: grid;
  row-gap: 25px;
  column-gap: 30px;
  justify-items: start;
  justify-content: start;
  grid-template-columns: repeat(5, auto);
  padding-top: 1rem;

  @media only screen and (min-width: 1300px) and (max-width: 1685px) {
    grid-template-columns: repeat(4, auto) !important;
  }

  @media only screen and (min-width: 990px) and (max-width: 1299px) {
    grid-template-columns: repeat(3, auto) !important;
  }

  @media only screen and (min-width: 650px) and (max-width: 989px) {
    grid-template-columns: repeat(2, auto) !important;
  }
`;
