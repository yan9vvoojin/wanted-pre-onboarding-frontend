import { useState } from "react";
import useSignin from "../hook/useSignin";
import useSignup from "../hook/useSignup";

import Form from "../styles/Form";
import FormField from "./FormField";

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
    <Form onSubmit={handleSubmit}>
      <FormField type="email" value={user.email} setUser={setUser} setIsValid={setIsValid} />
      <FormField type="password" value={user.password} setUser={setUser} setIsValid={setIsValid} />
      <button type="submit" data-testid={`${mode}-button`} disabled={!isValid.email || !isValid.password}>
        {mode === "signin" ? "로그인" : "회원가입"}
      </button>
    </Form>
  );
};

export default SignForm;
