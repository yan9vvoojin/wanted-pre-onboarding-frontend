import styled from "styled-components";
import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import TodoList from "../components/TodoList";

const Container = styled.div`
  margin: 1rem auto;
  max-width: 30rem;
`;

const Todo = () => {
  useAccessTokenCheck();

  return (
    <Container>
      <TodoList />
    </Container>
  );
};

export default Todo;
