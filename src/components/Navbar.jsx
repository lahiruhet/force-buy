import { styled } from "styled-components";

export default function Navbar() {
  const Container = styled.div`
    height: 60px;
    background-color: #0f1519;
  `;
  const Wrapper = styled.div`
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Logo = styled.div`
    font-weight: 700;
  `;

  return (
    <Container>
      <Wrapper>
        <Logo>ForceBuy</Logo>
      </Wrapper>
    </Container>
  );
}
