import styled from "styled-components";

import { useState } from "react";
import Button from "./Button";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 20rem;
  padding: 1rem;
  border: 1px solid red;
`;

const Form = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  return (
    <Wrapper>
      <EmailInput email={email} setEmail={setEmail} setIsValidEmail={setIsValidEmail} />
      <PasswordInput password={password} setPassword={setPassword} setIsValidPassword={setIsValidPassword} />
      <Button type={`${type}`} disabled={!isValidEmail || !isValidPassword} />
    </Wrapper>
  );
};

export default Form;
