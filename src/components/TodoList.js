import styled from "styled-components";

import useGetTodos from "../hook/useGetTodos";
import TodoItem from "./TodoItem";

const StyledTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid red;
  width: 100%;
  padding: 1rem;
`;

const TodoList = () => {
  const [todoList, setTodoList, getTodos] = useGetTodos();

  return (
    <StyledTodoList>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} setTodoList={setTodoList} />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
