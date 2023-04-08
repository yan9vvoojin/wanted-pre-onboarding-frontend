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

const PasswordInput = ({ password, setPassword, setIsValidPassword }) => {
  const validate = (password) => {
    return password.length >= 8;
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(validate(e.target.value));
  };

  return (
    <Wrapper>
      <Label htmlFor="password-input">비밀번호</Label>
      <Input
        data-testid="password-input"
        id="password-input"
        type="password"
        autoComplete="on"
        value={password}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default PasswordInput;
