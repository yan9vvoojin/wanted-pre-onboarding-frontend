import { useState } from "react";
import useSignin from "../hook/useSignin";
import useSignup from "../hook/useSignup";

import StyledForm from "../styles/StyledForm";
import FormInput from "./FormInput";

const SignForm = ({ mode }) => {
  const signin = useSignin();
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
    if (mode === "signin") {
      signin(user.email, user.password);
      return;
    }
    if (mode === "signup") {
      signup(user.email, user.password);
      return;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput type="email" value={user.email} setValue={setUser} setIsValid={setIsValid} />
      <FormInput type="password" value={user.password} setValue={setUser} setIsValid={setIsValid} />
      <button type="submit" data-testid={`${mode}-button`} disabled={!isValid.email || !isValid.password}>
        {mode === "signin" ? "로그인" : "회원가입"}
      </button>
    </StyledForm>
  );
};

export default SignForm;
