import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://www.pre-onboarding-selection-task.shop/auth/${type}`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch(url, options);
    if (response.status === 201) {
      navigate("/signin");
      return;
    }
    if (response.status === 200) {
      const { access_token } = await response.json();
      localStorage.setItem("access_token", access_token);
      navigate("/todo");
      return;
    }
  };

  return (
    <Wrapper onSubmit={(e) => handleSubmit(e)}>
      <EmailInput email={email} setEmail={setEmail} setIsValidEmail={setIsValidEmail} />
      <PasswordInput password={password} setPassword={setPassword} setIsValidPassword={setIsValidPassword} />
      <Button type={`${type}`} disabled={!isValidEmail || !isValidPassword} />
    </Wrapper>
  );
};

export default Form;
