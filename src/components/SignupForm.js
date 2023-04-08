import { useState } from "react";
import styled from "styled-components";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

import useSignup from "../hook/useSignup";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 20rem;
  padding: 1rem;
  border: 1px solid red;
`;

const SignupForm = () => {
  const signup = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <EmailInput email={email} setEmail={setEmail} setIsValidEmail={setIsValidEmail} />
      <PasswordInput password={password} setPassword={setPassword} setIsValidPassword={setIsValidPassword} />
      <button type="submit" data-testid="signup-button" disabled={!isValidEmail || !isValidPassword}>
        회원가입
      </button>
    </StyledForm>
  );
};

export default SignupForm;
