import styled from 'styled-components';
import BlurredCard from '../components/Card';
import { WEEK_FORECAST } from '../data/constants';
import { getTodayAsNumber } from '../helper/utils';
import { WiStrongWind } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';

function WeekyForecast() {
  const todayIndex = getTodayAsNumber();
  const rearrangedForecast = WEEK_FORECAST.slice(todayIndex).concat(
    WEEK_FORECAST.slice(0, todayIndex)
  );
  return (
    <Container>
      {rearrangedForecast.map((weather) => (
        <BlurredCard key={weather.day}>
          <SubContainer>
            <DayFont>{weather.day}</DayFont>
            <CardFont>{weather.status}</CardFont>
            <BottomSection>
              <HumidityFont>
                <CardFont>
                  <WiStrongWind />
                  {weather.wind}
                </CardFont>
                <CardFont>
                  <WiHumidity />
                  {weather.humidity}
                </CardFont>
              </HumidityFont>
              <div>
                {/* <img src="https://openweathermap.org/img/wn/50d@2x.png" width={100} height={100} /> */}
                <TemperatureFont>{weather.temperature}&deg;</TemperatureFont>
              </div>
            </BottomSection>
          </SubContainer>
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

export const CardFont = styled.p`
  color: #6d6565;
`;

export const TemperatureFont = styled.p`
  color: #000;
  font-size: 3rem;
`;

export const HumidityFont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BottomSection = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SubContainer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const DayFont = styled.p`
  font-size: 1.5rem;
`;
