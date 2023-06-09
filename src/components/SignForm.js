import { useState } from "react";

import useSign from "../hooks/useSign";
import Button from "../styles/Button";
import Form from "../styles/Form";
import FormInput from "./FormInput";

const SignForm = ({ mode }) => {
  const { signin, signup } = useSign();
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
      signin(user);
    } else {
      signup(user);
    }
  };

  const text = mode === "signin" ? "로그인" : "회원가입";

  return (
    <Form onSubmit={handleSubmit}>
      <span>{text}</span>
      <FormInput
        type="email"
        value={user.email}
        setUser={setUser}
        setIsValid={setIsValid}
      />
      <FormInput
        type="password"
        value={user.password}
        setUser={setUser}
        setIsValid={setIsValid}
      />
      <Button
        type="submit"
        data-testid={`${mode}-button`}
        disabled={!isValid.email || !isValid.password}
      >
        {text}
      </Button>
    </Form>
  );
};

export default SignForm;
