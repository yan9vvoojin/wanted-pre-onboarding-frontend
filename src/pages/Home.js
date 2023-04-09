import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <span>원티드 프리온보딩 프론트엔드 - 선발 과제</span>
    </Container>
  );
};

export default Home;
