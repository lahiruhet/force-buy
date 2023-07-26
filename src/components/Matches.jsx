import MatchCard from "./MatchCard";
import { styled } from "styled-components";
import axios from "axios";
import React from "react";

export default function Matches() {
  const Container = styled.div``;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  const Title = styled.h4`
    color: #ffffff;
  `;
  const SingleCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const [matches, setMatches] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://vlrgg.cyclic.app/api/matches/upcoming")
      .then((response) => {
        setMatches(response.data.matches.slice(0, 5));
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Upcoming Matches</Title>
        <SingleCard>
          {matches.map((match, index) => (
            <MatchCard
              key={index}
              teamOneName={match.team_one_name}
              teamTwoName={match.team_two_name}
              matchTime={match.match_time}
              eventName={match.event_name}
              eventIcon={match.event_icon_url}
            />
          ))}
        </SingleCard>
      </Wrapper>
    </Container>
  );
}
