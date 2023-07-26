/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export default function MatchCard({
  teamOneName,
  teamTwoName,
  matchTime,
  eventName,
  eventIcon,
}) {
  const Container = styled.div`
    width: 700px;
    height: 150px;
    background-image: url("https://am-a.akamaihd.net/image?resize=2960:&f=https%3A%2F%2Fassets.valorantesports.com%2Fval%2Fevent-bg-champions.aaef7f4fc4.jpg");
    background-size: cover;
  `;
  const Wrapper = styled.div`
    color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  `;
  const Left = styled.p`
    flex: 1;
    padding: 0 0 0 20px;
  `;
  const Center = styled.p`
    flex: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  `;
  const Right = styled.p`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding: 0 20px 0 20px;
  `;
  const TeamA = styled.p`
    flex: 1;
  `;
  const TeamB = styled.p`
    flex: 1;
  `;
  const Span = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
  `;
  const Time = styled.p``;
  const EventIcon = styled.img`
    height: 30px;
    width: 30px;
  `;
  const EventName = styled.p`
    font-size: 14px;
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Time>{matchTime}</Time>
        </Left>
        <Center>
          <TeamA>{teamOneName}</TeamA>
          <Span>vs</Span>
          <TeamB>{teamTwoName}</TeamB>
        </Center>
        <Right>
          <EventIcon src={eventIcon}></EventIcon>
          <EventName>{eventName}</EventName>
        </Right>
      </Wrapper>
    </Container>
  );
}
