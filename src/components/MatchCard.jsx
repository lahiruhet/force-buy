/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export default function MatchCard({ teamOneName, teamTwoName, matchTime }) {
  const Container = styled.div``;
  const Wrapper = styled.div``;
  const TeamA = styled.p``;
  const TeamB = styled.p``;
  const Time = styled.p``;

  return (
    <Container>
      <Wrapper>
        <TeamA>{teamOneName}</TeamA>
        <Time>{matchTime}</Time>
        <TeamB>{teamTwoName}</TeamB>
      </Wrapper>
    </Container>
  );
}
