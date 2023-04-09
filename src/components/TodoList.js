import styled from "styled-components";
import useGetTodoList from "../hook/useGetTodoList";
import deleteTodo from "../utils/deleteTodo";
import updateTodo from "../utils/updateTodo";

import StyledTodoList from "../styles/TodoList";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Container = styled.div`
  width: 100%;
`;

const TodoList = () => {
  const [todoList, setTodoList] = useGetTodoList();

  return (
    <Container>
      <TodoInput setTodoList={setTodoList} />
      <StyledTodoList>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} setTodoList={setTodoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </StyledTodoList>
    </Container>
  );
};

export default TodoList;
