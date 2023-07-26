import MatchCard from "./MatchCard";
import { styled } from "styled-components";
import axios from "axios";
import React from "react";

export default function Matches() {
  const Container = styled.div``;
  const Wrapper = styled.div``;

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
      </Wrapper>
    </Container>
  );
}
