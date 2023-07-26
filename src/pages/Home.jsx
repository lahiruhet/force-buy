import Events from "../components/Events";
import Matches from "../components/Matches";
import { styled } from "styled-components";

export default function Home() {
  const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    background-color: #0f1519;
  `;
  return (
    <Container>
      <Matches />
      <Events />
    </Container>
  );
}
