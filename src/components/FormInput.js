import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  min-width: 4rem;
`;

const Input = styled.input`
  width: 100%;
`;

const FormInput = ({ type, value, setValue, setIsValid }) => {
  const validate = (value) => {
    if (type === "email") {
      return value.includes("@");
    }
    if (type === "password") {
      return value.length >= 8;
    }
  };

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [type]: e.target.value }));
    setIsValid((prev) => ({ ...prev, [type]: validate(e.target.value) }));
  };

  return (
    <Wrapper>
      <Label htmlFor={`${type}-input`}>{type}</Label>
      <Input
        data-testid={`${type}-input`}
        id={`${type}-input`}
        type={type === "email" ? "text" : type}
        autoComplete="on"
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default FormInput;
