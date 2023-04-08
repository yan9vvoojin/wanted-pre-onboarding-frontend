import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../styles/TodoButton";
import Buttons from "../styles/TodoButtons";

import { SIGNIN, SIGNUP } from "../constants/routes";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  padding: 1rem;
  background-color: lightpink;
  font-size: 1.5rem;
`;

const SignupButton = styled(Button)`
  display: ${(props) => (props.display ? "block" : "none")};
`;

const Header = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const [hasAccessToken, setHasAccessToken] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setHasAccessToken(true);
    } else {
      setHasAccessToken(false);
    }
  }, [accessToken]);

  const handleToggleButtonClick = () => {
    if (hasAccessToken) {
      localStorage.clear();
      setHasAccessToken(false);
    }
    navigate(SIGNIN);
  };

  const handleSignupButtonClick = () => {
    navigate(SIGNUP);
  };

  return (
    <Container>
      <span>원티드 프리온보딩 프론트엔드 - 선발 과제</span>
      <Buttons>
        <Button onClick={handleToggleButtonClick}>{hasAccessToken ? "로그아웃" : "로그인"}</Button>
        <SignupButton onClick={handleSignupButtonClick} display={!hasAccessToken}>
          회원가입
        </SignupButton>
      </Buttons>
    </Container>
  );
};

export default Header;
