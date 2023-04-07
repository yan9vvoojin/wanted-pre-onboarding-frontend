import styled from "styled-components";

import Button from "./Button";
import Field from "./Field";

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
  return (
    <Wrapper>
      <Field type="email" />
      <Field type="password" />
      <Button type={`${type}`} />
    </Wrapper>
  );
};

export default Form;
