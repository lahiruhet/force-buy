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
  `;
  const Wrapper = styled.div`
    border: 2px solid red;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  `;
  const Left = styled.p`
    flex: 1;
  `;
  const Center = styled.p`
    flex: 2;
    display: flex;
    justify-content: center;
    gap: 10px;
  `;
  const Right = styled.p`
    flex: 1;
  `;
  const TeamA = styled.p``;
  const TeamB = styled.p``;
  const Time = styled.p``;
  const EventIcon = styled.img`
    height: 30px;
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
          vs
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
