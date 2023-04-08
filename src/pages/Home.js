import { Link } from "react-router-dom";
import styled from "styled-components";

import SignPage from "../styles/SignPage";

const StyledLink = styled(Link)`
  color: black;
`;

const Home = () => {
  return (
    <SignPage>
      <StyledLink to="/signin">로그인</StyledLink>
      <StyledLink to="/signup">회원가입</StyledLink>
    </SignPage>
  );
};

export default Home;
