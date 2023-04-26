import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import StyledHeader from "../styles/Header";
import Button from "../styles/TodoButton";
import Buttons from "../styles/TodoButtons";
import ToggleButton from "../styles/ToggleButton";

import { HOME, SIGNIN, SIGNUP } from "../constants/routes";

const Header = () => {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (access_token) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [access_token]);

  const handleToggleButtonClick = () => {
    if (isSignedIn) {
      localStorage.clear();
      setIsSignedIn(false);
      navigate(HOME);
    } else {
      navigate(SIGNIN);
    }
  };

  const handleSignupButtonClick = () => {
    navigate(SIGNUP);
  };

  return (
    <StyledHeader>
      <span>TODO</span>
      <Buttons>
        <Button onClick={handleToggleButtonClick}>
          {isSignedIn ? "로그아웃" : "로그인"}
        </Button>
        <ToggleButton
          onClick={handleSignupButtonClick}
          shouldDisplay={!isSignedIn}
        >
          회원가입
        </ToggleButton>
      </Buttons>
    </StyledHeader>
  );
};

export default Header;
