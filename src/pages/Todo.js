import styled from "styled-components";
import useAccessTokenCheck from "../hook/useAccessTokenCheck";

import TodoList from "../components/TodoList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
`;

const Todo = () => {
  useAccessTokenCheck();

  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  );
};

export default Todo;
