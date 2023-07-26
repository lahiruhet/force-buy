import EventCard from "./EventCard";
import { styled } from "styled-components";
import axios from "axios";
import React from "react";

export default function Events() {
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

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://vlrgg.cyclic.app/api/events").then((response) => {
      setEvents(response.data.events.slice(0, 5));
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Events</Title>
        <SingleCard>
          {events.map((event, index) => (
            <EventCard
              key={index}
              eventName={event.event_name}
              eventIcon={event.event_logo}
            />
          ))}
        </SingleCard>
      </Wrapper>
    </Container>
  );
}
