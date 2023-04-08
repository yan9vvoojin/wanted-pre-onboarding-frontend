import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const Home = () => {
  return (
    <Container>
      <StyledLink to="/signin">로그인</StyledLink>
      <StyledLink to="/signup">회원가입</StyledLink>
    </Container>
  );
};

export default Home;
