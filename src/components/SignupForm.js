import { useState } from "react";
import useSignup from "../hook/useSignup";

import StyledForm from "../styles/StyledForm";
import FormInput from "./FormInput";

const SignupForm = () => {
  const signup = useSignup();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password);
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <FormInput type="email" value={user.email} setValue={setUser} setIsValid={setIsValid} />
      <FormInput type="password" value={user.password} setValue={setUser} setIsValid={setIsValid} />
      <button type="submit" data-testid="signup-button" disabled={!isValid.email || !isValid.password}>
        회원가입
      </button>
    </StyledForm>
  );
};

export default SignupForm;
