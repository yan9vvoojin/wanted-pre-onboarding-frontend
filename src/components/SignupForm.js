import { useState } from "react";
import useSignup from "../hook/useSignup";

import StyledForm from "../styles/StyledForm";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

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
