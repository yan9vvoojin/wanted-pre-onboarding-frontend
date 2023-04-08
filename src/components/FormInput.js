import { useCallback } from "react";
import validateInput from "../utils/validateInput";

import FormInputField from "../styles/FormInputField";
import Input from "../styles/Input";
import Label from "../styles/Label";

const FormInput = ({ type, value, setUser, setIsValid }) => {
  const handleChange = useCallback(
    (e) => {
      setUser((prev) => ({ ...prev, [type]: e.target.value }));
      setIsValid((prev) => ({ ...prev, [type]: validateInput(type, e.target.value) }));
    },
    [type, setUser, setIsValid],
  );

  return (
    <FormInputField>
      <Label htmlFor={`${type}-input`}>{type === "email" ? "이메일" : "비밀번호"}</Label>
      <Input
        data-testid={`${type}-input`}
        id={`${type}-input`}
        type={type === "email" ? "text" : "password"}
        autoComplete="on"
        value={value}
        onChange={handleChange}
      />
    </FormInputField>
  );
};

export default FormInput;
