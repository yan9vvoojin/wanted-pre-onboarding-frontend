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

const EmailInput = ({ email, setEmail, setIsValidEmail }) => {
  const validate = (email) => {
    return email.includes("@");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validate(e.target.value));
  };

  return (
    <Wrapper>
      <Label htmlFor="email-input">이메일</Label>
      <Input
        data-testid="email-input"
        id="email-input"
        type="text"
        autoComplete="on"
        value={email}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default EmailInput;
