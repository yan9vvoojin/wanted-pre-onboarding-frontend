import styled from "styled-components";
import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import SignForm from "../components/SignForm";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Signin = () => {
  useAccessTokenCheck();

  return (
    <Container>
      <SignForm mode="signin" />
    </Container>
  );
};

export default Signin;
