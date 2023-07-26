/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export default function EventCard({ eventName, eventIcon }) {
  const Container = styled.div`
    padding: 0 15px 0 15px;
    width: 300px;
    height: 100px;
    background-image: url("https://am-a.akamaihd.net/image?resize=2960:&f=https%3A%2F%2Fassets.valorantesports.com%2Fval%2Fevent-bg-default.32faa1cd2b.jpg");
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
        <EventIcon src={eventIcon}></EventIcon>
        <EventName>{eventName}</EventName>
      </Wrapper>
    </Container>
  );
}
