import { styled } from "styled-components";

export default function Navbar() {
  const Container = styled.div`
    height: 60px;
    background-color: #0031428a;
  `;
  const Wrapper = styled.div`
    height: 100%;
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
