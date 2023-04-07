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

const Field = ({ type }) => {
  const text = type === "email" ? "이메일" : "비밀번호";

  return (
    <Wrapper>
      <Label htmlFor={`${type}-input`}>{text}</Label>
      <Input data-testid={`${type}-input`} id={`${type}-input`} type={`${type}`} autoComplete="on" />
    </Wrapper>
  );
};

export default Field;
