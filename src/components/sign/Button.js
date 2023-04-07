import styled from "styled-components";

const Wrapper = styled.button`
  width: 100%;
`;

const Button = ({ type, disabled }) => {
  const text = type === "signup" ? "회원가입" : "로그인";

  return (
    <Wrapper data-testid={`${type}-button`} type="submit" disabled={disabled}>
      {text}
    </Wrapper>
  );
};

export default Button;
