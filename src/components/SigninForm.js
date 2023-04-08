import { useState } from "react";
import useSignin from "../hook/useSignin";

import StyledForm from "../styles/StyledForm";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const SigninForm = () => {
  const signin = useSignin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <EmailInput email={email} setEmail={setEmail} setIsValidEmail={setIsValidEmail} />
      <PasswordInput password={password} setPassword={setPassword} setIsValidPassword={setIsValidPassword} />
      <button type="submit" data-testid="signin-button" disabled={!isValidEmail || !isValidPassword}>
        로그인
      </button>
    </StyledForm>
  );
};

export default SigninForm;
