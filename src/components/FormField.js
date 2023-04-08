import { useCallback } from "react";
import validateInput from "../utils/validateInput";

import StyledFormField from "../styles/FormField";
import FormInput from "../styles/FormInput";
import FormLabel from "../styles/FormLabel";

const FormField = ({ type, value, setUser, setIsValid }) => {
  const handleChange = useCallback(
    (e) => {
      setUser((prev) => ({ ...prev, [type]: e.target.value }));
      setIsValid((prev) => ({ ...prev, [type]: validateInput(type, e.target.value) }));
    },
    [type, setUser, setIsValid],
  );

  return (
    <StyledFormField>
      <FormLabel htmlFor={`${type}-input`}>{type === "email" ? "이메일" : "비밀번호"}</FormLabel>
      <FormInput
        data-testid={`${type}-input`}
        id={`${type}-input`}
        type={type === "email" ? "text" : "password"}
        autoComplete="on"
        value={value}
        onChange={handleChange}
      />
    </StyledFormField>
  );
};

export default FormField;
