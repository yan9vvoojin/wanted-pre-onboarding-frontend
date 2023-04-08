import { useState } from "react";
import useSignin from "../hook/useSignin";

import StyledForm from "../styles/StyledForm";
import FormInput from "./FormInput";

const SigninForm = () => {
  const signin = useSignin();
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
    signin(user.email, user.password);
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <FormInput type="email" value={user.email} setValue={setUser} setIsValid={setIsValid} />
      <FormInput type="password" value={user.password} setValue={setUser} setIsValid={setIsValid} />
      <button type="submit" data-testid="signin-button" disabled={!isValid.email || !isValid.password}>
        로그인
      </button>
    </StyledForm>
  );
};

export default SigninForm;
